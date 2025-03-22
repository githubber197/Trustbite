"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "TrustBite has transformed how we handle surplus food. Instead of waste, we're now helping our community.",
    author: "Sarah Johnson",
    role: "Restaurant Owner",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    text: "The platform makes it incredibly easy to volunteer and contribute to reducing food waste.",
    author: "Michael Chen",
    role: "Regular Volunteer",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    text: "Thanks to TrustBite, we've been able to help thousands of families in our community.",
    author: "Lisa Rodriguez",
    role: "Food Bank Director",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => paginate(-1)}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => paginate(1)}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className="absolute w-full"
        >
          <Card className="mx-auto max-w-3xl bg-primary/5 border-none">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <Quote className="h-8 w-8 text-primary" />
                <p className="text-lg md:text-xl italic">{testimonials[currentIndex].text}</p>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-primary" : "bg-primary/20"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

