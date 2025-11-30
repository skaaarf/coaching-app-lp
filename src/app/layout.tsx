import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "AI進路くん｜進路に迷う学生のためのAIキャリア・進路相談",
  description: "進路に迷う高校生・大学生へ。AIキャリアコーチ「AI進路くん」が、悩み相談・価値観分析・振り返り・進路整理をサポート。将来の仕事選びや、大学生の就活前の自己理解にも役立ちます。あなたらしい道を一緒に見つけるAIアプリです。",
  metadataBase: new URL('https://career-counseller.jp'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/icon.png' },
    ],
  },
  openGraph: {
    title: "AI進路くん｜進路に迷う学生のためのAIキャリア相談アプリ",
    description: "進路に迷う高校生・大学生へ。AIキャリアコーチ「AI進路くん」が、悩み相談・価値観分析・振り返り・進路整理をサポート。将来の仕事選びや、大学生の就活前の自己理解にも役立ちます。あなたらしい道を一緒に見つけるAIアプリです。",
    url: 'https://career-counseller.jp',
    siteName: 'AI進路くん',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "AI進路くん｜進路に迷う学生のためのAIキャリア相談アプリ",
    description: "進路に迷う高校生・大学生へ。AIキャリアコーチ「AI進路くん」が、悩み相談・価値観分析・振り返り・進路整理をサポート。将来の仕事選びや、大学生の就活前の自己理解にも役立ちます。あなたらしい道を一緒に見つけるAIアプリです。",
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansJP.variable}`}
        style={{ fontFamily: 'var(--font-noto-sans-jp), var(--font-inter), sans-serif' }}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
