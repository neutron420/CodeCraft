"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HighlightText } from "@/components/ui/highlight-text";

interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  quote: React.ReactNode;
}

const testimonials: Testimonial[] = [
  {
    id: "omkar",
    name: "Omkar",
    handle: "psomkarbuilds",
    avatar: "/testimonials/psomkarbuilds.jpg",
    quote: (
      <>
        <HighlightText variant="lime">Great project</HighlightText> bro 👏
      </>
    ),
  },
  {
    id: "pikachu",
    name: "Pikachu",
    handle: "pikachu_irl",
    avatar: "/testimonials/pikachu_irl.jpg",
    quote: (
      <>
        Damn, <HighlightText variant="yellow">much needed</HighlightText>.
      </>
    ),
  },
  {
    id: "adit",
    name: "Adit",
    handle: "Adidotdev",
    avatar: "/testimonials/Adidotdev.jpg",
    quote: (
      <>
        <HighlightText variant="orange">Great work</HighlightText> dude ⚡ 🚀
      </>
    ),
  },
  {
    id: "sumit",
    name: "Smit",
    handle: "0xSumit_",
    avatar: "/testimonials/0xSumit_.jpg",
    quote: (
      <>
        Finding company interview questions by pattern has{" "}
        <HighlightText variant="cyan">never been easier</HighlightText>. Really appreciate this!
      </>
    ),
  },
  {
    id: "ajay",
    name: "Ajay",
    handle: "ajay_2512x",
    avatar: "/testimonials/ajay_2512x.jpg",
    quote: (
      <>
        <HighlightText variant="lime">Amazing build</HighlightText> bro 🔥 The dark theme is clean.
      </>
    ),
  },
  {
    id: "kapilansh",
    name: "Kapilansh",
    handle: "kapilansh_twt",
    avatar: "/testimonials/kapilansh_twt.jpg",
    quote: (
      <>
        W king, keep goingg. <HighlightText variant="yellow">Best interview prep tool</HighlightText> right now.
      </>
    ),
  },
  {
    id: "alfin",
    name: "Alfin",
    handle: "AlfinCodes",
    avatar: "/testimonials/AlfinCodes.jpg",
    quote: (
      <>
        This is so clean and fast! <HighlightText variant="cyan">Super helpful</HighlightText> for daily DSA practice.
      </>
    ),
  },
  {
    id: "aditya",
    name: "Aditya Pattanayak",
    handle: "AdityaPat_",
    avatar: "/testimonials/AdityaPat_.jpg",
    quote: (
      <>
        Bookmarked! Easily one of the <HighlightText variant="lime">best tools</HighlightText> for coding interview prep.
      </>
    ),
  },
  {
    id: "alok",
    name: "Alok Gupta",
    handle: "Alok_0x",
    avatar: "/testimonials/Alok_0x.jpg",
    quote: (
      <>
        UI is <HighlightText variant="yellow">super slick</HighlightText> and intuitive. Great work!
      </>
    ),
  },
  {
    id: "akram",
    name: "Sk Akram",
    handle: "akramcodez",
    avatar: "/testimonials/akramcodez.jpg",
    quote: (
      <>
        <HighlightText variant="orange">Pure gold</HighlightText> for college students prepping for tech placements.
      </>
    ),
  },
  {
    id: "kritika",
    name: "Kritika",
    handle: "kritikakodes",
    avatar: "/testimonials/kritikakodes.jpg",
    quote: (
      <>
        The topic filters with direct LeetCode links <HighlightText variant="cyan">save so much search time</HighlightText>!
      </>
    ),
  },
  {
    id: "vishal",
    name: "Vishal",
    handle: "Vixhal",
    avatar: "/testimonials/Vixhal.jpg",
    quote: (
      <>
        Finally a company-wise list that is <HighlightText variant="lime">updated with recent interview rounds</HighlightText>.
      </>
    ),
  },
  {
    id: "karthik",
    name: "Karthik",
    handle: "kartikktwt",
    avatar: "/testimonials/kartikktwt.jpg",
    quote: (
      <>
        Clean design, <HighlightText variant="yellow">zero fluff</HighlightText>. The progress tracking is super motivating.
      </>
    ),
  },
  {
    id: "pankaj",
    name: "Pankaj Kumar",
    handle: "pankajkumar_dev",
    avatar: "/testimonials/pankajkumar_dev.jpg",
    quote: (
      <>
        Prepped for Amazon SDE with CodeCraft questions. <HighlightText variant="orange">10/10 recommendation</HighlightText>!
      </>
    ),
  },
  {
    id: "manpreet",
    name: "Manpreet",
    handle: "m4npreet006",
    avatar: "/testimonials/m4npreet006.jpg",
    quote: (
      <>
        <HighlightText variant="lime">Crazy helpful platform</HighlightText> bro, keep shipping!
      </>
    ),
  },
  {
    id: "nikhil",
    name: "Nikhil",
    handle: "nikhil_py",
    avatar: "/testimonials/nikhil_py.jpg",
    quote: (
      <>
        Solved over 150 problems using these company tags. <HighlightText variant="cyan">Best DSA prep companion</HighlightText>.
      </>
    ),
  },
  {
    id: "zuhaib",
    name: "Zuhaib Hanfi",
    handle: "ZuhaibHanfi",
    avatar: "/testimonials/ZuhaibHanfi.jpg",
    quote: (
      <>
        The <HighlightText variant="pink">verified question tagging</HighlightText> is top notch.
      </>
    ),
  },
  {
    id: "dharmvir",
    name: "Dharmvir",
    handle: "dharmvir_",
    avatar: "/testimonials/dharmvir_.jpg",
    quote: (
      <>
        <HighlightText variant="yellow">Saved me weeks</HighlightText> of searching randomly on LeetCode forums.
      </>
    ),
  },
  {
    id: "vedant",
    name: "Vedant Anand",
    handle: "Vedantsx",
    avatar: "/testimonials/Vedantsx.jpg",
    quote: (
      <>
        Design is crisp and the company problem frequency is <HighlightText variant="lime">spot on</HighlightText>.
      </>
    ),
  },
  {
    id: "devster",
    name: "Devster",
    handle: "devsterxyz",
    avatar: "/testimonials/devsterxyz.jpg",
    quote: (
      <>
        Such a clean execution bro. <HighlightText variant="cyan">Loving the developer aesthetic</HighlightText>!
      </>
    ),
  },
  {
    id: "swaraj",
    name: "Swaraj",
    handle: "SwaDotDev",
    avatar: "/testimonials/SwaDotDev.jpg",
    quote: (
      <>
        Shared this with my batchmates. <HighlightText variant="orange">Essential prep tool</HighlightText> for placements.
      </>
    ),
  },
  {
    id: "ashutosh",
    name: "Ashutosh",
    handle: "Ashutosh_7x7",
    avatar: "/testimonials/Ashutosh_7x7.jpg",
    quote: (
      <>
        <HighlightText variant="yellow">Super helpful</HighlightText> for last-minute revision before tech interviews.
      </>
    ),
  },
  {
    id: "arnav",
    name: "Arnav Sharma",
    handle: "Bokinsha",
    avatar: "/testimonials/Bokinsha.jpg",
    quote: (
      <>
        Cool landing page bro. The company-wise problem breakdown is <HighlightText variant="lime">super handy</HighlightText>.
      </>
    ),
  },
  {
    id: "manoj",
    name: "Manoj",
    handle: "the_manoz",
    avatar: "/testimonials/the_manoz.jpg",
    quote: (
      <>
        Loved the design &amp; all — how did you create that logo, man? <HighlightText variant="orange">It&apos;s so slick</HighlightText>.
      </>
    ),
  },
  {
    id: "nil",
    name: "Nil",
    handle: "arcticnilesh",
    avatar: "/testimonials/arcticnilesh.jpg",
    quote: (
      <>
        Awesome work man, you are <HighlightText variant="pink">cracked</HighlightText>. Got my Google L4 interview round cleared with this!
      </>
    ),
  },
  {
    id: "cg",
    name: "CG",
    handle: "cgtwts",
    avatar: "/testimonials/cgtwts.jpg",
    quote: (
      <>
        <HighlightText variant="cyan">Cleanest prep dashboard</HighlightText> I&apos;ve seen in a long time.
      </>
    ),
  },
  {
    id: "kiran",
    name: "Kiran",
    handle: "keranbyge",
    avatar: "/testimonials/keranbyge.jpg",
    quote: (
      <>
        Direct links, topic tags, and verified community questions. <HighlightText variant="lime">Perfect</HighlightText>.
      </>
    ),
  },
  {
    id: "defi",
    name: "Defi",
    handle: "Defiparot_01",
    avatar: "/testimonials/Defiparot_01.jpg",
    quote: (
      <>
        <HighlightText variant="cyan">Insanely fast</HighlightText> and no sign-up wall to explore questions. Big W!
      </>
    ),
  },
  {
    id: "vishnu",
    name: "Vishnu",
    handle: "itsvishhh",
    avatar: "/testimonials/itsvishhh.jpg",
    quote: (
      <>
        Cracked my frontend coding round thanks to the <HighlightText variant="yellow">curated tags</HighlightText> here.
      </>
    ),
  },
  {
    id: "parth",
    name: "Parth",
    handle: "paarthhhhhh_",
    avatar: "/testimonials/paarthhhhhh_.jpg",
    quote: (
      <>
        Bro is cooking! This platform makes interview prep <HighlightText variant="orange">so structured</HighlightText>.
      </>
    ),
  },
  {
    id: "piyush",
    name: "Piyush",
    handle: "__Piyushrathore",
    avatar: "/testimonials/__Piyushrathore.jpg",
    quote: (
      <>
        The company frequency stats are <HighlightText variant="lime">super accurate</HighlightText>. Recommended to all my friends!
      </>
    ),
  },
  {
    id: "subhan",
    name: "Subhan",
    handle: "SubhanHQ",
    avatar: "/testimonials/SubhanHQ.jpg",
    quote: (
      <>
        Level of polish on this site is <HighlightText variant="pink">insane</HighlightText>. Top tier work!
      </>
    ),
  },
  {
    id: "adityaw",
    name: "Aditya",
    handle: "adityawaslost",
    avatar: "/testimonials/adityawaslost.jpg",
    quote: (
      <>
        Found questions that actually came up in my recent tech rounds. <HighlightText variant="yellow">Legend</HighlightText>.
      </>
    ),
  },
  {
    id: "karan",
    name: "Karan",
    handle: "karankendre",
    avatar: "/testimonials/karankendre.jpg",
    quote: (
      <>
        No ads distraction, <HighlightText variant="cyan">pure DSA practice</HighlightText>. Hats off!
      </>
    ),
  },
  {
    id: "shreyansh",
    name: "Shreyansh",
    handle: "shreyanshmalviy",
    avatar: "/testimonials/shreyanshmalviy.jpg",
    quote: (
      <>
        One of the <HighlightText variant="orange">most useful</HighlightText> open prep platforms built this year.
      </>
    ),
  },
  {
    id: "sudhanshu",
    name: "Sudhanshu",
    handle: "yadavji_codes",
    avatar: "/testimonials/yadavji_codes.jpg",
    quote: (
      <>
        Every CS student needs to <HighlightText variant="lime">bookmark this</HighlightText> before placement season.
      </>
    ),
  },
  {
    id: "codingnoobie",
    name: "CodingNoobie",
    handle: "CodingNoobie",
    avatar: "/testimonials/CodingNoobie.jpg",
    quote: (
      <>
        <HighlightText variant="yellow">Beginner friendly</HighlightText> and the company roadmap keeps you focused.
      </>
    ),
  },
  {
    id: "ray",
    name: "Ray",
    handle: "ravikiran_dev7",
    avatar: "/testimonials/ravikiran_dev7.jpg",
    quote: (
      <>
        Awesome tool bro! Smooth animations and <HighlightText variant="cyan">lightning fast navigation</HighlightText>.
      </>
    ),
  },
  {
    id: "aman",
    name: "Aman",
    handle: "CodeWithAmann",
    avatar: "/testimonials/CodeWithAmann.jpg",
    quote: (
      <>
        Shared this with all my dev friends. <HighlightText variant="lime">Insanely useful resource</HighlightText>!
      </>
    ),
  },
  {
    id: "sumitme",
    name: "Sumit",
    handle: "sumitdotme",
    avatar: "/testimonials/sumitdotme.jpg",
    quote: (
      <>
        The problem frequency filters <HighlightText variant="orange">saved me so much time</HighlightText> before interviews.
      </>
    ),
  },
];

export default function Testimonials() {
  // Start on Pikachu (index 1) to match reference screenshot: Omkar, Pikachu, Adit
  const [selectedIdx, setSelectedIdx] = useState<number>(1);

  const len = testimonials.length;

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + len) % len);
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % len);
  };

  // 3 visible cards for desktop: [prev, current, next]
  const prevIdx = (selectedIdx - 1 + len) % len;
  const currIdx = selectedIdx;
  const nextIdx = (selectedIdx + 1) % len;

  const visibleCards = [
    { ...testimonials[prevIdx], originalIdx: prevIdx, isActive: false },
    { ...testimonials[currIdx], originalIdx: currIdx, isActive: true },
    { ...testimonials[nextIdx], originalIdx: nextIdx, isActive: false },
  ];

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Top badge */}
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
          <span className="h-px w-8 sm:w-10 bg-border" />
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium border border-border bg-muted/40 text-muted-foreground shadow-xs">
            Testimonials
          </span>
          <span className="h-px w-8 sm:w-10 bg-border" />
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-7 px-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            What <HighlightText variant="yellow" textClassName="font-extrabold">builders</HighlightText> are saying
          </h2>
          <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Real feedback from Real{" "}
            <HighlightText variant="lime">
              <span className="font-mono text-emerald-950 dark:text-emerald-950 font-bold">&lt;Developers /&gt;</span>
            </HighlightText>{" "}
            on{" "}
            <HighlightText variant="cyan">
              <span className="text-cyan-950 dark:text-cyan-950 font-bold">CodeCraft</span>
            </HighlightText>
          </p>
        </div>

        {/* Real Twitter/X Overlapping Avatars Cluster - Wraps into 2 balanced rows on mobile, 1 perfect line on desktop */}
        <div className="relative max-w-[375px] sm:max-w-xl md:max-w-5xl mx-auto my-5 sm:my-8 px-2">
          <div className="flex flex-wrap items-center justify-center -space-x-2 md:-space-x-2.5 gap-y-2 py-1.5 select-none overflow-visible">
            {testimonials.map((item, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  title={`${item.name} (@${item.handle})`}
                  className={`relative rounded-full transition-all duration-200 shrink-0 focus:outline-hidden ${
                    isSelected
                      ? "ring-2 ring-foreground ring-offset-2 ring-offset-background scale-125 z-30 shadow-lg opacity-100"
                      : "opacity-60 hover:opacity-100 hover:scale-115 hover:z-20 active:scale-95"
                  }`}
                >
                  <div className="size-6 sm:size-6.5 md:size-7 rounded-full overflow-hidden border-2 border-background bg-muted">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={28}
                      height={28}
                      className="size-full object-cover"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Technical dashed border container with '+' corner cross markers */}
        <div className="relative border border-dashed border-zinc-800/90 dark:border-zinc-700/90 bg-card/60 rounded-sm">
          {/* Corner '+' cross markers */}
          <span
            aria-hidden="true"
            className="absolute -top-2.5 -left-2.5 size-5 flex items-center justify-center font-mono text-sm font-black leading-none text-zinc-800 dark:text-zinc-200 bg-background select-none pointer-events-none"
          >
            +
          </span>
          <span
            aria-hidden="true"
            className="absolute -top-2.5 -right-2.5 size-5 flex items-center justify-center font-mono text-sm font-black leading-none text-zinc-800 dark:text-zinc-200 bg-background select-none pointer-events-none"
          >
            +
          </span>
          <span
            aria-hidden="true"
            className="absolute -bottom-2.5 -left-2.5 size-5 flex items-center justify-center font-mono text-sm font-black leading-none text-zinc-800 dark:text-zinc-200 bg-background select-none pointer-events-none"
          >
            +
          </span>
          <span
            aria-hidden="true"
            className="absolute -bottom-2.5 -right-2.5 size-5 flex items-center justify-center font-mono text-sm font-black leading-none text-zinc-800 dark:text-zinc-200 bg-background select-none pointer-events-none"
          >
            +
          </span>

          {/* Left / Right arrow navigation controls (Desktop: side floating buttons) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous tweet"
            className="hidden md:flex absolute -left-3.5 top-1/2 -translate-y-1/2 size-7 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground items-center justify-center shadow-sm z-20 transition-all hover:scale-110"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next tweet"
            className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 size-7 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground items-center justify-center shadow-sm z-20 transition-all hover:scale-110"
          >
            <ChevronRight className="size-4" />
          </button>

          {/* 3 Column Grid on desktop, 3 stacked cards on mobile with dashed dividers matching ossium.in */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-zinc-800/90 dark:divide-zinc-700/90">
            {visibleCards.map((item) => (
              <div
                key={`${item.originalIdx}-${item.id}`}
                onClick={() => setSelectedIdx(item.originalIdx)}
                className="flex flex-col justify-between p-5 sm:p-7 transition-all duration-300 cursor-pointer group hover:bg-muted/20 min-h-[135px] sm:min-h-[160px]"
              >
                {/* User Info Header */}
                <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
                  <div className="size-10 sm:size-11 rounded-full overflow-hidden shrink-0 bg-muted/60 border border-border group-hover:scale-105 transition-transform">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={44}
                      height={44}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col min-w-0 text-left">
                    <span className="text-sm sm:text-base font-bold text-foreground leading-snug tracking-tight truncate group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                    <a
                      href={`https://x.com/${item.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs sm:text-[13px] text-muted-foreground hover:text-foreground transition-colors group/link mt-0.5 truncate"
                    >
                      <svg
                        className="size-2.5 shrink-0 fill-current opacity-70 group-hover/link:opacity-100"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>@{item.handle}</span>
                    </a>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
