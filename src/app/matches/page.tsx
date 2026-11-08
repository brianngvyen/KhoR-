
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Crosshair,
  Trophy,
  Radio,
  History,
  Menu,
  X,
  Gamepad2,
  ChevronRight,
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

const SOCIALS = [
  { label: "DISCORD", href: DISCORD_URL },
  { label: "INSTAGRAM", href: "https://www.instagram.com/khoresports/" },
  { label: "X", href: "https://x.com/KhoReSports" },
  { label: "YOUTUBE", href: "https://www.youtube.com/@khoresports-u6d" },
  { label: "TWITCH", href: "https://www.twitch.tv/KhoReSports-l7y" },
  { label: "TIKTOK", href: "https://www.tiktok.com/@khoresports" },
];

export default function MatchesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#08080b] text-white">
      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#08080b]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-6 lg:px-12">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center border border-purple-400/50 bg-purple-500/10 transition group-hover:bg-purple-500/20">
              <span className="text-xl font-black tracking-tighter">K</span>
            </div>

            <div>
              <p className="text-xl font-black tracking-[0.2em]">
                KHOR<span className="text-purple-400">.</span>
              </p>
              <p className="text-[8px] font-semibold tracking-[0.3em] text-zinc-500">
                ESPORTS ORGANIZATION
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[10px] font-bold tracking-[0.16em] transition ${
                  item.label === "MATCHES"
                    ? "text-purple-300"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/recruitment"
            className="hidden items-center gap-3 border border-purple-400/40 bg-purple-600 px-5 py-3 text-[10px] font-bold tracking-[0.17em] transition hover:bg-purple-500 lg:flex"
          >
            JOIN KHOR VALORANT
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-white transition hover:border-purple-400/50 xl:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#0b0b10] px-6 py-7 xl:hidden">
            <nav className="mx-auto flex max-w-[1600px] flex-col gap-5">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-bold tracking-[0.2em] transition ${
                    item.label === "MATCHES"
                      ? "text-purple-300"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/recruitment"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-between border border-purple-400/40 bg-purple-600 px-5 py-4 text-[10px] font-bold tracking-[0.2em]"
              >
                JOIN KHOR VALORANT
                <ArrowUpRight size={15} />
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[680px] items-end overflow-hidden border-b border-white/[0.07] pt-32 md:min-h-[790px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-[-20%] h-[650px] w-[650px] rounded-full bg-purple-700/20 blur-[160px]" />

          <div className="absolute bottom-[-25%] left-[5%] h-[450px] w-[450px] rounded-full bg-indigo-900/20 blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] via-[#08080b]/50 to-transparent" />
        </div>

        <div className="pointer-events-none absolute right-[-8%] top-[12%] hidden h-[650px] w-[650px] items-center justify-center lg:flex">
          <div className="absolute h-[600px] w-[600px] rounded-full border border-purple-400/10" />
          <div className="absolute h-[470px] w-[470px] rounded-full border border-purple-400/15" />
          <div className="absolute h-[340px] w-[340px] rotate-45 border border-white/[0.08]" />

          <span className="select-none text-[450px] font-black leading-none tracking-[-0.15em] text-white/[0.035]">
            K
          </span>

          <div className="absolute bottom-[12%] right-[14%] border border-purple-400/30 bg-[#0b0b10]/80 px-5 py-4 backdrop-blur-xl">
            <p className="text-[9px] font-bold tracking-[0.3em] text-purple-300">
              KHOR COMPETITIVE
            </p>
            <p className="mt-2 text-xs font-bold tracking-[0.15em]">
              THE ROAD AHEAD.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-12 md:pb-28">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-purple-400" />
            <p className="text-[10px] font-bold tracking-[0.32em] text-purple-300">
              KHOR COMPETITIVE
            </p>
          </div>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.87] tracking-[-0.07em] sm:text-7xl md:text-9xl lg:text-[145px]">
            MATCH
            <br />
            <span className="text-purple-400">CENTER.</span>
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xl text-sm leading-8 text-zinc-400 md:text-base">
              Every competition starts with an opportunity. Follow
              the journey of KHOR VALORANT, from its first fixtures
              to future competitive milestones.
            </p>

            <Link
              href="/teams"
              className="group inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-purple-300 transition hover:text-white"
            >
              EXPLORE THE TEAM
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-20 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
            <div>
              <p className="text-[9px] font-bold tracking-[0.25em] text-zinc-600">
                GAME
              </p>
              <p className="mt-2 text-xs font-bold tracking-widest">
                VALORANT
              </p>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.25em] text-zinc-600">
                FIXTURES
              </p>
              <p className="mt-2 text-xs font-bold tracking-widest">
                NOT YET ANNOUNCED
              </p>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.25em] text-zinc-600">
                COMPETITIVE STATUS
              </p>
              <p className="mt-2 text-xs font-bold tracking-widest text-purple-300">
                ROSTER FORMING
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-8 top-36 hidden text-right md:block">
          <p className="text-[9px] font-bold tracking-[0.3em] text-white/25">
            KHOR ESPORTS
          </p>
          <p className="mt-2 text-[9px] tracking-[0.3em] text-white/25">
            EST. 2026
          </p>
        </div>
      </section>

      {/* MATCH CENTER NAVIGATION */}
      <section className="border-b border-white/[0.07] bg-[#0b0b0f]">
        <div className="mx-auto grid max-w-[1500px] divide-y divide-white/[0.07] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-12">
          <a
            href="#upcoming"
            className="group flex items-center gap-5 py-8 transition hover:bg-white/[0.02] sm:px-8"
          >
            <CalendarDays
              size={25}
              className="text-purple-300 transition group-hover:scale-110"
            />
            <div>
              <p className="text-xs font-black tracking-widest">UPCOMING</p>
              <p className="mt-1 text-[10px] tracking-wider text-zinc-500">
                MATCH SCHEDULE
              </p>
            </div>
            <ChevronRight size={15} className="ml-auto text-zinc-600" />
          </a>

          <a
            href="#live"
            className="group flex items-center gap-5 py-8 transition hover:bg-white/[0.02] sm:px-8"
          >
            <Radio
              size={25}
              className="text-purple-300 transition group-hover:scale-110"
            />
            <div>
              <p className="text-xs font-black tracking-widest">LIVE</p>
              <p className="mt-1 text-[10px] tracking-wider text-zinc-500">
                LIVE COMPETITION
              </p>
            </div>
            <ChevronRight size={15} className="ml-auto text-zinc-600" />
          </a>

          <a
            href="#results"
            className="group flex items-center gap-5 py-8 transition hover:bg-white/[0.02] sm:px-8"
          >
            <History
              size={25}
              className="text-purple-300 transition group-hover:scale-110"
            />
            <div>
              <p className="text-xs font-black tracking-widest">RESULTS</p>
              <p className="mt-1 text-[10px] tracking-wider text-zinc-500">
                MATCH HISTORY
              </p>
            </div>
            <ChevronRight size={15} className="ml-auto text-zinc-600" />
          </a>
        </div>
      </section>

      {/* UPCOMING MATCHES */}
      <section
        id="upcoming"
        className="scroll-mt-24 px-6 py-28 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
                01 / THE SCHEDULE
              </p>

              <h2 className="text-4xl font-black tracking-[-0.05em] md:text-7xl">
                UPCOMING
                <br />
                <span className="text-purple-400">MATCHES.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              Official fixtures, opponents, dates, and competition
              information will be published here when confirmed.
            </p>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-[#101014] p-10 md:p-20">
            <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[350px] w-[350px] rounded-full bg-purple-700/10 blur-[110px]" />

            <div className="relative mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-purple-400/20 bg-purple-500/[0.06]">
                <CalendarDays size={29} className="text-purple-300" />
              </div>

              <p className="mt-8 text-[9px] font-bold tracking-[0.3em] text-purple-300">
                KHOR VALORANT / FIXTURES
              </p>

              <h3 className="mt-5 text-2xl font-black tracking-tight md:text-4xl">
                THE FIRST MATCH
                <br />
                IS STILL AHEAD.
              </h3>

              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-500">
                KHOR VALORANT is currently in roster formation.
                Our first competitive fixtures will be announced
                once the team and schedule are finalized.
              </p>

              <div className="mt-9 inline-flex items-center gap-3 border border-white/10 px-5 py-3">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-[9px] font-bold tracking-[0.2em] text-zinc-400">
                  NO UPCOMING MATCHES ANNOUNCED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MATCHES */}
      <section
        id="live"
        className="scroll-mt-24 border-y border-white/[0.07] bg-[#0b0b0f] px-6 py-28 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
                02 / REAL-TIME COMPETITION
              </p>

              <h2 className="text-4xl font-black tracking-[-0.05em] md:text-7xl">
                LIVE <span className="text-purple-400">NOW.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-zinc-600" />
              NO ACTIVE MATCHES
            </div>
          </div>

          <div className="grid gap-0 border border-white/10 bg-[#101014] md:grid-cols-[1fr_1fr]">
            <div className="flex flex-col justify-center border-b border-white/10 p-9 md:border-b-0 md:border-r md:p-14">
              <div className="flex h-14 w-14 items-center justify-center border border-purple-400/20 bg-purple-500/[0.06]">
                <Radio size={25} className="text-purple-300" />
              </div>

              <h3 className="mt-8 text-2xl font-black">
                NO LIVE MATCHES.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                There are currently no active KhoR competitions.
                Live match coverage will appear here when the
                team begins competing.
              </p>
            </div>

            <div className="relative flex min-h-[280px] flex-col justify-center overflow-hidden p-9 md:p-14">
              <div className="pointer-events-none absolute right-[-50px] top-[-80px] h-64 w-64 rounded-full bg-purple-700/10 blur-[90px]" />

              <p className="relative text-[9px] font-bold tracking-[0.3em] text-purple-300">
                MATCH DAY COVERAGE
              </p>

              <h3 className="relative mt-5 text-3xl font-black leading-tight">
                EVERY ROUND.
                <br />
                EVERY MOMENT.
              </h3>

              <p className="relative mt-5 max-w-sm text-sm leading-7 text-zinc-500">
                Future match coverage can include opponents,
                maps, scorelines, and competition updates.
              </p>

              <div className="relative mt-8 flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] text-zinc-500">
                <Crosshair size={16} className="text-purple-300" />
                KHOR COMPETITIVE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section
        id="results"
        className="scroll-mt-24 px-6 py-28 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12">
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
              03 / THE RECORD
            </p>

            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-7xl">
              MATCH <span className="text-purple-400">HISTORY.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
              Every official result becomes part of an organization's
              history. This is where KhoR's competitive record will grow.
            </p>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-[#101014] p-10 md:p-20">
            <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-700/10 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-purple-400/20 bg-purple-500/[0.06]">
                <Trophy size={29} className="text-purple-300" />
              </div>

              <p className="mt-8 text-[9px] font-bold tracking-[0.3em] text-purple-300">
                THE COMPETITIVE RECORD
              </p>

              <h3 className="mt-5 text-2xl font-black md:text-4xl">
                A LEGACY TO BUILD.
              </h3>

              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-500">
                Official match results, opponents, tournament
                placements, and competitive milestones will
                be documented here as KhoR competes.
              </p>

              <p className="mt-8 text-[9px] font-bold tracking-[0.2em] text-zinc-600">
                NO OFFICIAL RESULTS RECORDED YET
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITIVE JOURNEY */}
      <section className="border-y border-white/[0.07] bg-[#0b0b0f] px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
              THE ROAD AHEAD
            </p>

            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
              EVERY
              <br />
              <span className="text-purple-400">BEGINNING.</span>
              <br />
              MATTERS.
            </h2>
          </div>

          <div className="border-l border-purple-400/30 pl-7 md:pl-12">
            <div className="flex items-center gap-4">
              <Gamepad2 size={23} className="text-purple-300" />
              <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-400">
                KHOR VALORANT
              </p>
            </div>

            <p className="mt-7 max-w-xl text-sm leading-8 text-zinc-400 md:text-base">
              Before the first match comes the preparation. Before
              the first result comes the work. KhoR is focused on
              establishing its competitive foundation and building
              a team ready to represent the organization.
            </p>

            <Link
              href="/teams"
              className="group mt-8 inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.18em] text-purple-300 transition hover:text-white"
            >
              DISCOVER KHOR VALORANT
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 md:px-12 md:py-36">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden border border-purple-400/20 bg-[#111014] px-8 py-16 text-center md:px-16 md:py-24">
          <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

          <div className="relative">
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
              BE PART OF THE NEXT CHAPTER
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-7xl">
              THE JOURNEY
              <br />
              <span className="text-purple-400">STARTS HERE.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-zinc-400">
              Follow KhoR's development, connect with the community,
              or apply to become part of the competitive team.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/recruitment"
                className="group inline-flex items-center justify-center gap-3 bg-purple-600 px-8 py-4 text-[10px] font-black tracking-[0.18em] transition hover:bg-purple-500"
              >
                JOIN KHOR VALORANT
                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/15 px-8 py-4 text-[10px] font-black tracking-[0.18em] transition hover:border-purple-300 hover:bg-white/[0.04]"
              >
                JOIN OUR DISCORD
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#070709] px-6 pb-8 pt-14 md:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-12 border-b border-white/[0.08] pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center border border-purple-400/40 bg-purple-500/10">
                <span className="text-xl font-black">K</span>
              </div>

              <div>
                <p className="text-2xl font-black tracking-[0.2em]">
                  KHOR<span className="text-purple-400">.</span>
                </p>
                <p className="text-[8px] font-bold tracking-[0.3em] text-zinc-500">
                  ESPORTS ORGANIZATION
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
              An independent esports organization building its competitive
              future through teamwork, ambition, and dedication.
            </p>
          </div>

          <div>
            <p className="mb-6 text-[9px] font-bold tracking-[0.3em] text-zinc-500">
              EXPLORE
            </p>

            <div className="flex flex-col gap-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`w-fit text-[10px] font-bold tracking-widest transition hover:text-purple-300 ${
                    item.label === "MATCHES"
                      ? "text-purple-300"
                      : "text-zinc-400"
                  }`}
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
                  className="group flex w-fit items-center gap-2 text-[10px] font-bold tracking-widest text-zinc-400 transition hover:text-purple-300"
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

        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 pt-7 text-[9px] font-medium tracking-[0.15em] text-zinc-600 sm:flex-row">
          <p>© 2026 KHOR. ALL RIGHTS RESERVED.</p>
          <p>BUILT TO COMPETE.</p>
        </div>
      </footer>
    </main>
  );
}
