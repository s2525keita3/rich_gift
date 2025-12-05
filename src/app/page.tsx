import { redirect } from "next/navigation";

/**
 * ルートページ
 * special-offerにリダイレクト
 */
export default function Home() {
  redirect("/special-offer");
}


