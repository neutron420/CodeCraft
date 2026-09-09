import { Metadata } from "next";
import { HeroHeader } from "@/components/templates/nova/sections/header";
import Footer from "@/components/templates/nova/sections/footer-1";
import Link from "next/link";
import { ShieldCheck, Cookie, Lock, Eye, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | CodePrep - Coding Interview Prep",
  description:
    "Learn how CodePrep collects, uses, and safeguards your personal information and our compliance with Google AdSense and international privacy standards.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 9, 2026";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <HeroHeader />

      <main className="flex-1 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Badge & Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-600 dark:text-orange-400 text-xs font-medium mb-4">
              <ShieldCheck className="size-4" />
              <span>Legal & Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Your privacy and trust are paramount. Here is a transparent breakdown of how CodePrep collects, uses, and protects your information.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-3">
              Last Revised: <span className="font-medium text-foreground">{lastUpdated}</span>
            </p>
          </div>

          {/* Policy Content Sections */}
          <div className="space-y-10 text-sm sm:text-base leading-relaxed text-muted-foreground">
            {/* 1. Introduction */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <span className="flex items-center justify-center size-7 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold">1</span>
                Introduction & Overview
              </h2>
              <p className="mb-3">
                Welcome to <strong>CodePrep</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operated at <em>codeprep.app</em>. CodePrep is an interview preparation platform designed to help software engineers practice company-wise coding questions, study data structures and algorithms, and track their problem-solving progress.
              </p>
              <p>
                This Privacy Policy explains how we collect, handle, process, and protect your information when you visit our website, register for an account, or use any of our educational services.
              </p>
            </section>

            {/* 2. Mandatory Google AdSense & Advertising Disclosures */}
            <section className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <Cookie className="size-6 text-orange-500" />
                Google AdSense & Third-Party Advertising Policy
              </h2>
              <div className="space-y-3">
                <p>
                  To keep our coding resources accessible, we display advertisements served by <strong>Google AdSense</strong> and authorized third-party ad networks. Please review the following details regarding how advertising cookies operate on our platform:
                </p>
                <ul className="list-disc pl-6 space-y-2.5 my-3 text-foreground/90">
                  <li>
                    <strong>Third-Party Vendor Cookies:</strong> Third-party vendors, including Google, use cookies (such as the Google DoubleClick cookie) to serve ads based on your prior visits to CodePrep and other websites across the Internet.
                  </li>
                  <li>
                    <strong>Personalized Advertising:</strong> Google&apos;s use of advertising cookies enables it and its partner networks to serve relevant ads to you based on your visits to our site and other destinations online.
                  </li>
                  <li>
                    <strong>Opt-Out Options:</strong> You have the right to opt out of personalized advertising at any time by visiting{" "}
                    <a
                      href="https://www.google.com/settings/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline font-medium"
                    >
                      Google Ads Settings
                    </a>
                    . Alternatively, you may opt out of third-party vendor cookies for personalized advertising by visiting{" "}
                    <a
                      href="https://www.aboutads.info/choices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline font-medium"
                    >
                      www.aboutads.info
                    </a>
                    .
                  </li>
                  <li>
                    <strong>No Ads on Restricted Screens:</strong> In accordance with Google AdSense Publisher Policies, advertisements are restricted to content-rich educational pages and are intentionally disabled on authentication screens (such as login and signup) and internal account management shells.
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Information We Collect */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <span className="flex items-center justify-center size-7 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold">2</span>
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-foreground font-medium mb-1.5">A. Information You Provide Directly</h3>
                  <p>
                    When you sign up or contact us, you may provide your email address, username, password, or feedback. When using our coding dashboard, your problem-solving progress, bookmarks, and completed problem tags are stored securely to provide your personalized learning experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1.5">B. Automated Technical & Usage Data</h3>
                  <p>
                    Like most web services, our servers automatically log standard web requests, including your browser type, device operating system, referring URL, pages viewed, time spent, and IP address. This data is used solely for security auditing, performance diagnostics, and system stability.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. How We Use Your Information */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <span className="flex items-center justify-center size-7 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold">3</span>
                How We Use Your Information
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3.5 mt-2">
                {[
                  "Provide, operate, and maintain the interview practice platform",
                  "Save and synchronize your solved LeetCode problem progress",
                  "Monitor server performance, detect bots, and prevent fraud",
                  "Deliver non-intrusive, relevant advertisements and sponsors",
                  "Send account-related notifications (e.g. password resets)",
                  "Comply with legal requirements and enforce platform terms",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-muted/40 p-3 rounded-xl border border-border/40">
                    <CheckCircle2 className="size-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Data Security & Storage */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <Lock className="size-5 text-orange-500" />
                Data Protection & Security
              </h2>
              <p>
                We implement industry-standard encryption protocols (HTTPS / TLS 1.3), hashed password storage, and secure authentication tokens to safeguard your personal data. While no internet transmission is 100% immune from vulnerabilities, we continually audit our infrastructure to protect your personal learning records.
              </p>
            </section>

            {/* 6. User Rights (GDPR & CCPA) */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <Eye className="size-5 text-orange-500" />
                Your Rights & Data Choices
              </h2>
              <p className="mb-3">
                Regardless of your geographic location, you retain full rights to:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mb-3">
                <li>Access, download, or inspect the personal information linked to your account.</li>
                <li>Request permanent deletion of your account and all associated solved question data.</li>
                <li>Manage cookie preferences through your individual browser settings.</li>
              </ul>
              <p>
                To exercise any of these choices, please email us directly via our Contact page.
              </p>
            </section>

            {/* 7. Contact Us */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Have Questions About This Policy?</h2>
                <p className="text-sm">
                  Reach out to our compliance and engineering team at any time.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="size-4" />
              </Link>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
