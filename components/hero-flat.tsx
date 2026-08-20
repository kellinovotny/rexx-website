"use client"

import Image from "next/image"

const APP_STORE_URL =
  "https://apps.apple.com/us/app/rexx-save-share-ideas/id6751042420"

// The eight real covers in /public/recs. Cover art is the hero's texture,
// which is the one decorative asset no competitor can copy.
const COVERS = [
  { src: "/recs/project-hail-mary.jpg", alt: "Project Hail Mary" },
  { src: "/recs/severance.jpg", alt: "Severance" },
  { src: "/recs/khruangbin.jpg", alt: "Khruangbin" },
  { src: "/recs/the-bear.jpg", alt: "The Bear" },
  { src: "/recs/past-lives.jpg", alt: "Past Lives" },
  { src: "/recs/atomic-habits.jpg", alt: "Atomic Habits" },
  { src: "/recs/huberman-lab.jpg", alt: "Huberman Lab" },
  { src: "/recs/oppenheimer.jpg", alt: "Oppenheimer" },
]

export type HeroTheme = {
  name: string
  bg: string
  ink: string
  muted: string
  accent: string
  eyebrow: string
  onAccent: string
  rule: string
  badgeRing: string
  phoneFrame: string
}

export const PAPER: HeroTheme = {
  name: "A · warm paper",
  bg: "#FBF7F0",
  ink: "#1A1613",
  muted: "#5C544C",
  accent: "#E07A00",
  eyebrow: "#B25E00",
  onAccent: "#2B1400",
  rule: "rgba(26,22,19,0.10)",
  badgeRing: "transparent",
  phoneFrame: "#1A1613",
}

export const NAVY: HeroTheme = {
  name: "C · deep navy",
  bg: "#131A2A",
  ink: "#F5F2ED",
  muted: "#A8AFBD",
  accent: "#F0A24B",
  eyebrow: "#F0A24B",
  onAccent: "#3A2000",
  rule: "rgba(245,242,237,0.12)",
  badgeRing: "rgba(245,242,237,0.28)",
  phoneFrame: "#070B14",
}

export function HeroFlat({ theme }: { theme: HeroTheme }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: theme.bg }}
    >
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-0 md:pt-28">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-xl lg:max-w-2xl lg:pt-6">
            <p
              className="font-mono text-[11px] uppercase tracking-[0.16em]"
              style={{ color: theme.eyebrow }}
            >
              Free on the App Store · iOS
            </p>

            <h1
              className="mt-7 text-[3.25rem] font-extrabold leading-[0.94] tracking-[-0.03em] md:text-[4rem] lg:text-[4.5rem]"
              style={{ color: theme.ink }}
            >
              Say it out loud.
              <br />
              <span style={{ color: theme.accent }}>Never lose it.</span>
            </h1>

            <p
              className="mt-7 max-w-lg text-lg leading-relaxed md:text-xl"
              style={{ color: theme.muted }}
            >
              Tell Rexx what your friend just recommended, mid-conversation.
              It&rsquo;s saved with the cover art before you&rsquo;ve changed the
              subject.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:opacity-90"
                style={{ boxShadow: `inset 0 0 0 1px ${theme.badgeRing}` }}
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>

              <p
                className="font-mono text-[13px] leading-relaxed"
                style={{ color: theme.muted }}
              >
                <span style={{ color: theme.accent }}>Free.</span> No account to
                make.
              </p>
            </div>
          </div>

          <div className="relative w-[268px] shrink-0 md:w-[300px]">
            <div
              className="rounded-[2.75rem] p-3"
              style={{ backgroundColor: theme.phoneFrame }}
            >
              <div className="overflow-hidden rounded-[2.25rem]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-03-16%20at%2008.23.14-c1fA8EXhMilP1tIN79abN6QAlSgeY1.png"
                  alt="Rexx home screen showing saved recommendations by category"
                  className="h-[540px] w-full object-cover object-top md:h-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cover shelf: real saved recs, bleeding off both edges. */}
      <div className="mt-14 md:mt-20" style={{ borderTop: `1px solid ${theme.rule}` }}>
        <div className="mx-auto max-w-6xl px-6">
          <p
            className="pt-6 font-mono text-[11px] uppercase tracking-[0.16em]"
            style={{ color: theme.muted }}
          >
            Recently saved
          </p>
        </div>
        <div className="flex gap-4 overflow-hidden px-6 pt-5 pb-14">
          {COVERS.map((c) => (
            <div
              key={c.src}
              className="h-[104px] w-[104px] shrink-0 overflow-hidden rounded-xl md:h-[124px] md:w-[124px]"
              style={{ boxShadow: `inset 0 0 0 1px ${theme.rule}` }}
            >
              <img
                src={c.src}
                alt={c.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
