
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Crosshair,
  Menu,
  Trophy,
  Users,
  X,
  Target,
  Zap,
} from "lucide-react";
import { useState } from "react";

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

const SOCIALS = [
  { label: "DISCORD", href: DISCORD_URL },
  { label: "INSTAGRAM", href: "https://www.instagram.com/khoresports/" },
  { label: "X", href: "https://x.com/KhoReSports" },
  { label: "YOUTUBE", href: "https://www.youtube.com/@khoresports-u6d" },
  { label: "TWITCH", href: "https://www.twitch.tv/KhoReSports-l7y" },
  { label: "TIKTOK", href: "https://www.tiktok.com/@khoresports" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#08080b] text-white">
      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#08080b]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-6 lg:px-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/branding/khor-logo.png"
              alt="KhoR Esports"
              width={220}
              height={90}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold tracking-[0.17em] text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-3 border border-purple-400/40 bg-purple-500/10 px-5 py-3 text-[10px] font-bold tracking-[0.18em] transition hover:border-purple-300 hover:bg-purple-500/20 lg:flex"
          >
            JOIN KHOR HQ
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#0b0b10] px-6 py-6 lg:hidden">
            <nav className="flex flex-col gap-5">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold tracking-[0.18em] text-zinc-300 transition hover:text-purple-300"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-between border border-purple-400/40 bg-purple-500/10 px-5 py-4 text-xs font-bold tracking-widest"
              >
                JOIN KHOR HQ
                <ArrowUpRight size={16} />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[850px] items-center overflow-hidden border-b border-white/[0.07] bg-[#08080b] pt-24">
        <div className="pointer-events-none absolute inset-0">
          {/* KhoR official banner */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[75%]">
            <Image
              src="/branding/khor-banner.png"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover object-center opacity-[0.16] lg:opacity-[0.28]"
            />
          </div>

          {/* Dark overlays for readability */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#08080b_0%,rgba(8,8,11,0.94)_35%,rgba(8,8,11,0.55)_75%,rgba(8,8,11,0.35)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(111,55,190,0.18),transparent_48%)]" />

          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Official KhoR emblem */}
        <div className="pointer-events-none absolute right-[-8%] top-1/2 hidden h-[780px] w-[780px] -translate-y-1/2 items-center justify-center lg:flex">
          <div className="absolute h-[650px] w-[650px] rounded-full border border-purple-400/10" />
          <div className="absolute h-[530px] w-[530px] rounded-full border border-purple-300/15" />
          <div className="absolute h-[410px] w-[410px] rounded-full border border-white/[0.08]" />
          <div className="absolute h-[300px] w-[300px] rotate-45 border border-purple-300/20" />
          <div className="absolute h-[620px] w-[620px] rounded-full bg-purple-600/[0.08] blur-[100px]" />

          <Image
            src="/branding/khor-emblem.png"
            alt=""
            width={440}
            height={440}
            className="relative z-10 h-[340px] w-[340px] object-contain opacity-35"
          />

          <div className="absolute bottom-[15%] right-[20%] border border-purple-300/30 bg-[#0b0b10]/80 px-5 py-4 backdrop-blur-md">
            <p className="text-[9px] font-bold tracking-[0.3em] text-purple-300">
              KHOR / EST. 2026
            </p>
            <p className="mt-1 text-xs font-semibold tracking-widest">
              BUILT FOR THE NEXT
            </p>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-28 lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-400" />
              <span className="text-[10px] font-bold tracking-[0.35em] text-purple-300">
                INDEPENDENT ESPORTS ORGANIZATION
              </span>
            </div>

            <h1 className="text-6xl font-black leading-[0.91] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[112px]">
              BUILT TO
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(192,132,252,0.9)]">
                COMPETE.
              </span>
            </h1>

            <p className="mt-9 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              KhoR is an independent esports organization building its
              competitive presence in VALORANT. Driven by ambition, discipline,
              and a commitment to growing together.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/teams"
                className="group flex items-center justify-center gap-4 bg-purple-600 px-7 py-4 text-[11px] font-bold tracking-[0.18em] transition hover:bg-purple-500"
              >
                EXPLORE KHOR VALORANT
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/recruitment"
                className="group flex items-center justify-center gap-4 border border-white/20 px-7 py-4 text-[11px] font-bold tracking-[0.18em] transition hover:border-purple-300 hover:bg-white/[0.04]"
              >
                JOIN THE ROSTER
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Organization information */}
          <div className="mt-28 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/10 pt-7 sm:grid-cols-3">
            <div>
              <p className="text-[9px] font-bold tracking-[0.25em] text-zinc-600">
                ORGANIZATION
              </p>
              <p className="mt-2 text-xs font-semibold tracking-widest">
                KHOR ESPORTS
              </p>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.25em] text-zinc-600">
                COMPETITIVE TITLE
              </p>
              <p className="mt-2 text-xs font-semibold tracking-widest">
                VALORANT
              </p>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.25em] text-zinc-600">
                ROSTER STATUS
              </p>
              <p className="mt-2 text-xs font-semibold tracking-widest text-purple-300">
                FORMING
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-8 hidden -rotate-90 text-[9px] font-bold tracking-[0.35em] text-zinc-600 lg:block">
          DISCOVER KHOR
        </div>
      </section>

      {/* ORGANIZATION INTRO */}
      <section className="relative border-b border-white/[0.07] bg-[#0b0b0f] px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-purple-300">
              <span className="h-px w-8 bg-purple-400" />
              WHO WE ARE
            </p>

            <h2 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              A NEW STANDARD.
              <br />
              <span className="text-zinc-600">A SHARED PURPOSE.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-10">
            <p className="text-lg leading-8 text-zinc-300">
              We believe an organization is built by the people behind it.
              Every player, every connection, and every opportunity contributes
              to what KhoR can become.
            </p>

            <p className="mt-6 text-sm leading-8 text-zinc-500">
              Our focus is building a competitive VALORANT presence while
              creating a community that supports growth, teamwork, and
              improvement. This is the beginning of our journey.
            </p>

            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 border-b border-purple-400/40 pb-2 text-[10px] font-bold tracking-[0.2em] text-white transition hover:border-purple-300"
            >
              DISCOVER OUR STORY
              <ArrowUpRight
                size={14}
                className="text-purple-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED TEAM */}
      <section className="border-b border-white/[0.07] bg-[#08080b] px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-purple-300">
                <span className="h-px w-8 bg-purple-400" />
                OUR COMPETITIVE PRESENCE
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                ONE TEAM.
                <br />
                <span className="text-zinc-600">ONE STANDARD.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-500">
              The first step in building KhoR begins with VALORANT. We're
              looking for players who share our ambition and competitive
              mindset.
            </p>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-[#101016]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_45%,rgba(124,58,237,0.2),transparent_55%)]" />

            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  <p className="text-[9px] font-bold tracking-[0.3em] text-purple-300">
                    COMPETITIVE TEAM / 001
                  </p>
                </div>

                <h3 className="mt-8 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
                  KHOR
                  <br />
                  <span className="text-transparent [-webkit-text-stroke:1px_rgba(192,132,252,0.9)]">
                    VALORANT.
                  </span>
                </h3>

                <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-400">
                  A competitive roster in formation. We're building the
                  foundation for a team centered on discipline, communication,
                  and continuous improvement.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="/teams"
                    className="group inline-flex items-center gap-3 bg-purple-600 px-6 py-4 text-[10px] font-bold tracking-[0.2em] transition hover:bg-purple-500"
                  >
                    VIEW TEAM
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/recruitment"
                    className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-[10px] font-bold tracking-[0.2em] transition hover:border-purple-300"
                  >
                    RECRUITMENT
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="relative flex min-h-[300px] flex-col justify-between border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0">
                <div className="absolute right-0 top-0 select-none text-[230px] font-black leading-none text-purple-400/[0.045]">
                  01
                </div>

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center border border-purple-400/30 bg-purple-500/10 text-purple-300">
                    <Trophy size={25} />
                  </div>

                  <p className="mt-8 text-[9px] font-bold tracking-[0.3em] text-zinc-500">
                    CURRENT STATUS
                  </p>

                  <p className="mt-3 text-2xl font-black tracking-tight">
                    ROSTER FORMING
                  </p>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    Recruitment is the first step toward our competitive
                    future.
                  </p>
                </div>

                <div className="relative mt-12 border-t border-white/10 pt-6">
                  <p className="text-[9px] font-bold tracking-[0.25em] text-zinc-500">
                    GAME
                  </p>
                  <p className="mt-2 text-sm font-bold tracking-widest">
                    VALORANT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATCH CENTER */}
      <section className="border-b border-white/[0.07] bg-[#0b0b0f] px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-purple-300">
                <span className="h-px w-8 bg-purple-400" />
                COMPETITIVE
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                MATCH CENTER.
              </h2>
            </div>

            <Link
              href="/matches"
              className="group inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-zinc-400 transition hover:text-white"
            >
              VIEW MATCH CENTER
              <ArrowUpRight size={15} className="text-purple-300" />
            </Link>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-[#101016] px-6 py-20 text-center sm:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_65%)]" />

            <div className="relative">
              <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-300">
                <Crosshair size={28} />
              </div>

              <p className="text-[9px] font-bold tracking-[0.35em] text-purple-300">
                KHOR VALORANT
              </p>

              <h3 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
                NO MATCHES ANNOUNCED.
              </h3>

              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-500">
                Our competitive journey is taking shape. Official schedules,
                match results, and tournament updates will appear here.
              </p>

              <Link
                href="/matches"
                className="group mt-9 inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-[10px] font-bold tracking-[0.2em] transition hover:border-purple-300 hover:bg-purple-500/10"
              >
                EXPLORE MATCH CENTER
                <ArrowRight
                  size={15}
                  className="text-purple-300 transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-b border-white/[0.07] bg-[#08080b] px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-purple-300">
              <span className="h-px w-8 bg-purple-400" />
              WHAT DRIVES US
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              MORE THAN THE GAME.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div className="border-t border-white/15 pt-7">
              <div className="mb-7 flex h-12 w-12 items-center justify-center border border-purple-400/30 bg-purple-500/10 text-purple-300">
                <Target size={22} />
              </div>

              <p className="text-[9px] font-bold tracking-[0.25em] text-purple-300">
                01 / DISCIPLINE
              </p>

              <h3 className="mt-4 text-2xl font-black">
                COMPETE WITH INTENT.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Set goals, embrace challenges, and hold yourself to a higher
                standard.
              </p>
            </div>

            <div className="border-t border-white/15 pt-7">
              <div className="mb-7 flex h-12 w-12 items-center justify-center border border-purple-400/30 bg-purple-500/10 text-purple-300">
                <Users size={22} />
              </div>

              <p className="text-[9px] font-bold tracking-[0.25em] text-purple-300">
                02 / TEAMWORK
              </p>

              <h3 className="mt-4 text-2xl font-black">GROW TOGETHER.</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Support your teammates, communicate with purpose, and build
                something together.
              </p>
            </div>

            <div className="border-t border-white/15 pt-7">
              <div className="mb-7 flex h-12 w-12 items-center justify-center border border-purple-400/30 bg-purple-500/10 text-purple-300">
                <Zap size={22} />
              </div>

              <p className="text-[9px] font-bold tracking-[0.25em] text-purple-300">
                03 / PROGRESS
              </p>

              <h3 className="mt-4 text-2xl font-black">
                NEVER STAND STILL.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Learn from every experience, improve every day, and keep
                moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="border-b border-white/[0.07] bg-[#0b0b0f] px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-purple-300">
                <span className="h-px w-8 bg-purple-400" />
                THE LATEST
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                FROM KHOR.
              </h2>
            </div>

            <Link
              href="/news"
              className="group inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-zinc-400 transition hover:text-white"
            >
              ALL UPDATES
              <ArrowUpRight size={15} className="text-purple-300" />
            </Link>
          </div>

          <Link
            href="/news"
            className="group relative block overflow-hidden border border-white/10 bg-[#101016] p-8 transition hover:border-purple-400/40 sm:p-12"
          >
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_70%)]" />

            <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-[9px] font-bold tracking-[0.3em] text-purple-300">
                  KHOR / OFFICIAL UPDATES
                </p>

                <h3 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                  THE NEXT CHAPTER
                  <br />
                  IS IN PROGRESS.
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-500">
                  Follow official announcements, competitive developments,
                  and updates from across the organization.
                </p>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/15 transition group-hover:border-purple-300 group-hover:bg-purple-500/10">
                <ArrowUpRight
                  size={22}
                  className="text-purple-300 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* RECRUITMENT CTA */}
      <section className="relative overflow-hidden bg-[#08080b] px-6 py-28 lg:px-12 lg:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(124,58,237,0.2),transparent_65%)]" />

        <div className="relative mx-auto max-w-[1100px] text-center">
          <p className="mb-6 text-[10px] font-bold tracking-[0.35em] text-purple-300">
            THE FUTURE IS BEING BUILT
          </p>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            MAKE YOUR
            <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(192,132,252,0.9)]">
              NEXT MOVE.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-zinc-400">
            We're looking for dedicated players who want to grow, compete, and
            contribute to the future of KhoR.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/recruitment"
              className="group flex items-center justify-center gap-4 bg-purple-600 px-8 py-4 text-[10px] font-bold tracking-[0.2em] transition hover:bg-purple-500"
            >
              APPLY TO KHOR
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 border border-white/20 px-8 py-4 text-[10px] font-bold tracking-[0.2em] transition hover:border-purple-300 hover:bg-white/[0.04]"
            >
              ENTER KHOR HQ
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#070709] px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-14 border-b border-white/[0.08] pb-14 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/branding/khor-logo.png"
                  alt="KhoR Esports"
                  width={230}
                  height={95}
                  className="h-14 w-auto object-contain"
                />
              </Link>

              <p className="mt-7 max-w-sm text-sm leading-7 text-zinc-500">
                An independent esports organization built on competition,
                discipline, and the ambition to become something greater.
              </p>
            </div>

            <div>
              <p className="mb-6 text-[9px] font-bold tracking-[0.3em] text-zinc-500">
                EXPLORE
              </p>

              <div className="flex flex-col gap-4">
                {NAVIGATION.slice(1).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="w-fit text-xs font-semibold tracking-wider text-zinc-400 transition hover:text-purple-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-6 text-[9px] font-bold tracking-[0.3em] text-zinc-500">
                CONNECT
              </p>

              <div className="flex flex-col gap-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-fit items-center gap-2 text-xs font-semibold tracking-wider text-zinc-400 transition hover:text-purple-300"
                  >
                    {social.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 pt-8 sm:flex-row sm:items-center">
            <p className="text-[9px] font-semibold tracking-[0.2em] text-zinc-600">
              © 2026 KHOR. ALL RIGHTS RESERVED.
            </p>

            <p className="text-[9px] font-semibold tracking-[0.2em] text-zinc-600">
              BUILT FOR THE NEXT.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
