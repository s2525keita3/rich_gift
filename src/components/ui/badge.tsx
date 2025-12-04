import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * バッジのバリアント定義
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full",
  {
    variants: {
      variant: {
        // ゴールド（成功・価値）
        gold: "bg-gold/10 text-gold border border-gold/20",
        // ネイビー（信頼・権威）
        navy: "bg-navy text-white",
        // 緊急（限定・警告）
        urgent: "bg-red-100 text-red-700 border border-red-200",
        // 成功
        success: "bg-green-100 text-green-700 border border-green-200",
        // ニュートラル
        neutral: "bg-slate-100 text-slate-700",
      },
    },
    defaultVariants: {
      variant: "gold",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * バッジコンポーネント
 */
export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

