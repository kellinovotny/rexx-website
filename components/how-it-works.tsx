"use client"

import { motion } from "framer-motion"

const steps = [
  {
    title: "Save it",
    description: "Quickly capture any recommendation — books, movies, restaurants, podcasts, anything.",
    number: "01",
    color: "from-rexx-blue/20 to-rexx-blue/5",
  },
  {
    title: "Find it",
    description: "Search, filter, and rediscover recommendations when you need them most.",
    number: "02",
    color: "from-rexx-orange/20 to-rexx-orange/5",
  },
  {
    title: "Share it",
    description: "Pass along your favorites to friends with a simple tap.",
    number: "03",
    color: "from-rexx-coral/20 to-rexx-coral/5",
  },
  {
    title: "Keep it private",
    description: "Your recommendations are yours alone. No social feeds, no public profiles.",
    number: "04",
    color: "from-rexx-mint/30 to-rexx-mint/10",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple by design. Powerful when you need it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="group"
            >
              <motion.div
                className={`relative h-full p-8 pt-24 bg-gradient-to-br ${step.color} rounded-3xl border border-border/30 bg-card overflow-hidden`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Large prominent number */}
                <span className="absolute left-6 top-6 text-8xl md:text-9xl font-black text-foreground/10 select-none leading-none tracking-tighter">
                  {step.number}
                </span>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
