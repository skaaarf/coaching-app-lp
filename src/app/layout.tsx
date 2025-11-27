import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "みかたくん - 対話とゲームでキャリアを考える",
  description: "対話とゲームでキャリアを考えるアプリ「みかたくん」。AIとの対話やゲームを通じて、楽しく自己分析やキャリアプランニングができます。",
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
      </body>
    </html>
  );
}
