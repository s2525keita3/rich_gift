"use client";

import { motion } from "framer-motion";
import { Lock, AlertTriangle, FileText, Sparkles } from "lucide-react";
import { CONTENT } from "@/config/content";
import { SITE_CONFIG } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * ヒーローセクション
 * 1つのPDFを配布し、その価値を訴求
 */
export function HeroSection() {
  const { hero } = CONTENT;

  const handlePdfDownload = () => {
    window.open(SITE_CONFIG.links.pdfDownload, "_blank");
  };

  return (
    <section className="relative overflow-hidden pt-14">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />

      {/* 装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative px-5 py-10 max-w-md mx-auto"
      >
        {/* 限定バッジ */}
        <motion.div variants={staggerItem} className="flex justify-center mb-5">
          <Badge variant="urgent" className="gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            {hero.badge}
          </Badge>
        </motion.div>

        {/* ヘッドライン */}
        <motion.h1 variants={staggerItem} className="text-center mb-3">
          <span className="block text-base text-slate-500 font-medium mb-2">
            {hero.subtitle}
          </span>
          <span className="block text-[1.75rem] sm:text-3xl font-black text-navy leading-tight tracking-tight">
            {hero.title.line1}
            <span className="text-gradient-gold">{hero.title.highlight}</span>
            {hero.title.line2}
            <br />
            {hero.title.line3}
          </span>
        </motion.h1>

        {/* サブヘッド */}
        <motion.p
          variants={staggerItem}
          className="text-center text-base text-slate-600 mb-8"
        >
          {hero.description}
        </motion.p>

        {/* PDF プレビュー */}
        <motion.div
          variants={staggerItem}
          className="relative max-w-[200px] mx-auto mb-8"
        >
          <div className="relative bg-white rounded-2xl shadow-xl p-3 border border-slate-100">
            <div className="aspect-[3/4] bg-gradient-to-br from-navy via-navy-light to-navy rounded-xl flex flex-col items-center justify-center p-5 relative overflow-hidden">
              {/* ゴールドライン */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />

              <FileText className="w-12 h-12 text-white/15 mb-3" />
              <p className="text-white text-center font-bold text-xs leading-relaxed">
                1億円店舗・多店舗展開
                <br />
                訪問看護
                <br />
                ロードマップ
              </p>

              {/* 非売品タグ */}
              <div className="absolute bottom-2 right-2 bg-gold text-navy text-[9px] font-bold px-1.5 py-0.5 rounded">
                非売品
              </div>
            </div>

            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold animate-pulse" />
          </div>
        </motion.div>

        {/* CTA ボタン */}
        <motion.div variants={staggerItem} className="mb-8">
          <Button
            variant="primary"
            size="xl"
            fullWidth
            onClick={handlePdfDownload}
            className="pulse-glow text-base"
          >
            {hero.cta.button}
          </Button>

          <p className="text-center text-xs text-slate-400 mt-3">
            <span className="text-red-400">※</span> {hero.cta.microcopy}
          </p>
        </motion.div>

        {/* Reason Why */}
        <motion.div
          variants={staggerItem}
          className="bg-amber-50/80 border-l-4 border-gold rounded-r-xl p-4"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-bold text-navy mb-1">{hero.reasonWhy.title}</p>
              <p className="leading-relaxed text-slate-600">
                {hero.reasonWhy.content}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
