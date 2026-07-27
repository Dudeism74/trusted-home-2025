"use client";

import { FormEvent, useEffect, useState } from "react";

type PublicComment = {
  id: number;
  name: string;
  body: string;
  createdAt: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function CommentSection({ guideSlug }: { guideSlug: string }) {
  const [comments, setComments] = useState<PublicComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;

    fetch(`/api/comments/${guideSlug}`)
      .then(async (response) => {
        if (!response.ok) return { comments: [] };
        return (await response.json()) as { comments: PublicComment[] };
      })
      .then((result) => {
        if (active) setComments(result.comments ?? []);
      })
      .catch(() => {
        if (active) setComments([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [guideSlug]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      body: String(form.get("body") ?? ""),
      website: String(form.get("website") ?? ""),
    };

    try {
      const response = await fetch(`/api/comments/${guideSlug}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Your comment could not be submitted.");
      }

      setSubmitState("success");
      setMessage(
        result.message ??
          "Thanks. Your comment will appear after editorial review.",
      );
      event.currentTarget.reset();
    } catch (error) {
      setSubmitState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Comment submission is temporarily unavailable.",
      );
    }
  }

  return (
    <section className="reader-section" aria-labelledby="reader-comments">
      <div className="reader-heading">
        <div>
          <p className="eyebrow">Reader questions</p>
          <h2 id="reader-comments">Add useful context, not noise.</h2>
        </div>
        <p>
          Ask a fit question or share a specific correction. Comments are reviewed
          before publication so this guide stays useful.
        </p>
      </div>

      <div className="reader-grid">
        <div className="approved-comments">
          <h3>Published comments</h3>
          {loading ? (
            <p className="muted">Loading comments...</p>
          ) : comments.length ? (
            comments.map((comment) => (
              <article className="reader-comment" key={comment.id}>
                <div>
                  <strong>{comment.name}</strong>
                  <time dateTime={comment.createdAt}>
                    {new Intl.DateTimeFormat("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(comment.createdAt))}
                  </time>
                </div>
                <p>{comment.body}</p>
              </article>
            ))
          ) : (
            <p className="muted">
              No published comments yet. You can be the first to ask a useful
              question.
            </p>
          )}
        </div>

        <form className="comment-form" onSubmit={submit}>
          <div className="form-row">
            <label>
              Display name
              <input name="name" required minLength={2} maxLength={60} />
            </label>
            <label>
              Email, kept private
              <input
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                maxLength={254}
              />
            </label>
          </div>
          <label>
            Comment or question
            <textarea name="body" required minLength={20} maxLength={1200} />
          </label>
          <input
            className="form-honeypot"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <button
            className="button button-primary"
            type="submit"
            disabled={submitState === "submitting"}
          >
            {submitState === "submitting"
              ? "Submitting..."
              : "Submit for review"}
          </button>
          <p
            className={`form-status ${submitState}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
