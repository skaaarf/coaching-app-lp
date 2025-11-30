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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI進路くん",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "url": "https://career-counseller.jp",
    "description": "進路に迷う高校生・大学生のためのAIキャリア相談アプリ。価値観診断、人生振り返り、キャリア辞典などの機能で、あなたらしい進路選択をサポートします。",
    "inLanguage": "ja",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "featureList": [
      "AIとの対話型キャリア相談",
      "価値観診断バトル",
      "人生振り返り機能",
      "キャリア辞典・職業情報",
      "自己理解サポート"
    ],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "進路に迷う高校生・大学生"
    },
    "creator": {
      "@type": "Organization",
      "name": "AI進路くん"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2025-11-30",
    "keywords": "キャリア相談, 進路選択, AI, 学生, 価値観診断, 職業情報, キャリア支援, 進路指導, 自己理解, 就活準備",
    "screenshot": "https://career-counseller.jp/icon.png",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1"
    }
  };

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
