"use client"

import { motion } from "framer-motion"
import { Users, Mic, Cloud } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Trusted Sources",
    description: "Recommendations from friends and family, not faceless algorithms. Real people, real taste.",
    color: "bg-rexx-blue/10 text-rexx-blue",
  },
  {
    icon: Mic,
    title: "Add by Voice",
    description: "Just say it. Rexx listens and captures the recommendation instantly, even mid-conversation.",
    color: "bg-rexx-orange/10 text-rexx-orange",
  },
  {
    icon: Cloud,
    title: "Synced Everywhere",
    description: "Your recommendations live in the cloud, accessible on all your devices.",
    color: "bg-rexx-coral/10 text-rexx-coral",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function WhyRexx() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            People over algorithms.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your friends know you better than any algorithm ever could.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-8 bg-card rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <motion.div
                className={`inline-flex p-4 rounded-2xl ${feature.color} mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <feature.icon className="w-7 h-7" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rexx-blue/5 via-transparent to-rexx-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
