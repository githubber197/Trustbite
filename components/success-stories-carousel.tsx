"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stories = [
  {
    id: 1,
    title: "Local Restaurant's Impact",
    description: "How a small bistro saved 5000 meals from waste",
    image: "/placeholder.svg?height=400&width=600",
    stats: "5,000 meals saved",
  },
  {
    id: 2,
    title: "Community Garden Success",
    description: "Urban farming initiative feeds 200 families weekly",
    image: "/placeholder.svg?height=400&width=600",
    stats: "200 families helped",
  },
  {
    id: 3,
    title: "School Program Victory",
    description: "Reducing cafeteria waste by 75%",
    image: "/placeholder.svg?height=400&width=600",
    stats: "75% waste reduction",
  },
]

export function SuccessStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((current) => (current + 1) % stories.length)
  const prev = () => setCurrentIndex((current) => (current - 1 + stories.length) % stories.length)

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
        <Button variant="ghost" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm" onClick={prev}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm" onClick={next}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="relative h-[400px] md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-48 md:h-full">
                    <img
                      src={stories[currentIndex].image || "/placeholder.svg"}
                      alt={stories[currentIndex].title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold mb-4">{stories[currentIndex].title}</h3>
                      <p className="text-muted-foreground mb-6">{stories[currentIndex].description}</p>
                      <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5">
                        <span className="text-primary font-medium">{stories[currentIndex].stats}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-primary" : "bg-primary/20"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

