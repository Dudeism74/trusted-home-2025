"use client";

import { useState } from "react";

type ModerationComment = {
  id: number;
  guideSlug: string;
  name: string;
  email: string | null;
  body: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

export function ModerationPanel({
  initialComments,
}: {
  initialComments: ModerationComment[];
}) {
  const [items, setItems] = useState(initialComments);
  const [working, setWorking] = useState<number | null>(null);

  async function moderate(id: number, status: "approved" | "rejected") {
    setWorking(id);
    const response = await fetch(`/api/admin/comments/${id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (response.ok) {
      setItems((current) =>
        current.map((item) => (item.id === id ? { ...item, status } : item)),
      );
    }
    setWorking(null);
  }

  return (
    <div className="moderation-list">
      {items.length ? (
        items.map((comment) => (
          <article className={`moderation-card ${comment.status}`} key={comment.id}>
            <header>
              <div>
                <strong>{comment.name}</strong>
                <span>{comment.email ?? "No email provided"}</span>
              </div>
              <span>{comment.status}</span>
            </header>
            <p>{comment.body}</p>
            <footer>
              <span>{comment.guideSlug}</span>
              <time dateTime={comment.createdAt}>{comment.createdAt}</time>
            </footer>
            <div className="moderation-actions">
              <button
                className="button button-primary"
                type="button"
                disabled={working === comment.id || comment.status === "approved"}
                onClick={() => moderate(comment.id, "approved")}
              >
                Approve
              </button>
              <button
                className="button"
                type="button"
                disabled={working === comment.id || comment.status === "rejected"}
                onClick={() => moderate(comment.id, "rejected")}
              >
                Reject
              </button>
            </div>
          </article>
        ))
      ) : (
        <p>No comments have been submitted.</p>
      )}
    </div>
  );
}
