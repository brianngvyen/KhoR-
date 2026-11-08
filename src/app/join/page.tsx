
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
  Trophy,
  Users,
} from "lucide-react";

const DISCORD_URL = "https://discord.gg/eQ9mCzpGTN";

const divisions = [
  {
    number: "01",
    name: "THE COMMUNITY",
    subtitle: "PLAY TOGETHER.",
    description:
      "Meet new people, find teammates, join games, and become part of the KhoR community. Whether you play every day or just occasionally, there's a place for you here.",
    icon: Users,
    tag: "OPEN TO EVERYONE",
    features: [
      "Meet and connect with other players",
      "Find people to play with",
      "Join community games and events",
      "No competitive rank requirement",
    ],
    action: "JOIN THE COMMUNITY",
  },
  {
    number: "02",
    name: "COMPETITIVE",
    subtitle: "PLAY TO WIN.",
    description:
      "Looking to take your game further? KhoR's competitive VALORANT division is for players who want to improve, work as a team, and compete together.",
    icon: Trophy,
    tag: "RECRUITMENT THROUGH DISCORD",
    features: [
      "Team-oriented environment",
      "Structured practice and improvement",
      "Competitive VALORANT opportunities",
      "Player roles and team coordination",
    ],
    action: "EXPLORE COMPETITIVE",
  },
];

const steps = [
  {
    number: "01",
    title: "JOIN THE DISCORD",
    description:
      "Enter KhoR HQ and introduce yourself to the community.",
  },
  {
    number: "02",
    title: "FIND YOUR PLACE",
    description:
      "Connect with casual players or express interest in competitive VALORANT.",
  },
  {
    number: "03",
    title: "GET INVOLVED",
    description:
      "Meet your teammates, join games, and start building connections.",
  },
];

export default function JoinPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Navigation */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.08] bg-[#080808]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 md:px-12">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-[-0.1em]">
              K<span className="text-purple-500">.</span>
            </span>
            <span className="text-sm font-bold tracking-[0.22em]">
              KhoR
            </span>
          </Link>

          <nav className="hidden items-center gap-9 text-[11px] font-semibold tracking-[0.18em] text-zinc-400 md:flex">
            <Link href="/" className="transition hover:text-white">HOME</Link>
            <Link href="/teams" className="transition hover:text-white">TEAMS</Link>
            <Link href="/#about" className="transition hover:text-white">ABOUT</Link>
            <Link href="/#news" className="transition hover:text-white">NEWS</Link>
          </nav>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 border border-purple-500 bg-[#111014] px-5 py-3 text-xs font-bold tracking-wider text-white transition duration-300 hover:bg-purple-600 hover:border-purple-400"
          >
            <span className="whitespace-nowrap text-white">JOIN THE DISCORD</span>
            <ArrowUpRight size={15} className="shrink-0 text-white" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[680px] items-center border-b border-white/[0.08] pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-purple-700/[0.13] blur-[150px]" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-900/[0.12] blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-28 md:px-12">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-purple-400">
              BECOME PART OF KhoR
            </span>
          </div>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl md:text-8xl lg:text-[112px]">
            FIND YOUR
            <br />
            <span className="text-zinc-500">PEOPLE.</span>
            <br />
            <span className="text-purple-400">FIND YOUR KhoR.</span>
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              More than a place to play. A community built around gaming,
              connection, and the people you meet along the way. There's a
              place for you here at KhoR.
            </p>

            <a
              href="#divisions"
              className="group flex w-fit items-center gap-4 border-b border-purple-500 pb-3 text-[11px] font-bold tracking-[0.2em] transition hover:text-purple-300"
            >
              FIND YOUR DIVISION
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-24 grid max-w-3xl grid-cols-3 border-t border-white/10 pt-6">
            <div>
              <p className="text-2xl font-black tracking-tight">01</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-zinc-500">COMMUNITY</p>
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight">02</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-zinc-500">COMPETITION</p>
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight">∞</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-zinc-500">CONNECTIONS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions" className="mx-auto max-w-[1440px] px-6 py-28 md:px-12">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-purple-400">
              / CHOOSE YOUR PATH
            </p>
            <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">
              TWO WAYS TO <span className="text-zinc-500">BELONG.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-500">
            Whether you're here to meet people or compete at a higher level,
            KhoR has room for both.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {divisions.map((division) => {
            const Icon = division.icon;

            return (
              <article
                key={division.number}
                className="group relative flex flex-col overflow-hidden border border-white/10 bg-[#101010] p-7 transition duration-300 hover:border-purple-500/50 md:p-10"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/[0.08] blur-[90px] transition group-hover:bg-purple-600/[0.16]" />

                <div className="relative flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-zinc-600">
                    DIVISION / {division.number}
                  </span>
                  <Icon size={25} strokeWidth={1.3} className="text-purple-400" />
                </div>

                <div className="relative mt-16">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-purple-400">
                    {division.tag}
                  </span>
                  <h3 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-5xl">
                    {division.name}
                  </h3>
                  <p className="mt-2 text-xs font-bold tracking-[0.25em] text-zinc-500">
                    {division.subtitle}
                  </p>
                  <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-400">
                    {division.description}
                  </p>
                </div>

                <div className="relative mt-10 space-y-4 border-t border-white/10 pt-7">
                  {division.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-xs text-zinc-300">
                      <Check size={14} className="shrink-0 text-purple-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-12 flex items-center justify-between border border-purple-500/50 bg-[#0b0b0d] px-5 py-5 text-xs font-bold tracking-[0.18em] text-white transition hover:border-purple-400 hover:bg-purple-600"
                >
                  <span>{division.action}</span>
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12">
          <div className="mb-16">
            <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-purple-400">
              / GETTING STARTED
            </p>
            <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">
              YOUR NEXT MOVE.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500">
              Getting involved is simple. Start with the community and take it from there.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-white/15 pt-6">
                <span className="text-xs font-bold tracking-[0.2em] text-purple-400">
                  STEP {step.number}
                </span>
                <h3 className="mt-8 text-xl font-black tracking-tight">{step.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-6 py-32 md:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.13] blur-[130px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center border border-purple-500/40 bg-purple-500/10">
            <MessageCircle size={23} className="text-purple-400" />
          </div>

          <p className="text-[10px] font-bold tracking-[0.3em] text-purple-400">
            YOUR PLACE IS WAITING
          </p>
          <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
            THE NEXT CHAPTER
            <br />
            <span className="text-zinc-500">STARTS HERE.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-zinc-400">
            Meet the community, find your teammates, and make yourself at home.
            We'll see you inside KhoR HQ.
          </p>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-10 inline-flex items-center gap-8 border border-purple-500 bg-[#111014] px-7 py-5 text-xs font-black tracking-[0.2em] text-white transition hover:bg-purple-600"
          >
            <span>JOIN THE DISCORD</span>
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 py-10 md:flex-row md:items-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-[-0.1em]">
              K<span className="text-purple-500">.</span>
            </span>
            <span className="text-xs font-bold tracking-[0.22em]">KhoR</span>
          </Link>

          <p className="text-[9px] tracking-[0.2em] text-zinc-600">
            A COMMUNITY BUILT AROUND GAMING.
          </p>

          <div className="flex gap-6 text-[10px] font-bold tracking-[0.15em] text-zinc-500">
            <Link href="/" className="transition hover:text-white">HOME</Link>
            <Link href="/teams" className="transition hover:text-white">TEAMS</Link>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              DISCORD
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
