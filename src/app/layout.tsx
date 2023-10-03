import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cosermage返图",
  description: "Coser Collection 你要是忘记返图咱就呼呼两拳",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-cn">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
