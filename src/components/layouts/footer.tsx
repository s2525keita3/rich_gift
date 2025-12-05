import { SITE_CONFIG } from "@/config/site";

/**
 * フッター
 */
export function Footer() {
  return (
    <footer className="bg-navy text-white/60 py-6 px-4 text-center text-xs">
      <p>{SITE_CONFIG.copyright}</p>
    </footer>
  );
}


