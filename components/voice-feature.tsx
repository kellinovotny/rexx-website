"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function VoiceFeature() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 lg:max-w-lg lg:flex-shrink-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Just tell Rexx.
            </h2>
            
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Add a recommendation with your voice. No typing required.
            </p>
            
            <motion.div
              className="mt-8 p-6 bg-card rounded-2xl border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-muted-foreground italic">
                {'"My friend Jen told me about a great book called Of Mice and Men"'}
              </p>
              <p className="mt-3 text-sm text-muted-foreground/70">
                Rexx automatically extracts the title, category, and who recommended it.
              </p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://apps.apple.com/us/app/rexx-save-share-ideas/id6751042420"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition duration-300 ease-out hover:opacity-90 hover:-translate-y-0.5"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* iPhone Mockup with Voice UI */}
          <motion.div
            className="relative flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Animated pulsing rings behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-rexx-blue/20"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-rexx-blue/15"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-rexx-blue/10"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0, 0.15],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 1,
                  }}
                />
              </div>

              {/* Phone frame */}
              <div className="relative w-[280px] md:w-[300px] h-[560px] md:h-[600px] bg-foreground rounded-[3rem] p-3 shadow-2xl z-10">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                  {/* Voice listening screenshot */}
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-03-16%20at%2008.22.44-J7lPYmO1K6p8vLJdMoZIu2gwmTh4hl.png"
                    alt="Tell Rexx voice input screen showing listening state with microphone"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
