"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"

export function Hero() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-rexx-blue/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-rexx-orange/15 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-rexx-mint/20 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="lg:max-w-lg lg:flex-shrink-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              Never forget a recommendation.
            </h1>
            
            <p className="mt-6 text-xl text-muted-foreground max-w-lg leading-relaxed">
              Books, movies, restaurants, music, and more. From the people you trust.
            </p>
            
            <motion.div
              className="mt-10 flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

              <div className="hidden lg:flex items-center gap-4">
                <div className="h-12 w-px bg-border" />
                <div className="flex flex-col items-center gap-1.5">
                  <div className="p-2 bg-card rounded-lg border border-border/50 shadow-sm">
                    <QRCodeSVG
                      value="https://apps.apple.com/us/app/rexx-save-share-ideas/id6751042420"
                      size={56}
                      bgColor="transparent"
                      fgColor="#1a1a1a"
                      level="M"
                      marginSize={2}
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground tracking-wider font-medium uppercase">
                    Scan to install
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* iPhone Mockup */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Phone frame */}
            <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                {/* App screenshot */}
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-03-16%20at%2008.23.14-c1fA8EXhMilP1tIN79abN6QAlSgeY1.png"
                  alt="Rexx app home screen showing categories and recommendations"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
