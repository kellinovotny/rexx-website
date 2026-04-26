import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { WhyRexx } from "@/components/why-rexx"
import { VoiceFeature } from "@/components/voice-feature"
import { HowItWorks } from "@/components/how-it-works"
import { OriginStory } from "@/components/origin-story"
import { Reviews } from "@/components/reviews"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <WhyRexx />
      <VoiceFeature />
      <HowItWorks />
      <OriginStory />
      <Reviews />
      <FinalCTA />
      <Footer />
    </main>
  )
}
