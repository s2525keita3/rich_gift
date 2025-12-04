import { EmergencyHeader, HeroSection } from "@/components/features/hero";
import { BridgeSection } from "@/components/features/bridge";
import { OfferSection } from "@/components/features/offer";
import { FaqSection } from "@/components/features/faq";
import { StickyFooter } from "@/components/features/cta";
import { Footer } from "@/components/layouts";

/**
 * スペシャルオファーLP
 * 既存リード再アクティベーション用ブリッジページ
 *
 * 構成:
 * 1. Emergency Header - 緊急告知（有料級資料の公開停止警告）
 * 2. Hero Section - PDF配布とその価値訴求
 * 3. Bridge Section - Gap Logic（地図vsコンパスの比喩）
 * 4. Offer Section - 無料個別相談への誘導
 * 5. FAQ Section - よくある質問
 * 6. Sticky Footer - モバイル最適化CTAバー
 */
export default function SpecialOfferPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 緊急告知ヘッダー */}
      <EmergencyHeader />

      {/* ヒーローセクション（PDF配布） */}
      <HeroSection />

      {/* ブリッジセクション（Gap Logic） */}
      <BridgeSection />

      {/* オファーセクション（無料相談） */}
      <OfferSection />

      {/* FAQセクション */}
      <FaqSection />

      {/* フッター */}
      <Footer />

      {/* スティッキーフッターCTA（モバイル最適化） */}
      <StickyFooter />

      {/* スティッキーフッター用スペーサー */}
      <div className="h-20" />
    </main>
  );
}

