"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Map, Compass } from "lucide-react";
import { CONTENT } from "@/config/content";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * ブリッジセクション（Gap Logic）
 * PDFだけでは不十分という問題提起 → 個別相談への橋渡し
 */
export function BridgeSection() {
  const { bridge } = CONTENT;

  return (
    <section className="py-12 px-5 bg-slate-50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-md mx-auto"
      >
        {/* 確認メッセージ */}
        <motion.div
          variants={staggerItem}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <p className="font-bold text-navy">{bridge.confirmation.title}</p>
        </motion.div>

        {/* 警告 */}
        <motion.div variants={staggerItem} className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-black text-navy">
              {bridge.warning.title}
            </h2>
          </div>

          <div className="space-y-4">
            {/* 地図 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <Map className="w-5 h-5 text-slate-400" />
                <p className="font-bold text-navy text-sm">
                  {bridge.warning.map.title}
                </p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {bridge.warning.map.description}
              </p>
            </div>

            {/* コンパス */}
            <div className="bg-gradient-to-br from-gold/5 to-gold/10 rounded-2xl p-5 border border-gold/20">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-5 h-5 text-gold" />
                <p className="font-bold text-navy text-sm">
                  {bridge.warning.compass.title}
                </p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">
                {bridge.warning.compass.description}
              </p>
              <p className="text-sm text-red-600 font-medium">
                {bridge.warning.compass.risk}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
