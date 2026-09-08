import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/lib/context/auth-context";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

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
  title: "CodeCraft Company-wise Coding Interview Prep",
  description: "Practice LeetCode problems by company, filter by topic, and track your solved progress.",
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7449708956977518"
          crossOrigin="anonymous"
        />
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
