import { Metadata } from "next";
import { HeroHeader } from "@/components/templates/nova/sections/header";
import Footer from "@/components/templates/nova/sections/footer-1";
import Link from "next/link";
import { Code2, Target, Users2, Sparkles, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | CodePrep - Company-wise Coding Interview Prep",
  description:
    "Discover the story behind CodePrep, our engineering curriculum, and our mission to help software developers ace tech coding interviews with structured, company-targeted practice.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <HeroHeader />

      <main className="flex-1 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Badge & Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-600 dark:text-orange-400 text-xs font-medium mb-4">
              <Sparkles className="size-4" />
              <span>Our Story & Mission</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              About CodePrep
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Empowering engineers worldwide to master data structures, algorithms, and technical interviews through structured, company-specific practice.
            </p>
          </div>

          {/* Core Story Sections */}
          <div className="space-y-10 text-sm sm:text-base leading-relaxed text-muted-foreground">
            {/* Mission Statement */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center size-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
                  <Target className="size-5" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Why We Built CodePrep</h2>
              </div>
              <p className="mb-4">
                Preparing for coding interviews at top tech companies (Google, Meta, Amazon, Microsoft, Netflix, Apple, and fast-growing startups) has become one of the most overwhelming hurdles for software engineers. With thousands of random algorithm problems floating on the internet, candidates spend hundreds of unproductive hours guessing which patterns truly matter.
              </p>
              <p>
                <strong>CodePrep was built to eliminate the noise.</strong> Instead of solving hundreds of redundant questions, our platform categorizes problems by actual company interview frequencies, algorithmic archetypes, and optimal difficulty curves—allowing you to prepare smarter and land your dream job faster.
              </p>
            </section>

            {/* What Makes Us Different */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center size-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
                  <Code2 className="size-5" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Learning Philosophy</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Company-Focused Curricula",
                    desc: "Targeted problem lists derived from recurring interview patterns reported at specific Tier-1 tech employers.",
                  },
                  {
                    title: "Pattern Recognition Over Memorization",
                    desc: "Master core algorithmic archetypes (Two Pointers, Sliding Window, Monotonic Stacks, DP) rather than memorizing individual solutions.",
                  },
                  {
                    title: "Actionable Progress Tracking",
                    desc: "Granular status tracking lets you visually gauge topic mastery, completion rates, and revisit weak areas with ease.",
                  },
                  {
                    title: "Zero-Distraction Practice",
                    desc: "A sleek, lightning-fast dark-mode interface built by developers for developers, free of clutter and intrusive popups.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-border/50 bg-background/60">
                    <h3 className="text-base font-semibold text-foreground mb-1.5 flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-orange-500" />
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Who It Is For */}
            <section className="bg-card/40 border border-border/70 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center size-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
                  <Users2 className="size-5" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Who CodePrep Is For</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li><strong>Computer Science Students & Grads:</strong> Looking to break into their first software engineering internships or new-grad roles.</li>
                <li><strong>Experienced Engineers:</strong> Senior, staff, and tech leads brushing up on system algorithms after years away from competitive coding.</li>
                <li><strong>Career Changers & Bootcampers:</strong> Developers transitioning into backend, full-stack, and systems engineering roles who need a guided syllabus.</li>
              </ul>
            </section>

            {/* CTA Banner */}
            <section className="bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 rounded-2xl p-6 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Ready to Accelerate Your Prep?</h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-6">
                Explore our curated problem roadmaps, filter by your target company, and start checking off solved questions today.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted font-medium text-sm transition-all"
                >
                  <BookOpen className="size-4 text-orange-500" />
                  <span>Explore Free Study Guides</span>
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-sm"
                >
                  <span>Start Practicing Now</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
