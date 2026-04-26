"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    title: "Great app",
    body: "I absolutely love this app. It's become my go-to place for keeping track of everything I want to read and watch. Being able to save books, movies, and TV shows all in one spot makes life so much easier, especially when I come across recommendations and don't want to forget them.",
    author: "Chicken927",
    date: "6d ago",
  },
  {
    title: "Such an awesome app!",
    body: "I've been using Rexx and it's quickly become one of my favorite apps. It's such a simple but powerful idea, having one place to store all the books, movies, and shows you want to remember. No more forgetting titles or scrambling to recall that one great recommendation.",
    author: "Titanleeking",
    date: "6d ago",
  },
  {
    title: "Start remembering and organizing",
    body: "Rexx is a fantastic app that allows you to save and categorize all your recommendations. It also lets you customize and build your own categories. It's intuitive and very easy to navigate.",
    author: "Izzygeraci",
    date: "Feb 20",
  },
]

function ReviewCard({
  title,
  body,
  author,
  date,
  index,
}: {
  title: string
  body: string
  author: string
  date: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col p-7 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-rexx-orange text-rexx-orange" />
        ))}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 flex-1">
        {body}
      </p>
      <div className="pt-4 border-t border-border/50">
        <p className="text-sm font-medium text-foreground">{author}</p>
        <p className="text-xs text-muted-foreground/70 mt-0.5">{date}</p>
      </div>
    </motion.div>
  )
}

export function Reviews() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-rexx-orange text-rexx-orange"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              5.0 from 28 reviews on the App Store
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            What people are saying.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
