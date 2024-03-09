import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Json Cohen GPT",
  description: "An example of RAG-based GenAI.",
  openGraph: {
    type: "website",
    images: [
      {
        url: "https://dangpt.vercel.app/og.jpg",
        width: 1200,
        height: 600,
        alt: "JsonCohenGPT",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
