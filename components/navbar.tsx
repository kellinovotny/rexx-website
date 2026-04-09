"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between bg-card/80 backdrop-blur-xl rounded-2xl px-6 py-3 border border-border/50 shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/rexx-logo.svg" 
              alt="Rexx" 
              width={120} 
              height={50} 
              className="h-10 w-auto"
            />
          </Link>

          {/* CTA */}
          <Button 
            size="sm"
            className="rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
          >
            <Apple className="mr-1.5 h-4 w-4" />
            <span className="hidden sm:inline">Download</span>
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
