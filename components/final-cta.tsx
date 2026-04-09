"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-rexx-blue/10 via-rexx-orange/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Ready to remember everything?
          </h2>
          
          <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto">
            Join thousands who never lose a recommendation again.
          </p>
          
          <motion.div 
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="https://apps.apple.com/app/rexx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-all duration-300 hover:-translate-y-1 transform"
            >
              <Image 
                src="/app-store-badge.svg" 
                alt="Download on the App Store" 
                width={200} 
                height={67}
                className="h-16 w-auto"
              />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rexx-mint" />
              Free to download
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rexx-blue" />
              No account required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rexx-orange" />
              Privacy-first
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
