"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

// Explicitly exclude routes where Google strictly prohibits ads:
// - /login: Authentication / behavioral screen without publisher content
// - /dashboard: User application shell behind login wall
const EXCLUDED_ROUTES = ["/login", "/dashboard"];

export function GoogleAdSenseClient() {
  const pathname = usePathname();

  // If the user is on /login or /dashboard, DO NOT inject the AdSense script
  const isExcluded = EXCLUDED_ROUTES.some(
    (route) => pathname === route || pathname?.startsWith(`${route}/`)
  );

  if (isExcluded) {
    return null;
  }

  return (
    <Script
      id="google-adsense-script"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7449708956977518"
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
