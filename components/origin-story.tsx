"use client"

import { motion } from "framer-motion"

export function OriginStory() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-card rounded-3xl p-10 md:p-14 border border-border/50 shadow-sm">
            {/* Decorative quote mark - overlaying top-left corner */}
            <motion.span 
              className="absolute -top-6 -left-4 md:-top-8 md:-left-6 text-8xl md:text-9xl text-rexx-blue/20 font-serif select-none leading-none"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              &ldquo;
            </motion.span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why I built Rexx
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I had an idea for this app three years ago. It came from my own frustration. Every time a friend told me about a book or a show, I&apos;d promise to check it out, then forget by the next week. I tried notes apps. I tried screenshots. Nothing stuck.
              </p>
              
              <p>
                Last November, I started building Rexx with Claude Code as my engineering partner. It shipped to the App Store in February.
              </p>
              
              <p>
                Rexx is for people who still trust the recommendations that come from real humans. Not algorithms.
              </p>
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-lg font-medium text-foreground">– Kelli</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
