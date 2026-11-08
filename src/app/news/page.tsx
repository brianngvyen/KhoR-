
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Newspaper,
  Users,
  Trophy,
  Megaphone,
  CalendarDays,
  Menu,
  X,
} from "lucide-react";

const DISCORD_URL = "https://discord.gg/eQ9mCzpGTN";

const NAVIGATION = [
  { label: "HOME", href: "/" },
  { label: "TEAMS", href: "/teams" },
  { label: "RECRUITMENT", href: "/recruitment" },
  { label: "MATCHES", href: "/matches" },
  { label: "STAFF", href: "/staff" },
  { label: "ABOUT", href: "/about" },
  { label: "NEWS", href: "/news" },
];

type NewsCategory =
  | "ALL NEWS"
  | "ANNOUNCEMENTS"
  | "COMPETITIVE"
  | "COMMUNITY";

const CATEGORIES: {
  label: NewsCategory;
  icon: typeof Newspaper;
}[] = [
  { label: "ALL NEWS", icon: Newspaper },
  { label: "ANNOUNCEMENTS", icon: Megaphone },
  { label: "COMPETITIVE", icon: Trophy },
  { label: "COMMUNITY", icon: Users },
];

const EMPTY_MESSAGES: Record<NewsCategory, string> = {
  "ALL NEWS": "THE NEXT CHAPTER IS COMING.",
  ANNOUNCEMENTS: "NO ANNOUNCEMENTS JUST YET.",
  COMPETITIVE: "THE COMPETITIVE STORY IS UNFOLDING.",
  COMMUNITY: "MORE COMMUNITY STORIES ARE ON THE WAY.",
};

const CATEGORY_DESCRIPTIONS: Record<NewsCategory, string> = {
  "ALL NEWS":
    "There aren't any published updates just yet. Check back for announcements, roster news, competitive results, and community highlights.",
  ANNOUNCEMENTS:
    "Official organization announcements will appear here as KhoR continues to develop.",
  COMPETITIVE:
    "Roster announcements, tournament updates, match results, and competitive news will be published here.",
  COMMUNITY:
    "Community highlights, events, and stories from KHOR HQ will be featured here.",
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<NewsCategory>("ALL NEWS");

  const [menuOpen, setMenuOpen] = useState(false);

  const ActiveIcon =
    CATEGORIES.find(
      (category) => category.label === selectedCategory
    )?.icon ?? CalendarDays;

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Navigation */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.08] bg-[#080808]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 md:px-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/branding/khor-logo.png"
              alt="KhoR Esports"
              width={160}
              height={48}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-[10px] font-semibold tracking-[0.16em] text-zinc-400 xl:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.href === "/news"
                    ? "text-purple-400 transition"
                    : "transition hover:text-white"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-purple-500/60 bg-[#111014] px-5 py-3 text-xs font-bold tracking-wider text-white transition hover:bg-purple-600 lg:inline-flex"
          >
            JOIN THE DISCORD
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="text-white xl:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0d0d0d] px-6 py-7 xl:hidden">
            <nav className="flex flex-col gap-6">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    item.href === "/news"
                      ? "text-xs font-bold tracking-[0.2em] text-purple-400"
                      : "text-xs font-bold tracking-[0.2em] text-zinc-400 transition hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-purple-600 px-5 py-4 text-center text-[10px] font-black tracking-widest transition hover:bg-purple-500"
              >
                JOIN THE DISCORD
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden border-b border-white/[0.08] pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-purple-700/[0.16] blur-[150px]" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-900/[0.12] blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-28 md:px-12">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-purple-400">
              THE KHOR JOURNAL
            </span>
          </div>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl md:text-8xl lg:text-[112px]">
            THE LATEST
            <br />
            <span className="text-purple-400">FROM KHOR.</span>
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              Official announcements, competitive developments, and
              community stories. Follow the journey as KhoR continues
              to grow.
            </p>

            <a
              href="#latest"
              className="group flex w-fit items-center gap-4 border-b border-purple-500 pb-3 text-[11px] font-bold tracking-[0.2em] transition hover:text-purple-300"
            >
              EXPLORE UPDATES
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* News Categories Overview */}
      <section className="border-b border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-10 md:grid-cols-3 md:px-12">
          <div className="flex items-center gap-4">
            <Newspaper className="text-purple-400" size={23} />
            <div>
              <p className="text-xs font-black tracking-widest">
                ANNOUNCEMENTS
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Official news from KhoR.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Trophy className="text-purple-400" size={23} />
            <div>
              <p className="text-xs font-black tracking-widest">
                COMPETITIVE
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Teams, tournaments, and results.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Users className="text-purple-400" size={23} />
            <div>
              <p className="text-xs font-black tracking-widest">
                COMMUNITY
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                The people behind the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="mx-auto max-w-[1440px] px-6 py-28 md:px-12">
        <div className="mb-12">
          <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-400">
            / THE ORGANIZATION
          </p>

          <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">
            THE STORY OF <span className="text-zinc-500">KHOR.</span>
          </h2>
        </div>

        <Link
          href="/about"
          className="group grid overflow-hidden border border-white/10 bg-[#101010] transition hover:border-purple-500/40 md:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-[#171020] to-[#09090b] md:min-h-[480px]">
            <div className="absolute h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="absolute h-[260px] w-[260px] rotate-[-8deg] border border-purple-300/20 bg-purple-500/5 transition duration-700 group-hover:rotate-0" />

            <span className="relative text-[180px] font-black leading-none tracking-[-0.12em] text-white/90 transition duration-500 group-hover:scale-110 md:text-[240px]">
              K
            </span>

            <span className="absolute bottom-7 left-7 text-[9px] font-bold tracking-[0.3em] text-purple-300">
              COMPETE / CONNECT / GROW
            </span>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="text-[10px] font-bold tracking-[0.25em] text-purple-400">
              OUR BEGINNING
            </span>

            <h3 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              A NEW
              <br />
              <span className="text-purple-400">CHAPTER.</span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-zinc-400">
              Discover the vision behind KhoR, our values, and the
              organization we are working to build. From competitive
              VALORANT to our wider gaming community, this is where
              the journey begins.
            </p>

            <div className="mt-9 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.18em] text-purple-400 transition group-hover:text-white">
              DISCOVER KHOR
              <ArrowUpRight size={16} />
            </div>
          </div>
        </Link>
      </section>

      {/* Latest Updates */}
      <section
        id="latest"
        className="scroll-mt-20 border-y border-white/[0.08] bg-[#0d0d0d] px-6 py-28 md:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-400">
                / STAY INFORMED
              </p>

              <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">
                LATEST <span className="text-zinc-500">UPDATES.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              Follow the latest developments across the KhoR organization.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 border-b border-white/10 pb-7">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.label;

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setSelectedCategory(category.label)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2 border px-4 py-3 text-[9px] font-bold tracking-[0.15em] transition ${
                    isActive
                      ? "border-purple-500/50 bg-purple-600/15 text-purple-300"
                      : "border-white/10 text-zinc-500 hover:border-purple-500/40 hover:text-white"
                  }`}
                >
                  <Icon size={14} />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Empty Newsroom */}
          <div className="mt-8 flex min-h-[360px] flex-col items-center justify-center border border-dashed border-white/10 bg-[#101010] px-6 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center border border-purple-500/20 bg-purple-500/10">
              <ActiveIcon size={27} className="text-purple-400" />
            </div>

            <p className="mt-7 text-[10px] font-bold tracking-[0.3em] text-purple-400">
              THE KHOR NEWSROOM
            </p>

            <h3 className="mt-4 text-2xl font-black md:text-3xl">
              {EMPTY_MESSAGES[selectedCategory]}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
              {CATEGORY_DESCRIPTIONS[selectedCategory]}
            </p>

            {selectedCategory !== "ALL NEWS" && (
              <button
                type="button"
                onClick={() => setSelectedCategory("ALL NEWS")}
                className="mt-7 text-[10px] font-black tracking-[0.15em] text-purple-400 transition hover:text-white"
              >
                VIEW ALL NEWS
              </button>
            )}

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-purple-500/50 bg-[#111014] px-6 py-4 text-[10px] font-bold tracking-[0.18em] text-white transition hover:bg-purple-600"
            >
              FOLLOW KHOR ON DISCORD
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="relative overflow-hidden px-6 py-28 md:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.13] blur-[130px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-bold tracking-[0.3em] text-purple-400">
            / BE PART OF THE STORY
          </p>

          <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
            THE STORY
            <br />
            <span className="text-zinc-500">IS JUST BEGINNING.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-zinc-400">
            Join KHOR HQ, meet other players, and stay connected as
            we build the next chapter of KhoR.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-purple-600 px-7 py-5 text-xs font-black tracking-[0.18em] text-white transition hover:bg-purple-500"
            >
              JOIN KHOR HQ
              <ArrowUpRight size={16} />
            </a>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.03] px-7 py-5 text-xs font-bold tracking-[0.18em] text-white transition hover:border-purple-500"
            >
              OUR STORY
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 py-12 lg:flex-row lg:items-center">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/branding/khor-logo.png"
              alt="KhoR Esports"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </Link>

          <p className="text-[9px] tracking-[0.2em] text-zinc-600">
            A COMMUNITY BUILT AROUND GAMING.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold tracking-[0.15em] text-zinc-500">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.href === "/news"
                    ? "text-purple-400"
                    : "transition hover:text-white"
                }
              >
                {item.label}
              </Link>
            ))}

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              DISCORD
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] border-t border-white/[0.06] py-5">
          <p className="text-[9px] tracking-[0.15em] text-zinc-700">
            © 2026 KhoR. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </main>
  );
}
