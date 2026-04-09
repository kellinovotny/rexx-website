"use client"

import { motion } from "framer-motion"

const recommendations = [
  { type: "Book", title: "Atomic Habits", from: "James", color: "bg-rexx-coral/20 text-rexx-coral" },
  { type: "Movie", title: "Past Lives", from: "Emily", color: "bg-rexx-blue/20 text-rexx-blue" },
  { type: "TV Show", title: "The Bear", from: "David", color: "bg-rexx-mint/30 text-foreground" },
  { type: "Restaurant", title: "Osteria Francescana", from: "Maria", color: "bg-rexx-orange/20 text-rexx-orange" },
  { type: "Book", title: "Project Hail Mary", from: "Chris", color: "bg-rexx-coral/20 text-rexx-coral" },
  { type: "Music", title: "Khruangbin", from: "Sophie", color: "bg-rexx-blue/20 text-rexx-blue" },
  { type: "Podcast", title: "Huberman Lab", from: "Tom", color: "bg-rexx-mint/30 text-foreground" },
  { type: "Movie", title: "Oppenheimer", from: "Lisa", color: "bg-rexx-orange/20 text-rexx-orange" },
]

function RecommendationCard({ type, title, from, color }: { type: string; title: string; from: string; color: string }) {
  return (
    <motion.div
      className="flex-shrink-0 w-64 p-5 bg-card rounded-2xl shadow-sm border border-border/50 cursor-pointer"
      whileHover={{ 
        y: -4, 
        boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-start gap-4">
        <div className={`px-3 py-1.5 rounded-lg text-xs font-medium ${color}`}>
          {type}
        </div>
      </div>
      <h3 className="mt-3 font-semibold text-foreground text-lg">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">From {from}</p>
    </motion.div>
  )
}

export function SocialProof() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="relative">
        {/* First row - scrolling left */}
        <motion.div
          className="flex gap-6 mb-6"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...recommendations, ...recommendations, ...recommendations].map((rec, i) => (
            <RecommendationCard key={i} {...rec} />
          ))}
        </motion.div>
        
        {/* Second row - scrolling right */}
        <motion.div
          className="flex gap-6"
          animate={{ x: [-1920, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {[...recommendations.slice(4), ...recommendations.slice(0, 4), ...recommendations, ...recommendations].map((rec, i) => (
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
