# 訪問看護 スペシャルオファーLP

> 年商5億円・5店舗経営の実績を武器に、訪問看護起業塾（80万円）と経営研究協会（月額1万円）へのCV最大化を目指すブリッジLP

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?logo=framer)](https://www.framer.com/motion/)

---

## 📋 Project Overview

このプロジェクトは、**訪問看護事業の開業・経営支援サービス**のランディングページです。

LINE公式アカウントの既存リード（3,000名）に対して、**PDFダウンロード → 個別相談予約**への転換を最大化するための「ブリッジLP」として設計されています。

### Business Goals

| 目標 | 詳細 |
|------|------|
| **主要KPI** | 個別相談予約（無料作戦会議）の獲得 |
| **バックエンド商品** | 起業塾（80万円）/ 経営研究協会（月額1万円） |
| **ターゲット** | 訪問看護の開業を目指す看護師・経営者 |
| **配信チャネル** | LINE公式アカウント内ブラウザ（モバイル99%） |

---

## 🚀 Quick Start

```bash
# 1. リポジトリをクローン
git clone <repository-url>
cd rich_gift

# 2. 依存関係をインストール
npm install

# 3. 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000/special-offer を開く

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js (App Router) | 16.0.7 |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | 4.x |
| **Animation** | Framer Motion | 12.x |
| **Icons** | Lucide React | 0.555.0 |
| **UI Utils** | class-variance-authority, clsx, tailwind-merge | - |
| **Font** | Noto Sans JP (Google Fonts) | - |

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css               # グローバルスタイル & デザイントークン
│   ├── layout.tsx                # ルートレイアウト
│   ├── page.tsx                  # ルート（/special-offerへリダイレクト）
│   └── special-offer/
│       └── page.tsx              # メインLP
│
├── components/
│   ├── features/                 # 機能別コンポーネント
│   │   ├── hero/                 # ヒーローセクション
│   │   ├── bridge/               # ブリッジセクション（Gap Logic）
│   │   ├── offer/                # オファーセクション
│   │   ├── faq/                  # FAQセクション
│   │   └── cta/                  # スティッキーCTA
│   ├── layouts/                  # レイアウトコンポーネント
│   │   └── footer.tsx
│   └── ui/                       # プリミティブUIコンポーネント
│       ├── button.tsx
│       ├── badge.tsx
│       └── card.tsx
│
├── config/                       # 設定・コンテンツ
│   ├── content.ts                # LP文言（ライター編集用）
│   └── site.ts                   # サイト設定・URL
│
├── hooks/                        # カスタムフック
│   └── use-scroll-visibility.ts
│
└── lib/                          # ユーティリティ
    ├── animations.ts             # Framer Motionバリアント
    └── utils.ts                  # Tailwindマージ関数
```

---

## ⚙️ Configuration

### URL設定（本番環境用）

```typescript
// src/config/site.ts
export const SITE_CONFIG = {
  links: {
    pdfDownload: "https://your-pdf-url.com",      // PDF配布URL
    consultation: "https://your-booking-url.com", // 予約カレンダーURL
  },
};
```

### コンテンツ編集

ライターが編集可能な文言は `src/config/content.ts` に集約されています。

---

## 📱 Responsive Design

| Device | Breakpoint | 最適化機能 |
|--------|------------|------------|
| **Mobile** | < 640px | スティッキーCTAバー、タップしやすいボタン |
| **Tablet** | 640px - 1024px | 中間レイアウト |
| **Desktop** | > 1024px | 最大幅制限（max-w-md） |

※ LINEアプリ内ブラウザでの閲覧が99%のため、**モバイルファースト設計**

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| **Navy** | `#0f172a` | 信頼・権威・メインテキスト |
| **Gold** | `#d4af37` | 成功・価値・CTAアクセント |
| **White** | `#ffffff` | 背景・清潔感 |

---

## 📚 Documentation

| ファイル | 内容 |
|---------|------|
| `PROJECT_BLUEPRINT.md` | ビジネス要件・戦略・ペルソナ定義 |
| `TECH_SPEC.md` | 技術仕様・アーキテクチャ・データフロー |

---

## 🔧 Scripts

```bash
npm run dev      # 開発サーバー起動（Turbopack）
npm run build    # 本番ビルド
npm run start    # 本番サーバー起動
npm run lint     # ESLintチェック
```

---

## 📄 License

© 2025 じょん. All rights reserved.
