"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ParallaxHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div ref={ref} className="relative h-[60vh] overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src="/hero2.jpg?height=800&width=1600"
          alt="Food distribution"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-4 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black drop-shadow-lg">Fighting Food Waste Together</h1>
          <p className="text-xl md:text-2xl text-black/90 max-w-2xl mx-auto drop-shadow">
            Join our mission to create a sustainable future
          </p>
        </motion.div>
      </div>
    </div>
  )
}

