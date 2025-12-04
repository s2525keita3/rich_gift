import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * カードコンポーネント
 */
const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-white shadow-lg border border-slate-100",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

/**
 * カードヘッダー
 */
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-0", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

/**
 * カードコンテンツ
 */
const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

/**
 * ゴールドアクセントカード
 * 重要なオファーやボーナス表示用
 */
const GoldCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl bg-gradient-to-br from-gold/5 to-gold/10",
        "border-2 border-gold/30 shadow-lg",
        "overflow-hidden",
        className
      )}
      {...props}
    />
  )
);
GoldCard.displayName = "GoldCard";

/**
 * ネイビーカード
 * 信頼感のある情報表示用
 */
const NavyCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-gradient-to-br from-navy to-navy-light",
        "text-white shadow-xl",
        className
      )}
      {...props}
    />
  )
);
NavyCard.displayName = "NavyCard";

export { Card, CardHeader, CardContent, GoldCard, NavyCard };

