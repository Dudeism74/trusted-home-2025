import { eq, sql } from "drizzle-orm";
import { getDb } from "../../../../../db";
import { comments } from "../../../../../db/schema";
import { getChatGPTUser } from "../../../../chatgpt-auth";

export const dynamic = "force-dynamic";

const OWNER_EMAIL = "jarlof1974@yahoo.com";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getChatGPTUser();
  if (!user || user.email.toLowerCase() !== OWNER_EMAIL) {
    return Response.json({ error: "Not authorized." }, { status: 403 });
  }

  const { id: rawId } = await params;
  const id = Number.parseInt(rawId, 10);
  const payload = (await request.json()) as {
    status?: "approved" | "rejected";
  };

  if (!Number.isSafeInteger(id) || !["approved", "rejected"].includes(payload.status ?? "")) {
    return Response.json({ error: "Invalid moderation request." }, { status: 400 });
  }

  const db = getDb();
  const [updated] = await db
    .update(comments)
    .set({
      status: payload.status!,
      moderatedAt: sql`CURRENT_TIMESTAMP`,
      moderatedBy: user.email.toLowerCase(),
    })
    .where(eq(comments.id, id))
    .returning({ id: comments.id, status: comments.status });

  if (!updated) {
    return Response.json({ error: "Comment not found." }, { status: 404 });
  }

  return Response.json({ comment: updated });
}
