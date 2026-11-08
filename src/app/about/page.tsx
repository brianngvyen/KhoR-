
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Crosshair,
  Heart,
  Target,
  Trophy,
  Users,
  Zap,
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

const VALUES = [
  {
    number: "01",
    icon: Users,
    title: "COMMUNITY",
    description:
      "An organization is defined by its people. We believe in creating an environment where players and members can connect, contribute, and belong.",
  },
  {
    number: "02",
    icon: Zap,
    title: "PROGRESS",
    description:
      "Improvement is a continuous process. We value learning from experience, adapting to challenges, and becoming better together.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "COMPETITION",
    description:
      "Competition pushes us forward. We embrace the challenge of testing our abilities and pursuing meaningful achievements.",
  },
  {
    number: "04",
    icon: Heart,
    title: "RESPECT",
    description:
      "We believe in sportsmanship, integrity, and treating others with respect, regardless of their experience or skill level.",
  },
];

const PRIORITIES = [
  {
    number: "01",
    title: "ESTABLISH OUR TEAMS",
    description:
      "Build a competitive foundation beginning with KhoR VALORANT.",
  },
  {
    number: "02",
    title: "GROW OUR COMMUNITY",
    description:
      "Develop KHOR HQ into a welcoming place for gaming and connection.",
  },
  {
    number: "03",
    title: "BUILD OUR IDENTITY",
    description:
      "Create an organization with a recognizable identity and a clear direction.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080808]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 md:px-12">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-[-0.1em]">
              K<span className="text-purple-500">.</span>
            </span>
            <span className="text-sm font-bold tracking-[0.22em]">
              KhoR
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-[10px] font-semibold tracking-[0.16em] text-zinc-400 xl:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.href === "/about"
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
            className="inline-flex items-center gap-2 border border-purple-500/60 bg-[#111014] px-5 py-3 text-xs font-bold tracking-wider text-white transition hover:bg-purple-600"
          >
            JOIN THE DISCORD
            <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden border-b border-white/[0.08]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-purple-700/[0.16] blur-[150px]" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-900/[0.12] blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-32 md:px-12 md:py-40">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-purple-400">
              GET TO KNOW KHOR
            </span>
          </div>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl md:text-8xl lg:text-[112px]">
            MORE THAN
            <br />
            <span className="text-zinc-500">A GAME.</span>
            <br />
            <span className="text-purple-400">AN IDENTITY.</span>
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              KhoR is an independent esports organization built around
              competition, community, and the belief that great things
              are created together.
            </p>

            <a
              href="#story"
              className="group flex w-fit items-center gap-4 border-b border-purple-500 pb-3 text-[11px] font-bold tracking-[0.2em] transition hover:text-purple-300"
            >
              DISCOVER KHOR
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-24 grid max-w-3xl grid-cols-3 border-t border-white/10 pt-6">
            <div>
              <p className="text-2xl font-black">2026</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-zinc-500">
                ESTABLISHED
              </p>
            </div>
            <div>
              <p className="text-2xl font-black">01</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-zinc-500">
                COMPETITIVE TITLE
              </p>
            </div>
            <div>
              <p className="text-2xl font-black">∞</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-zinc-500">
                POSSIBILITIES
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        id="story"
        className="mx-auto grid max-w-[1440px] gap-12 px-6 py-28 md:px-12 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-400">
            / THE STORY BEHIND KHOR
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-[-0.06em] sm:text-6xl">
            EVERY GREAT
            <br />
            <span className="text-zinc-500">JOURNEY STARTS</span>
            <br />
            SOMEWHERE.
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-sm leading-8 text-zinc-400 md:text-base">
            KhoR began with a vision to create something beyond an
            ordinary gaming community. We wanted to build an organization
            where competition and connection could exist under one identity.
          </p>

          <p className="mt-5 text-sm leading-8 text-zinc-400 md:text-base">
            From competitive ambitions to the friendships formed through
            gaming, we believe the people behind an organization are just
            as important as the results it achieves.
          </p>

          <p className="mt-5 text-sm leading-8 text-zinc-400 md:text-base">
            We are still at the beginning of that journey. Our focus is
            on establishing our first competitive team, growing our
            community, and building the foundation for what KhoR can
            become.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="border-y border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 py-28 md:px-12 lg:grid-cols-2">
          <article className="relative overflow-hidden border border-purple-500/20 bg-[#121019] p-9 md:p-12">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-purple-600/15 blur-[70px]" />

            <div className="relative">
              <Target size={30} className="text-purple-400" />

              <p className="mt-10 text-[10px] font-bold tracking-[0.25em] text-purple-400">
                OUR MISSION
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-4xl">
                BUILD A PLACE
                <br />
                TO BELONG.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
                Create an organization where players can compete,
                connect, develop their abilities, and become part of
                something bigger than the game itself.
              </p>
            </div>
          </article>

          <article className="relative overflow-hidden border border-white/10 bg-[#101014] p-9 md:p-12">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-[70px]" />

            <div className="relative">
              <Crosshair size={30} className="text-purple-400" />

              <p className="mt-10 text-[10px] font-bold tracking-[0.25em] text-purple-400">
                OUR VISION
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-4xl">
                CREATE
                <br />
                SOMETHING LASTING.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
                Grow KhoR into a recognized esports organization
                defined by its competitive ambition, strong identity,
                and the community that stands behind it.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-[1440px] px-6 py-28 md:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-400">
            / WHAT DEFINES US
          </p>

          <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">
            THE FOUNDATION
            <br />
            <span className="text-zinc-500">OF KHOR.</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-500">
            These principles shape the organization we want to build
            and the community we want to represent.
          </p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.number}
                className="bg-[#080808] p-8 transition hover:bg-[#121019] md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest text-zinc-600">
                    {value.number}
                  </span>
                  <Icon
                    size={24}
                    className="text-purple-400"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-12 text-sm font-black tracking-[0.12em]">
                  {value.title}
                </h3>

                <p className="mt-4 text-xs leading-7 text-zinc-500">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Priorities */}
      <section className="border-y border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12">
          <div className="mb-14">
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-purple-400">
              / THE ROAD AHEAD
            </p>

            <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">
              THE WORK
              <br />
              <span className="text-zinc-500">STARTS HERE.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
              We know building an organization takes time. These are
              the priorities guiding our early development.
            </p>
          </div>

          <div className="border-t border-white/10">
            {PRIORITIES.map((priority) => (
              <article
                key={priority.number}
                className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[80px_1fr_1fr] md:items-center"
              >
                <span className="text-sm font-bold tracking-widest text-purple-400">
                  {priority.number}
                </span>

                <h3 className="text-lg font-black tracking-[-0.02em] md:text-xl">
                  {priority.title}
                </h3>

                <p className="max-w-md text-sm leading-7 text-zinc-500">
                  {priority.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden px-6 py-32 md:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.13] blur-[130px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-bold tracking-[0.3em] text-purple-400">
            / BE PART OF THE JOURNEY
          </p>

          <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
            THE FUTURE
            <br />
            <span className="text-zinc-500">IS BUILT TOGETHER.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-zinc-400">
            Whether you want to compete or simply connect with other
            gamers, there is a place for you in the KhoR community.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/recruitment"
              className="inline-flex items-center gap-3 bg-purple-600 px-7 py-5 text-xs font-black tracking-[0.18em] text-white transition hover:bg-purple-500"
            >
              EXPLORE RECRUITMENT
              <ArrowRight size={16} />
            </Link>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/20 bg-white/[0.03] px-7 py-5 text-xs font-black tracking-[0.18em] text-white transition hover:border-purple-500 hover:bg-purple-500/10"
            >
              JOIN KHOR HQ
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 py-12 lg:flex-row lg:items-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-[-0.1em]">
              K<span className="text-purple-500">.</span>
            </span>

            <span className="text-xs font-bold tracking-[0.22em]">
              KhoR
            </span>
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
                  item.href === "/about"
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
