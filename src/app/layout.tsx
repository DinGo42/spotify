import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
const сairo = Cairo({ subsets: ["latin"], weight: ["200", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={сairo.className}>{children}</body>
    </html>
  );
}
