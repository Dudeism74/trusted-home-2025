"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function NewsletterForm({ source = "site" }: { source?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      email: String(form.get("email") ?? ""),
      website: String(form.get("website") ?? ""),
      source,
    };

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Please check your email and try again.");
      }

      setState("success");
      setMessage(result.message ?? "You are on the list.");
      event.currentTarget.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Signup is temporarily unavailable. Please try again.",
      );
    }
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label htmlFor={`newsletter-email-${source}`}>Email address</label>
      <div className="newsletter-fields">
        <input
          id={`newsletter-email-${source}`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          maxLength={254}
        />
        <input
          className="form-honeypot"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <button
          className="button button-dark"
          type="submit"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "Joining..." : "Join the useful list"}
        </button>
      </div>
      <p className="form-note">
        Occasional new guides and meaningful updates. Unsubscribe anytime.
      </p>
      <p
        className={`form-status ${state}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
