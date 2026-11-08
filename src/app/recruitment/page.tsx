
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Crosshair,
  Gamepad2,
  Menu,
  Shield,
  Target,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";

const DISCORD_URL = "https://discord.gg/eQ9mCzpGTN";
const APPLICATION_URL = "https://forms.gle/qMHpVQTGE35VSNeG8";

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

const ROLES = [
  {
    number: "01",
    name: "DUELIST",
    description:
      "Create space, take initiative, and give your team opportunities to win rounds.",
    icon: Crosshair,
  },
  {
    number: "02",
    name: "INITIATOR",
    description:
      "Gather information, create openings, and enable your teammates to take control.",
    icon: Zap,
  },
  {
    number: "03",
    name: "CONTROLLER",
    description:
      "Control the map, manage space, and support your team's strategic execution.",
    icon: Shield,
  },
  {
    number: "04",
    name: "SENTINEL",
    description:
      "Anchor sites, gather information, and provide consistency on defense.",
    icon: Target,
  },
  {
    number: "05",
    name: "FLEX",
    description:
      "Adapt to different team compositions and fill the role your team needs.",
    icon: Gamepad2,
  },
];

const REQUIREMENTS = [
  "A competitive mindset and willingness to improve.",
  "Consistent availability for team practices and matches.",
  "Strong communication and a team-first attitude.",
  "Ability to accept constructive criticism.",
  "Respectful and professional behavior toward teammates.",
  "A genuine interest in competing and growing with KhoR.",
];

const PROCESS = [
  {
    number: "01",
    title: "SUBMIT APPLICATION",
    description:
      "Complete the official KHOR VALORANT application with your competitive background and availability.",
  },
  {
    number: "02",
    title: "APPLICATION REVIEW",
    description:
      "The KhoR founder reviews your rank, experience, role preferences, and overall fit.",
  },
  {
    number: "03",
    title: "EVALUATION",
    description:
      "Selected applicants may be contacted for additional evaluation or potential tryouts.",
  },
  {
    number: "04",
    title: "ROSTER DECISION",
    description:
      "Final decisions are made based on performance, team chemistry, and roster needs.",
  },
];

const OPEN_POSITIONS = [
  {
    number: "01–05",
    title: "STARTING ROSTER",
    description: "Five competitive roster positions available.",
    status: "OPEN",
  },
  {
    number: "06",
    title: "SUBSTITUTE PLAYER",
    description: "One substitute position available.",
    status: "OPEN",
  },
];

export default function RecruitmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#08080b] text-white">
      {/* NAVIGATION */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-[#08080b]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
          <Link
            href="/"
            className="group flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/branding/khor-logo.png"
              alt="KhoR Esports"
              width={160}
              height={48}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[10px] font-bold tracking-[0.16em] transition-colors ${
                  item.href === "/recruitment"
                    ? "text-purple-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-purple-400/40 bg-purple-500/10 px-5 py-3 text-[10px] font-bold tracking-[0.15em] text-white transition-all hover:border-purple-300 hover:bg-purple-500/20"
            >
              JOIN THE COMMUNITY
              <ArrowUpRight size={14} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b0b10] px-6 py-6 lg:hidden">
            <nav className="flex flex-col">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-white/[0.06] py-4 text-xs font-bold tracking-[0.18em] ${
                    item.href === "/recruitment"
                      ? "text-purple-400"
                      : "text-zinc-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 bg-purple-600 px-5 py-4 text-xs font-bold tracking-widest"
              >
                JOIN THE COMMUNITY
                <ArrowUpRight size={15} />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden border-b border-white/[0.06] pt-[78px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(124,58,237,0.17),transparent_50%)]" />
        <div className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full border border-purple-400/[0.08]" />
        <div className="absolute -right-16 top-36 h-[370px] w-[370px] rounded-full border border-purple-400/[0.08]" />
        <div className="absolute right-10 top-52 h-[210px] w-[210px] rounded-full bg-purple-600/[0.08] blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-28 lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-400" />
              <span className="text-[10px] font-bold tracking-[0.35em] text-purple-300">
                KHOR ESPORTS / RECRUITMENT
              </span>
            </div>

            <p className="mb-4 text-sm font-bold tracking-[0.35em] text-zinc-400">
              THE NEXT CHAPTER STARTS HERE
            </p>

            <h1 className="text-6xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[110px]">
              YOUR
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 bg-clip-text text-transparent">
                MOVE.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              We are building the foundation of KHOR VALORANT. We are looking
              for dedicated players ready to compete, improve, and build
              something together.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-purple-600 px-8 py-5 text-xs font-black tracking-[0.18em] transition-all hover:bg-purple-500"
              >
                APPLY NOW
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border border-white/15 px-8 py-5 text-xs font-bold tracking-[0.18em] transition-all hover:border-purple-400/60 hover:bg-white/[0.04]"
              >
                JOIN KHOR HQ
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-black">05</p>
                <p className="mt-1 text-[9px] font-bold tracking-[0.2em] text-zinc-500">
                  STARTING PLAYERS
                </p>
              </div>
              <div className="h-9 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-black">01</p>
                <p className="mt-1 text-[9px] font-bold tracking-[0.2em] text-zinc-500">
                  SUBSTITUTE
                </p>
              </div>
              <div className="h-9 w-px bg-white/10" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <p className="text-sm font-bold text-green-400">RECRUITING</p>
                </div>
                <p className="mt-1 text-[9px] font-bold tracking-[0.2em] text-zinc-500">
                  APPLICATIONS OPEN
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-12 hidden items-center gap-3 text-[9px] font-bold tracking-[0.25em] text-zinc-600 lg:flex">
          SCROLL TO EXPLORE
          <ChevronRight size={13} className="rotate-90" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-purple-400" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-purple-300">
                THE OPPORTUNITY
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              BUILD THE
              <br />
              <span className="text-purple-400">FOUNDATION.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-zinc-300">
              Every competitive team starts somewhere. KHOR is looking for its
              first VALORANT roster — players who want more than just another
              team tag.
            </p>
            <p className="mt-6 leading-8 text-zinc-500">
              Our goal is to create an environment where players can develop
              their individual skill, build chemistry, establish a competitive
              identity, and work toward a shared vision. We value commitment
              just as much as mechanical ability.
            </p>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="border-y border-white/[0.06] bg-[#0c0c11]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-purple-400" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-purple-300">
                  ROSTER FORMATION
                </span>
              </div>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                OPEN POSITIONS<span className="text-purple-400">.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-500">
              KhoR VALORANT is currently forming its first roster. Five starting
              positions and one substitute position are open for applications.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {OPEN_POSITIONS.map((position) => (
              <div
                key={position.number}
                className="group relative overflow-hidden border border-white/[0.08] bg-[#111116] p-8 transition-all hover:border-purple-400/40 sm:p-10"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-600/[0.07] blur-3xl transition-all group-hover:bg-purple-600/[0.15]" />

                <div className="relative flex items-start justify-between">
                  <span className="text-4xl font-black tracking-tight text-white/20">
                    {position.number}
                  </span>
                  <span className="border border-green-400/20 bg-green-400/[0.06] px-3 py-1.5 text-[9px] font-black tracking-[0.2em] text-green-400">
                    {position.status}
                  </span>
                </div>

                <div className="relative mt-12">
                  <h3 className="text-2xl font-black tracking-tight">
                    {position.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-500">
                    {position.description}
                  </p>
                  <a
                    href={APPLICATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-purple-300 transition-colors hover:text-white"
                  >
                    APPLY FOR POSITION
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-purple-400" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-purple-300">
              COMPETITIVE ROLES
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            FIND YOUR ROLE<span className="text-purple-400">.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
            We are considering players across all five VALORANT roles. Let us
            know where you perform best and where you can contribute.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ROLES.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.number}
                className="group border border-white/[0.08] bg-[#0d0d12] p-6 transition-all hover:-translate-y-1 hover:border-purple-400/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-zinc-600">
                    {role.number}
                  </span>
                  <Icon
                    size={21}
                    className="text-purple-400 transition-transform group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-12 text-lg font-black tracking-wide">
                  {role.name}
                </h3>
                <p className="mt-3 text-xs leading-6 text-zinc-500">
                  {role.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="border-y border-white/[0.06] bg-[#0c0c11]">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-32">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-purple-400" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-purple-300">
                WHAT WE VALUE
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              MORE THAN
              <br />
              <span className="text-purple-400">MECHANICS.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-zinc-500">
              Individual skill matters, but a strong team is built through
              trust, discipline, communication, and the willingness to improve
              together. We want players who understand that competitive success
              is a team effort.
            </p>
          </div>

          <div className="space-y-5">
            {REQUIREMENTS.map((requirement, index) => (
              <div
                key={requirement}
                className="flex items-start gap-4 border-b border-white/[0.07] pb-5"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-purple-400"
                />
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-zinc-700">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-6 text-zinc-300">
                    {requirement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-purple-400" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-purple-300">
              HOW IT WORKS
            </span>
            <span className="h-px w-8 bg-purple-400" />
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            THE PROCESS<span className="text-purple-400">.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-500">
            From your first application to a potential place on the roster.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <div key={step.number} className="relative">
              {index !== PROCESS.length - 1 && (
                <div className="absolute left-12 top-6 hidden h-px w-[calc(100%-20px)] bg-white/10 lg:block" />
              )}

              <span className="relative flex h-12 w-12 items-center justify-center border border-purple-400/30 bg-purple-500/[0.08] text-sm font-black text-purple-300">
                {step.number}
              </span>

              <h3 className="mt-8 text-sm font-black tracking-[0.12em]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-y border-purple-400/20 bg-[#100b19]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(124,58,237,0.25),transparent_65%)]" />
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-purple-600/[0.08] blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-600/[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-24 text-center lg:px-12 lg:py-32">
          <Trophy size={34} className="mx-auto mb-8 text-purple-300" />

          <p className="text-[10px] font-bold tracking-[0.35em] text-purple-300">
            THE NEXT CHAPTER IS YOURS
          </p>

          <h2 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            MAKE YOUR
            <br />
            <span className="text-purple-400">MARK.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-8 text-zinc-400">
            Think you have what it takes? Take the first step toward becoming
            part of KHOR VALORANT.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-purple-600 px-9 py-5 text-xs font-black tracking-[0.2em] transition-all hover:bg-purple-500"
            >
              SUBMIT YOUR APPLICATION
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-white/20 px-9 py-5 text-xs font-bold tracking-[0.2em] transition-all hover:border-purple-300 hover:bg-white/[0.04]"
            >
              JOIN KHOR HQ
              <Users size={16} />
            </a>
          </div>

          <p className="mt-7 text-[10px] tracking-wide text-zinc-600">
            APPLICATIONS ARE REVIEWED BY THE KHOR FOUNDER.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07070a]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/branding/khor-logo.png"
                  alt="KhoR Esports"
                  width={160}
                  height={48}
                  className="h-11 w-auto object-contain"
                />
              </Link>

              <p className="mt-6 max-w-sm text-xs leading-7 text-zinc-500">
                Built on competition. Driven by community. Focused on what
                comes next.
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-black tracking-[0.25em] text-white">
                EXPLORE
              </h3>
              <div className="mt-6 flex flex-col gap-4">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="w-fit text-xs text-zinc-500 transition-colors hover:text-purple-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black tracking-[0.25em] text-white">
                FOLLOW KHOR
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-purple-300"
                  >
                    {social.label}
                    <ArrowUpRight size={11} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center">
            <p className="text-[10px] tracking-wide text-zinc-600">
              © 2026 KHOR ESPORTS. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[10px] tracking-[0.15em] text-zinc-700">
              BUILT FOR WHAT&apos;S NEXT.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
