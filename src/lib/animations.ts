/**
 * Framer Motion アニメーション設定
 * LP全体で使用するアニメーションバリアント
 */

// フェードイン（下から）
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// フェードイン（スケール）
export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: "easeOut" },
};

// スタガード（子要素を順番にアニメーション）
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

// シェイクアニメーション（CTA用）
export const shake = {
  animate: {
    x: [0, -3, 3, -3, 3, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 5,
    },
  },
};

// パルスアニメーション
export const pulse = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// スライドイン（左から）
export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// スライドイン（右から）
export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

