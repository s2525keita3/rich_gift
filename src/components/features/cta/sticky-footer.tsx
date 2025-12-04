"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { CONTENT } from "@/config/content";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";

/**
 * スティッキーフッターCTA
 * スクロール後に画面下部に固定表示
 */
export function StickyFooter() {
  const isVisible = useScrollVisibility(300);
  const [shouldShake, setShouldShake] = useState(false);

  // 5秒ごとにシェイクアニメーション
  useEffect(() => {
    const interval = setInterval(() => {
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleConsultation = () => {
    window.open(SITE_CONFIG.links.consultation, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-slate-200 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom"
        >
          <Button
            variant="urgent"
            size="lg"
            fullWidth
            onClick={handleConsultation}
            className={shouldShake ? "cta-shake" : ""}
          >
            <Calendar className="w-5 h-5" />
            {CONTENT.offer.cta.footer}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

