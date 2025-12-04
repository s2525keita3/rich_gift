"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * ボタンのバリアント定義
 * Navy/Gold/Whiteデザインシステム準拠
 */
const buttonVariants = cva(
  // ベーススタイル
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl 
   font-bold transition-all duration-200 
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50
   disabled:pointer-events-none disabled:opacity-50
   active:scale-[0.98]`,
  {
    variants: {
      variant: {
        // プライマリ（ゴールド）- メインCTA
        primary: `
          bg-gradient-to-r from-gold via-gold-light to-gold
          text-navy hover:from-gold-light hover:to-gold
          shadow-lg shadow-gold/25
          shimmer-effect
        `,
        // セカンダリ（ネイビー）- サブCTA
        secondary: `
          bg-gradient-to-r from-navy via-navy-light to-navy
          text-white hover:from-navy-light hover:to-navy
          shadow-lg shadow-navy/25
          border border-navy-light
        `,
        // アウトライン
        outline: `
          border-2 border-gold text-gold
          hover:bg-gold hover:text-navy
        `,
        // ゴースト
        ghost: `
          text-navy hover:bg-navy/5
        `,
        // 緊急（赤）- 限定オファー用
        urgent: `
          bg-gradient-to-r from-red-600 to-red-500
          text-white hover:from-red-700 hover:to-red-600
          shadow-lg shadow-red-600/25
        `,
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** CTAシェイクアニメーションを有効化 */
  shake?: boolean;
}

/**
 * ボタンコンポーネント
 * デザインシステム準拠のCTAボタン
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, shake, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          shake && "cta-shake",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

