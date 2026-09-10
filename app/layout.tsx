import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/lib/context/auth-context";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import { GoogleAdSenseClient } from "@/components/ads/google-adsense";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Algoryn | Company-wise Coding Interview Prep",
  description: "Practice LeetCode problems by company, filter by topic, and track your solved progress.",
  icons: {
    icon: [
      { url: "/logos/algorynlog.png" },
      { url: "/favicon.png" },
    ],
    shortcut: "/logos/algorynlog.png",
    apple: "/logos/algorynlog.png",
  },
  verification: {
    google: "sKduJUpBtwb0W5gAe9_Jr9uotMP45E7LVwBF0hQwsvI",
  },
  other: {
    "google-adsense-account": "ca-pub-7449708956977518",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7449708956977518" />
        <link rel="icon" href="/logos/algorynlog.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logos/algorynlog.png" />
        <GoogleAdSenseClient />
      </head>
      <body className={`${fontSans.variable} ${fontHeading.variable} antialiased`}>
        <AuthProvider>
          <TooltipProvider>
            {children}
            <Toaster position="top-center" />
          </TooltipProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
