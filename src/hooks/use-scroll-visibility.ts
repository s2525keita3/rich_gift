"use client";

import { useState, useEffect } from "react";

/**
 * スクロール位置に応じた表示制御フック
 * @param threshold - 表示切替のしきい値（px）
 */
export function useScrollVisibility(threshold: number = 300) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    // 初期状態を設定
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isVisible;
}

