import "./globals.css";

export const metadata = {
  title: "Trusted Home 2025",
  description: "A modern home platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 min-h-screen">{children}</body>
    </html>
  );
}