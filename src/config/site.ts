/**
 * サイト設定
 * URL・著作権情報など
 */
export const SITE_CONFIG = {
  name: "訪問看護 起業塾 & 経営研究協会",
  description:
    "年商5億円・5店舗経営の現役経営者が、訪問看護での成功をサポートします。",
  author: "じょん",
  copyright: "© 2025 じょん. All rights reserved.",

  links: {
    // PDF ダウンロードURL（実際のURLに変更してください）
    pdfDownload: "https://example.com/roadmap.pdf",
    // 無料相談予約URL
    consultation: "https://timerex.net/s/john_houmonkango/04e50b7d",
    // メインサイト
    mainSite: "https://rich-faq.vercel.app/",
  },

  // 実績数値
  stats: {
    stores: 5,
    revenue: "5億円",
    staff: 50,
    visitsPerMonth: "3,500件",
  },
} as const;

