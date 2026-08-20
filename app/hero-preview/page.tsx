import { HeroFlat, PAPER, NAVY } from "@/components/hero-flat"

export const metadata = { title: "Hero preview · Rexx" }

const LABEL =
  "font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500 px-6 py-3 bg-neutral-100 border-b border-neutral-200"

export default function HeroPreview() {
  return (
    <main className="min-h-screen bg-white">
      <p className={LABEL}>Direction A · warm paper #FBF7F0 + orange #E07A00</p>
      <HeroFlat theme={PAPER} />

      <p className={LABEL}>Direction C · deep navy #131A2A + orange #F0A24B</p>
      <HeroFlat theme={NAVY} />
    </main>
  )
}
