const goneHeaders = {
  "Cache-Control": "public, max-age=3600",
  "Content-Type": "text/plain; charset=utf-8",
  "X-Robots-Tag": "noindex",
};

// The previous site published articles as single-segment root URLs.
// Current named routes take precedence; anything else at this level is retired.
export function GET() {
  return new Response("Gone", {
    status: 410,
    headers: goneHeaders,
  });
}

export function HEAD() {
  return new Response(null, {
    status: 410,
    headers: goneHeaders,
  });
}
