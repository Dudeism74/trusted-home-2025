import type { Metadata } from "next";
import { desc } from "drizzle-orm";
import { notFound } from "next/navigation";
import { getDb } from "../../../db";
import { comments } from "../../../db/schema";
import { requireChatGPTUser } from "../../chatgpt-auth";
import { ModerationPanel } from "./moderation-panel";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Comment moderation",
  robots: { index: false, follow: false },
};

const OWNER_EMAIL = "jarlof1974@yahoo.com";

export default async function CommentModerationPage() {
  const user = await requireChatGPTUser("/admin/comments");
  if (user.email.toLowerCase() !== OWNER_EMAIL) {
    notFound();
  }

  const db = getDb();
  const rows = await db
    .select({
      id: comments.id,
      guideSlug: comments.guideSlug,
      name: comments.name,
      email: comments.email,
      body: comments.body,
      status: comments.status,
      createdAt: comments.createdAt,
    })
    .from(comments)
    .orderBy(desc(comments.createdAt), desc(comments.id))
    .limit(200);

  return (
    <main className="admin-page">
      <p className="eyebrow">Owner tools</p>
      <h1>Comment moderation</h1>
      <p className="admin-intro">
        Signed in as {user.email}. New reader comments remain private until you
        approve them.
      </p>
      <ModerationPanel initialComments={rows} />
    </main>
  );
}
