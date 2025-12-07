"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Gift,
  FileText,
  Heart,
} from "lucide-react";
import { CONTENT } from "@/config/content";
import { SITE_CONFIG } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * オファーセクション
 * 無料個別相談への誘導 + 残り2PDF+αを特典として提示
 */
export function OfferSection() {
  const { offer } = CONTENT;

  const handleConsultation = () => {
    window.open(SITE_CONFIG.links.consultation, "_blank");
  };

  return (
    <section className="py-12 px-5">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-md mx-auto"
      >
        {/* ヘッドライン */}
        <motion.div variants={staggerItem} className="text-center mb-8">
          <Badge variant="navy" className="mb-4">
            {offer.badge}
          </Badge>
          <h2 className="text-2xl font-black text-navy leading-tight">
            {offer.title.line1}
            <br />
            <span className="text-gradient-gold">{offer.title.highlight}</span>
            {offer.title.line2}
          </h2>
          <p className="text-slate-500 mt-2 text-sm">{offer.subtitle}</p>
        </motion.div>

        {/* 作戦会議の内容 */}
        <motion.div variants={staggerItem}>
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 mb-6 text-white">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-sm">
              <Calendar className="w-5 h-5 text-gold" />
              30分であなた専用の戦略を設計
            </h3>

            <ul className="space-y-3 text-sm">
              {offer.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* 希少性 */}
        <motion.div variants={staggerItem}>
          <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-red-700">
                  {offer.scarcity.period}{" "}
                  <span className="text-2xl">{offer.scarcity.limit}</span>
                  {offer.scarcity.unit}限定
                </p>
                <p className="text-xs text-red-600">{offer.scarcity.reason}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 mt-3">
              <Clock className="w-4 h-4" />
              <span>現在の空き状況は、ボタンを押してご確認ください</span>
            </div>
          </div>
        </motion.div>

        {/* 相談者限定ボーナス（残り2PDF + 事業計画書テンプレート） */}
        <motion.div variants={staggerItem}>
          <div className="bg-gradient-to-br from-gold/5 via-gold/10 to-amber-50 rounded-2xl p-5 mb-8 border border-gold/20">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-gold" />
              <h4 className="font-bold text-navy text-sm">
                相談者限定で4つの特典をプレゼント
              </h4>
            </div>

            <ul className="space-y-3">
              {offer.bonuses.map((bonus, index) => (
                <li
                  key={bonus.id}
                  className="flex items-start gap-3 bg-white/60 rounded-xl p-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{bonus.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {bonus.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-xs text-slate-500 mt-4 text-center">
              {offer.bonusNote}
            </p>
          </div>
        </motion.div>

        {/* なぜ無料なのか */}
        <motion.div variants={staggerItem}>
          <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-red-500" />
              <h4 className="font-bold text-navy text-sm">
                {offer.whyFree.title}
              </h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {offer.whyFree.content}
            </p>
          </div>
        </motion.div>

        {/* CTA ボタン */}
        <motion.div variants={staggerItem}>
          <Button
            variant="secondary"
            size="xl"
            fullWidth
            onClick={handleConsultation}
            className="shimmer-effect text-base"
          >
            <Calendar className="w-5 h-5" />
            {offer.cta.primary}
          </Button>

          <p className="text-center text-xs text-slate-400 mt-3">
            {offer.cta.microcopy}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
