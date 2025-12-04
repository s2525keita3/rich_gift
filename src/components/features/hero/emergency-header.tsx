"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { CONTENT } from "@/config/content";

/**
 * 緊急告知ヘッダー
 * 画面上部に固定表示される警告バー
 */
export function EmergencyHeader() {
  const { emergencyHeader } = CONTENT;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 py-2.5 px-3 shadow-md"
    >
      <div className="flex items-center justify-center gap-2 text-center max-w-2xl mx-auto">
        <AlertTriangle className="w-5 h-5 text-amber-900 flex-shrink-0 animate-pulse" />
        <p className="text-xs sm:text-sm font-bold text-amber-900 leading-tight">
          <span className="text-red-700">{emergencyHeader.prefix}</span>
          {emergencyHeader.message}
        </p>
      </div>
    </motion.header>
  );
}

