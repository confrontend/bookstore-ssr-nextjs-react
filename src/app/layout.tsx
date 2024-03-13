import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getBooks } from "@/api/book-api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovelTea Bookshop",
  description: "A demo app for showcasing React SSR",
};

export default async function RootLayout({
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
