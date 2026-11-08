
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Crown,
  Shield,
  Trophy,
  Users,
  Target,
  Palette,
  Headphones,
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

const FUTURE_ROLES = [
  {
    number: "01",
    title: "COMMUNITY MANAGER",
    department: "COMMUNITY",
    description:
      "Help develop KhoR HQ, organize community activities, support members, and build an environment where everyone feels welcome.",
    icon: Users,
  },
  {
    number: "02",
    title: "DISCORD MODERATOR",
    department: "COMMUNITY",
    description:
      "Help maintain KhoR HQ, moderate conversations, assist members, and keep the community organized and respectful.",
    icon: Shield,
  },
  {
    number: "03",
    title: "VALORANT TEAM MANAGER",
    department: "COMPETITIVE",
    description:
      "Support the competitive roster through scheduling, team coordination, player communication, and day-to-day operations.",
    icon: Trophy,
  },
  {
    number: "04",
    title: "CONTENT & MEDIA",
    department: "MEDIA",
    description:
      "Develop KhoR's visual identity through graphics, video production, social media, and competitive content.",
    icon: Palette,
  },
  {
    number: "05",
    title: "COMPETITIVE COACH",
    department: "COMPETITIVE",
    description:
      "Help players improve through match analysis, strategic preparation, communication, and structured practice.",
    icon: Target,
  },
  {
    number: "06",
    title: "EVENT COORDINATOR",
    department: "OPERATIONS",
    description:
      "Help organize community events, competitive activities, and opportunities for players to connect.",
    icon: Headphones,
  },
];

const RESPONSIBILITIES = [
  "Organization Direction",
  "Brand Development",
  "Community Development",
  "Competitive Operations",
];

export default function StaffPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* NAVIGATION */}
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

          <nav className="hidden items-center gap-6 text-[10px] font-semibold tracking-[0.16em] text-zinc-400 lg:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.href === "/staff"
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

      {/* HERO */}
      <section className="relative flex min-h-[650px] items-center border-b border-white/[0.08] pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-purple-700/[0.14] blur-[150px]" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-900/[0.12] blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-28 md:px-12">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-purple-400">
              THE PEOPLE BEHIND KHOR
            </span>
          </div>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl md:text-8xl lg:text-[112px]">
            BUILT BY
            <br />
            <span className="text-zinc-500">PEOPLE.</span>
            <br />
            <span className="text-purple-400">
              DRIVEN BY VISION.
            </span>
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              Behind every organization is a vision and the people who
              bring it to life. Discover the founder behind KhoR and
              the opportunities to help shape its future.
            </p>

            <a
              href="#leadership"
              className="group flex w-fit items-center gap-4 border-b border-purple-500 pb-3 text-[11px] font-bold tracking-[0.2em] transition hover:text-purple-300"
            >
              MEET THE FOUNDER
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-24 grid max-w-3xl grid-cols-3 border-t border-white/10 pt-6">
            <div>
              <p className="text-2xl font-black">01</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-zinc-500">
                FOUNDER
              </p>
            </div>

            <div>
              <p className="text-2xl font-black">00</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-zinc-500">
                STAFF MEMBERS
              </p>
            </div>

            <div>
              <p className="text-2xl font-black">06</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-zinc-500">
                FUTURE ROLES
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section
        id="leadership"
        className="mx-auto max-w-[1440px] px-6 py-28 md:px-12"
      >
        <div className="mb-14">
          <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-purple-400">
            / ORGANIZATION LEADERSHIP
          </p>

          <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">
            THE <span className="text-zinc-500">FOUNDER.</span>
          </h2>
        </div>

        <article className="grid overflow-hidden border border-white/10 bg-[#101010] md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#141019] md:min-h-[500px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.24),transparent_65%)]" />

            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative flex h-40 w-40 items-center justify-center">
              <Image
                src="/branding/khor-emblem.png"
                alt="KhoR emblem"
                width={256}
                height={256}
                className="h-full w-full object-contain"
              />
            </div>

            <span className="absolute bottom-7 left-7 text-[10px] font-bold tracking-[0.25em] text-zinc-500">
              KHOR / ESTABLISHED 2026
            </span>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-14">
            <div className="flex items-center gap-3">
              <Crown size={17} className="text-purple-400" />

              <span className="text-[10px] font-bold tracking-[0.25em] text-purple-400">
                FOUNDER & OWNER
              </span>
            </div>

            <h3 className="mt-7 text-5xl font-black tracking-[-0.07em] md:text-7xl">
              BRIAN
              <br />
              <span className="text-zinc-500">NGUYEN.</span>
            </h3>

            <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-400">
              The founder and owner of KhoR, responsible for establishing
              the organization's vision, identity, and direction. Building
              a gaming organization where players can connect, compete,
              improve, and create something meaningful together.
            </p>

            <div className="mt-9 border-t border-white/10 pt-7">
              <p className="text-[9px] font-bold tracking-[0.25em] text-zinc-600">
                AREAS OF RESPONSIBILITY
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 text-xs text-zinc-300 sm:grid-cols-2">
                {RESPONSIBILITIES.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-purple-500/60 bg-purple-600 px-6 py-4 text-[10px] font-bold tracking-[0.18em] text-white transition hover:bg-purple-500"
              >
                CONNECT WITH KHOR
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* ORGANIZATION STRUCTURE */}
      <section className="border-y border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12">
          <div className="mb-14">
            <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-purple-400">
              / BUILDING THE ORGANIZATION
            </p>

            <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">
              THE NEXT
              <br />
              <span className="text-zinc-500">GENERATION.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
              KhoR is in its founding stage. As the organization grows,
              we want to bring together people who share our ambition
              and are ready to contribute. These are future organizational
              roles, not currently filled positions.
            </p>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {FUTURE_ROLES.map((role) => {
              const Icon = role.icon;

              return (
                <article
                  key={role.number}
                  className="group bg-[#0d0d0d] p-8 transition hover:bg-[#141019] md:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-zinc-600">
                      POSITION / {role.number}
                    </span>

                    <Icon
                      size={21}
                      className="text-purple-400"
                      strokeWidth={1.4}
                    />
                  </div>

                  <p className="mt-12 text-[9px] font-bold tracking-[0.25em] text-purple-400">
                    {role.department}
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                    {role.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
                    {role.description}
                  </p>

                  <div className="mt-9 flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-zinc-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    FUTURE OPPORTUNITY
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden px-6 py-32 md:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.13] blur-[130px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-bold tracking-[0.3em] text-purple-400">
            / BE PART OF THE JOURNEY
          </p>

          <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
            GREAT THINGS
            <br />
            <span className="text-zinc-500">
              START WITH PEOPLE.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-zinc-400">
            Every organization starts with an idea. Help us turn that
            idea into something bigger. Join the KhoR community and
            be part of what comes next.
          </p>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-10 inline-flex items-center gap-8 border border-purple-500 bg-[#111014] px-7 py-5 text-xs font-black tracking-[0.2em] text-white transition hover:bg-purple-600"
          >
            JOIN KHOR HQ
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
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
                  item.href === "/staff"
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
