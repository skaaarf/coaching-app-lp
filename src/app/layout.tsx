import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "みかたくん - 学生のためのAI進路相談",
  description: "進路に悩む学生のためのAI進路相談アプリ「みかたくん」。AIとの対話を通じて、自己分析や将来のキャリアについて深く考えることができます。",
  metadataBase: new URL('https://career-counseller.jp'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
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
      </body>
    </html>
  );
}
