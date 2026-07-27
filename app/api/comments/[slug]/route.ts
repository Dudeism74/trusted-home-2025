import { and, asc, count, eq, gte, sql } from "drizzle-orm";
import { getDb } from "../../../../db";
import { comments } from "../../../../db/schema";
import { getProduct } from "../../../lib/products";

export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

async function fingerprint(request: Request) {
  const source =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  const data = new TextEncoder().encode(`the-comment-rate-limit:${source}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    if (!getProduct(slug)) {
      return Response.json({ error: "Guide not found." }, { status: 404 });
    }

    const db = getDb();
    const rows = await db
      .select({
        id: comments.id,
        name: comments.name,
        body: comments.body,
        createdAt: comments.createdAt,
      })
      .from(comments)
      .where(and(eq(comments.guideSlug, slug), eq(comments.status, "approved")))
      .orderBy(asc(comments.createdAt), asc(comments.id))
      .limit(100);

    return Response.json({ comments: rows });
  } catch {
    return Response.json({ comments: [] });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    if (!getProduct(slug)) {
      return Response.json({ error: "Guide not found." }, { status: 404 });
    }

    const payload = (await request.json()) as {
      name?: string;
      email?: string;
      body?: string;
      website?: string;
    };

    if (payload.website?.trim()) {
      return Response.json(
        { message: "Thanks. Your comment will appear after editorial review." },
        { status: 201 },
      );
    }

    const name = normalizeText(payload.name ?? "");
    const email = payload.email?.trim().toLowerCase() || null;
    const body = normalizeText(payload.body ?? "");

    if (name.length < 2 || name.length > 60) {
      return Response.json(
        { error: "Display name must be between 2 and 60 characters." },
        { status: 400 },
      );
    }
    if (email && (!EMAIL_PATTERN.test(email) || email.length > 254)) {
      return Response.json(
        { error: "Enter a valid email address or leave it blank." },
        { status: 400 },
      );
    }
    if (body.length < 20 || body.length > 1200) {
      return Response.json(
        { error: "Comment must be between 20 and 1,200 characters." },
        { status: 400 },
      );
    }

    const ipHash = await fingerprint(request);
    const db = getDb();
    const [recent] = await db
      .select({ value: count() })
      .from(comments)
      .where(
        and(
          eq(comments.ipHash, ipHash),
          gte(comments.createdAt, sql`datetime('now', '-1 hour')`),
        ),
      );

    if ((recent?.value ?? 0) >= 3) {
      return Response.json(
        { error: "Too many recent submissions. Please try again later." },
        { status: 429 },
      );
    }

    await db.insert(comments).values({
      guideSlug: slug,
      name,
      email,
      body,
      ipHash,
    });

    return Response.json(
      { message: "Thanks. Your comment will appear after editorial review." },
      { status: 201 },
    );
  } catch {
    return Response.json(
      { error: "Comment submission is temporarily unavailable." },
      { status: 500 },
    );
  }
}
