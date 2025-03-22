"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Apple, Users, Leaf, Clock } from "lucide-react"

export function ImpactMetrics() {
  const [progress, setProgress] = useState({
    food: 0,
    people: 0,
    carbon: 0,
    hours: 0,
  })

  useEffect(() => {
    // Simulate counting up animation
    const timer = setTimeout(() => {
      setProgress({
        food: 100,
        people: 100,
        carbon: 100,
        hours: 100,
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Our Impact</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Together, we're making a difference in our community and environment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Apple className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold">125,000</h3>
                  <p className="text-sm text-muted-foreground">Pounds of Food Rescued</p>
                </div>
                <Progress value={progress.food} className="h-2 w-full" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold">42,500</h3>
                  <p className="text-sm text-muted-foreground">People Served</p>
                </div>
                <Progress value={progress.people} className="h-2 w-full" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold">75</h3>
                  <p className="text-sm text-muted-foreground">Tons of CO₂ Prevented</p>
                </div>
                <Progress value={progress.carbon} className="h-2 w-full" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold">8,750</h3>
                  <p className="text-sm text-muted-foreground">Volunteer Hours</p>
                </div>
                <Progress value={progress.hours} className="h-2 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
            <span className="text-muted-foreground">Last updated: March 2025</span>
          </div>
        </div>
      </div>
    </section>
  )
}

