"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Crosshair,
  Trophy,
  Shield,
  Target,
  Menu,
  X,
  Users,
  Gamepad2,
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

const STARTING_ROSTER = [
  { number: "01", position: "PLAYER ONE" },
  { number: "02", position: "PLAYER TWO" },
  { number: "03", position: "PLAYER THREE" },
  { number: "04", position: "PLAYER FOUR" },
  { number: "05", position: "PLAYER FIVE" },
];

const STAFF_ROLES = [
  {
    title: "HEAD COACH",
    description:
      "Responsible for team preparation, strategy, development, and competitive direction.",
  },
  {
    title: "TEAM MANAGER",
    description:
      "Oversees team operations, scheduling, communication, and organization.",
  },
];

export default function TeamsPage() {
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
                  item.label === "TEAMS"
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
                    item.label === "TEAMS"
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
      <section className="relative flex min-h-[690px] items-end overflow-hidden border-b border-white/[0.07] pt-28 md:min-h-[790px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-[-15%] h-[650px] w-[650px] rounded-full bg-purple-700/20 blur-[160px]" />
          <div className="absolute bottom-[-30%] left-[10%] h-[500px] w-[500px] rounded-full bg-indigo-900/20 blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] via-[#08080b]/50 to-[#08080b]/20" />
        </div>

        <div className="pointer-events-none absolute right-[-8%] top-[12%] hidden h-[700px] w-[700px] items-center justify-center lg:flex">
          <div className="absolute h-[620px] w-[620px] rounded-full border border-purple-400/10" />
          <div className="absolute h-[490px] w-[490px] rounded-full border border-purple-400/15" />
          <div className="absolute h-[360px] w-[360px] rotate-45 border border-white/[0.08]" />

          <span className="select-none text-[480px] font-black leading-none tracking-[-0.15em] text-white/[0.035]">
            K
          </span>

          <div className="absolute bottom-[14%] right-[16%] border border-purple-400/30 bg-[#0b0b10]/80 px-5 py-4 backdrop-blur-xl">
            <p className="text-[9px] font-bold tracking-[0.3em] text-purple-300">
              KHOR VALORANT
            </p>
            <p className="mt-2 text-xs font-bold tracking-[0.15em]">
              BUILT TO COMPETE.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-12 md:pb-28">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-purple-400" />
            <p className="text-[10px] font-bold tracking-[0.32em] text-purple-300">
              OFFICIAL COMPETITIVE DIVISION
            </p>
          </div>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.87] tracking-[-0.07em] sm:text-7xl md:text-9xl lg:text-[145px]">
            KHOR
            <br />
            <span className="text-purple-400">VALORANT.</span>
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xl text-sm leading-8 text-zinc-400 md:text-base">
              One team. One identity. A competitive roster built on
              discipline, teamwork, and the ambition to compete.
            </p>

            <Link
              href="#roster"
              className="group inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-purple-300 transition hover:text-white"
            >
              MEET THE ROSTER
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
                ROSTER
              </p>
              <p className="mt-2 text-xs font-bold tracking-widest">
                5 STARTING POSITIONS
              </p>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.25em] text-zinc-600">
                STATUS
              </p>
              <p className="mt-2 text-xs font-bold tracking-widest text-purple-300">
                RECRUITING
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

      {/* TEAM INTRO */}
      <section className="border-b border-white/[0.07] bg-[#0b0b0f] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
              THE TEAM
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              MORE THAN
              <br />
              <span className="text-zinc-600">FIVE PLAYERS.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-zinc-400 md:pl-10">
            A competitive team is built through trust, preparation, and
            consistency. KHOR VALORANT is establishing its roster with
            players who want to improve together and represent something
            bigger than themselves.
          </p>
        </div>
      </section>

      {/* STARTING ROSTER */}
      <section
        id="roster"
        className="scroll-mt-24 px-6 py-28 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
                01 / THE PLAYERS
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-7xl">
                STARTING <span className="text-purple-400">ROSTER.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 border border-purple-400/20 bg-purple-500/[0.06] px-5 py-4">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              <span className="text-[9px] font-bold tracking-[0.17em] text-purple-200">
                ROSTER FORMATION IN PROGRESS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STARTING_ROSTER.map((player) => (
              <div
                key={player.number}
                className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden border border-white/10 bg-[#101014] p-6 transition duration-300 hover:border-purple-400/40"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-500/[0.07] via-transparent to-transparent opacity-60 transition group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-purple-300">
                    PLAYER {player.number}
                  </span>

                  <Crosshair
                    size={17}
                    className="text-zinc-600 transition group-hover:text-purple-300"
                  />
                </div>

                <div className="relative">
                  <div className="mb-6 flex h-32 items-center justify-center border border-white/[0.06] bg-white/[0.02]">
                    <span className="text-7xl font-black tracking-tighter text-white/[0.07]">
                      {player.number}
                    </span>
                  </div>

                  <p className="text-xl font-black tracking-tight">
                    POSITION OPEN
                  </p>

                  <p className="mt-2 text-[9px] font-bold tracking-[0.2em] text-zinc-500">
                    {player.position}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <span className="text-[9px] font-bold tracking-[0.17em] text-purple-300">
                      RECRUITING
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-7 text-[10px] leading-6 text-zinc-600">
            Player identities and roles will be announced after the official
            roster is finalized.
          </p>
        </div>
      </section>

      {/* SUBSTITUTE */}
      <section className="border-y border-white/[0.07] bg-[#0d0d11] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
                02 / ROSTER DEPTH
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                SUBSTITUTE
                <br />
                <span className="text-purple-400">PLAYER.</span>
              </h2>
            </div>

            <div className="border border-white/10 bg-[#101014] p-8 md:p-10">
              <div className="flex items-center justify-between">
                <Shield size={26} className="text-purple-300" />
                <span className="text-[9px] font-bold tracking-[0.2em] text-zinc-500">
                  POSITION 06
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-black">SUBSTITUTE POSITION OPEN</h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                A dedicated substitute helps maintain roster flexibility,
                supports the starting lineup, and prepares to compete when
                called upon.
              </p>

              <Link
                href="/recruitment"
                className="mt-7 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.17em] text-purple-300 transition hover:text-white"
              >
                APPLY FOR A POSITION
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STAFF */}
      <section className="px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14">
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
              03 / LEADERSHIP
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-7xl">
              BEHIND THE <span className="text-purple-400">TEAM.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-zinc-500">
              The people responsible for building the structure, direction,
              and competitive environment behind KHOR VALORANT.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="border border-purple-400/30 bg-purple-500/[0.05] p-8">
              <Users size={25} className="text-purple-300" />

              <p className="mt-9 text-[9px] font-bold tracking-[0.2em] text-purple-300">
                ORGANIZATION LEADERSHIP
              </p>

              <h3 className="mt-3 text-2xl font-black">FOUNDER</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Establishing KhoR's identity, organization, and long-term
                direction.
              </p>
            </div>

            {STAFF_ROLES.map((role) => (
              <div
                key={role.title}
                className="border border-white/10 bg-[#101014] p-8 transition hover:border-purple-400/30"
              >
                <Target size={25} className="text-purple-300" />

                <p className="mt-9 text-[9px] font-bold tracking-[0.2em] text-zinc-500">
                  TEAM STAFF
                </p>

                <h3 className="mt-3 text-2xl font-black">{role.title}</h3>

                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {role.description}
                </p>

                <p className="mt-7 border-t border-white/10 pt-5 text-[9px] font-bold tracking-[0.17em] text-purple-300">
                  POSITION NOT YET FILLED
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE IDENTITY */}
      <section className="border-y border-white/[0.07] bg-[#0d0d11] px-6 py-28 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14">
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
              04 / OUR FOUNDATION
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              WHAT WE <span className="text-purple-400">STAND FOR.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "DISCIPLINE",
                description:
                  "Consistent preparation, accountability, and commitment to improvement.",
              },
              {
                icon: Users,
                title: "TEAMWORK",
                description:
                  "Trust, communication, and respect between every member of the roster.",
              },
              {
                icon: Trophy,
                title: "COMPETITION",
                description:
                  "A shared ambition to compete, learn, and build a strong record.",
              },
            ].map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-purple-400/30 hover:bg-purple-500/[0.035]"
                >
                  <div className="mb-9 flex items-center justify-between">
                    <Icon
                      size={25}
                      className="text-purple-300 transition group-hover:scale-110"
                    />

                    <span className="text-[10px] font-bold tracking-widest text-zinc-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-black tracking-wide">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECRUITMENT CTA */}
      <section className="px-6 py-28 md:px-12 md:py-36">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden border border-purple-400/20 bg-[#111014] px-8 py-16 text-center md:px-16 md:py-24">
          <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

          <div className="relative">
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-300">
              THE NEXT GENERATION OF KHOR
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-7xl">
              YOUR PLACE
              <br />
              <span className="text-purple-400">IS WAITING.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-zinc-400">
              We're building the foundation of KHOR VALORANT. If you're
              ready to compete, improve, and represent the organization,
              we want to hear from you.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/recruitment"
                className="group inline-flex items-center justify-center gap-3 bg-purple-600 px-8 py-4 text-[10px] font-black tracking-[0.18em] transition hover:bg-purple-500"
              >
                APPLY TO KHOR VALORANT
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
                    item.label === "TEAMS"
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