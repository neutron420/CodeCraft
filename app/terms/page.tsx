import { Metadata } from "next";
import { HeroHeader } from "@/components/templates/nova/sections/header";
import Footer from "@/components/templates/nova/sections/footer-1";
import Link from "next/link";
import { FileText, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | CodePrep - Coding Interview Prep",
  description:
    "Review the Terms of Service governing your use of the CodePrep interview preparation platform, resources, and algorithms tracker.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "September 9, 2026";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <HeroHeader />

      <main className="flex-1 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Badge & Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-600 dark:text-orange-400 text-xs font-medium mb-4">
              <FileText className="size-4" />
              <span>Terms & Agreements</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Please read these Terms of Service carefully before using the CodePrep website and interview preparation tools.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-3">
              Effective Date: <span className="font-medium text-foreground">{lastUpdated}</span>
            </p>
          </div>

          {/* Terms Content Sections */}
          <div className="space-y-10 text-sm sm:text-base leading-relaxed text-muted-foreground">
            {/* 1. Acceptance of Terms */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <span className="flex items-center justify-center size-7 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold">1</span>
                Acceptance of Terms
              </h2>
              <p className="mb-3">
                By accessing, browsing, or using the <strong>CodePrep</strong> platform (accessible via <em>codeprep.app</em> or associated domains), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service and our associated Privacy Policy.
              </p>
              <p>
                If you do not agree to all terms and conditions stated herein, please do not access or use any part of the service.
              </p>
            </section>

            {/* 2. Educational Purpose & Code Preparation */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <span className="flex items-center justify-center size-7 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold">2</span>
                Educational Purpose & Scope
              </h2>
              <p className="mb-3">
                CodePrep provides coding practice problem lists, algorithmic explanations, interview pattern guides, and progress tracking tools designed strictly for individual educational and self-study purposes.
              </p>
              <p>
                CodePrep is an independent educational platform. All references to companies (e.g., Google, Meta, Amazon, Microsoft, Apple, Netflix) or external coding judges (e.g., LeetCode, Codeforces, HackerRank) are solely for descriptive, educational categorization of common interview problem topics and do not imply sponsorship or endorsement by those entities.
              </p>
            </section>

            {/* 3. User Accounts & Acceptable Use */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <span className="flex items-center justify-center size-7 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold">3</span>
                User Accounts & Responsibilities
              </h2>
              <p className="mb-3">
                To track your solved question status and progress, you may create an account. You agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3 text-foreground/90">
                <li>You will provide accurate registration details and maintain the security of your authentication credentials.</li>
                <li>You will not use automated scripts, scrapers, or bot tools to harvest content or disrupt platform infrastructure.</li>
                <li>You will not reverse engineer, attempt to bypass access controls, or introduce malicious code.</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that engage in abusive or harmful activity.
              </p>
            </section>

            {/* 4. Intellectual Property Rights */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <span className="flex items-center justify-center size-7 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold">4</span>
                Intellectual Property
              </h2>
              <p>
                All original software, graphics, branding, design elements, curated curriculum structures, and visual interfaces created by CodePrep are the proprietary property of CodePrep. Users may access and use these materials solely for their personal, non-commercial interview preparation.
              </p>
            </section>

            {/* 5. Disclaimer of Warranties & Limitation of Liability */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <AlertCircle className="size-5 text-orange-500" />
                Disclaimers & Limitations of Liability
              </h2>
              <p className="mb-3">
                CodePrep is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. While we strive to maintain accurate, high-quality interview preparation questions, we make no guarantee of employment outcomes or specific interview performance.
              </p>
              <p>
                In no event shall CodePrep or its operators be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access or inability to access the platform.
              </p>
            </section>

            {/* 6. Modifications to Terms */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2.5">
                <CheckCircle2 className="size-5 text-orange-500" />
                Changes to These Terms
              </h2>
              <p>
                We may periodically update these Terms to reflect technical improvements or legal requirements. Updated terms will be posted directly on this page with a revised effective date. Your continued use of the platform constitutes acceptance of any modifications.
              </p>
            </section>

            {/* 7. Contact Info */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Legal or Terms Inquiries?</h2>
                <p className="text-sm">
                  If you have inquiries regarding these Terms of Service, contact our administrative team.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Contact Legal</span>
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
