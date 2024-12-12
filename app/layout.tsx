import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid items-center justify-items-center`}
      >
        <Link href={"/"}>Index</Link>
        search:
        <ul>
          <li>
            <Link href={"/search?q=a"}>q=a</Link>
            <Link href={"/search?q=b"}>q=b</Link>
            <Link href={`/search?q=${Math.random()}`}>q=random</Link>
          </li>
        </ul>
        search 1:
        <ul>
          <li>
            <Link href={"/search1?q=a"}>q=a</Link>
            <Link href={"/search1?q=b"}>q=b</Link>
            <Link href={`/search1?q=${Math.random()}`}>q=random</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}