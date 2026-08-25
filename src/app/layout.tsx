import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TilBron — Repetitor top, dars bron qil",
  description:
    "Repetitorlar bilan onlayn dars bron qilish va boshqarish platformasi.",
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className="antialiased text-slate-900 bg-white">{children}</body>
    </html>
  );
}

export default RootLayout;
