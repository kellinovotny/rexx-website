"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type Recommendation = {
  type: string
  title: string
  from: string
  color: string
  image: string
}

const recommendations: Recommendation[] = [
  { type: "Book", title: "Atomic Habits", from: "James", color: "bg-rexx-coral/20 text-rexx-coral", image: "/recs/atomic-habits.jpg" },
  { type: "Movie", title: "Past Lives", from: "Emily", color: "bg-rexx-blue/20 text-rexx-blue", image: "/recs/past-lives.jpg" },
  { type: "TV Show", title: "The Bear", from: "David", color: "bg-rexx-mint/30 text-foreground", image: "/recs/the-bear.jpg" },
  { type: "TV Show", title: "Severance", from: "Maria", color: "bg-rexx-orange/20 text-rexx-orange", image: "/recs/severance.jpg" },
  { type: "Book", title: "Project Hail Mary", from: "Chris", color: "bg-rexx-coral/20 text-rexx-coral", image: "/recs/project-hail-mary.jpg" },
  { type: "Music", title: "Khruangbin", from: "Sophie", color: "bg-rexx-blue/20 text-rexx-blue", image: "/recs/khruangbin.jpg" },
  { type: "Podcast", title: "Huberman Lab", from: "Tom", color: "bg-rexx-mint/30 text-foreground", image: "/recs/huberman-lab.jpg" },
  { type: "Movie", title: "Oppenheimer", from: "Lisa", color: "bg-rexx-orange/20 text-rexx-orange", image: "/recs/oppenheimer.jpg" },
]

// One full set: 8 cards (w-72 = 288px) + 8 gaps (gap-6 = 24px)
const SET_WIDTH = recommendations.length * (288 + 24)

function RecommendationCard({ type, title, from, color, image }: Recommendation) {
  return (
    <motion.div
      className="flex-shrink-0 w-72 p-5 bg-card rounded-2xl shadow-sm border border-border/50 cursor-pointer flex items-center gap-4"
      whileHover={{
        y: -4,
        boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="relative w-16 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill sizes="64px" className="object-cover" />
      </div>
      <div className="min-w-0">
        <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-medium ${color}`}>
          {type}
        </span>
        <h3 className="mt-2 font-semibold text-foreground text-base leading-snug">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">From {from}</p>
      </div>
    </motion.div>
  )
}

export function SocialProof() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -SET_WIDTH] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...recommendations, ...recommendations, ...recommendations].map((rec, i) => (
            <RecommendationCard key={i} {...rec} />
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
