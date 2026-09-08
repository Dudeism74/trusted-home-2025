import { supportsSitesServices } from "../../lib/server-capabilities";
import { sql } from "drizzle-orm";
import { getDb } from "../../../db";
import { subscribers } from "../../../db/schema";

export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!supportsSitesServices()) {
    return Response.json(
      { error: "Newsletter signup is paused. Contact Jim through the contact page." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
  try {
    const payload = (await request.json()) as {
      email?: string;
      website?: string;
      source?: string;
    };

    if (payload.website?.trim()) {
      return Response.json({
        message: "You are on the list.",
      });
    }

    const email = payload.email?.trim().toLowerCase() ?? "";
    const source = (payload.source?.trim() || "site").slice(0, 100);

    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      return Response.json(
        { error: "Enter a valid email address." },
        { status: 400 },
      );
    }

    const db = await getDb();
    await db
      .insert(subscribers)
      .values({ email, source })
      .onConflictDoUpdate({
        target: subscribers.email,
        set: {
          status: "active",
          source,
          updatedAt: sql`CURRENT_TIMESTAMP`,
        },
      });

    return Response.json(
      { message: "You are on the useful list. Watch your inbox for new guides." },
      { status: 201 },
    );
  } catch {
    return Response.json(
      { error: "Signup is temporarily unavailable. Please try again shortly." },
      { status: 500 },
    );
  }
}
