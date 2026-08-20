import { HeroFlat, PAPER } from "@/components/hero-flat"

export const metadata = { title: "Hero A · warm paper" }

export default function HeroA() {
  return (
    <main>
      <HeroFlat theme={PAPER} />
    </main>
  )
}
