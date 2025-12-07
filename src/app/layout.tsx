import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "1億円店舗の作り方・多店舗展開のロードマップ",
  description: SITE_CONFIG.description,
  icons: {
    icon: "/JNHClogo-greenback-logo.png",
  },
  openGraph: {
    title: "1億円店舗の作り方・多店舗展開のロードマップ",
    description: "一度立ち止まって整理しませんか？訪問看護の1億円店舗・多店舗展開ロードマップを無料でダウンロード。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>{children}</body>
    </html>
  );
}


