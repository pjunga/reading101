import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Nav } from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reading 101 학생 프로토타입",
  description: "Reading 101 학생 웹 플로우 프로토타입",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} app-body`}>
        <div className="app-shell">
          <aside className="sidebar">
            <Link href="/" className="sidebar__brand">
              <Image src="/logo.png" alt="Reading 101" width={156} height={29} className="brand-logo-img" />
            </Link>
            <Nav />
            <div className="sidebar__footer">
              <button className="sidebar__action">학습설정</button>
              <button className="sidebar__action">로그아웃</button>
            </div>
          </aside>
          <main className="main-surface">{children}</main>
        </div>
      </body>
    </html>
  );
}
