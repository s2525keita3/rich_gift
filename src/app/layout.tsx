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
  title: "年商5億の訪問看護ロードマップ | 特別オファー",
  description: SITE_CONFIG.description,
  openGraph: {
    title: "年商5億の訪問看護ロードマップ（復刻版）",
    description: "失敗する前に、この地図を手に入れてください。年商5億の訪問看護ロードマップを無料でダウンロード。",
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

