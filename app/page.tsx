"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Utensils, Users } from "lucide-react"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { ImpactMetrics } from "@/components/impact-metrics"
import { CtaBanner } from "@/components/cta-banner"
import { AnimatedLogo } from "@/components/animated-logo"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxHero } from "@/components/parallax-hero"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <AnimatedLogo />
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/donate" className="text-sm font-medium">
              Donate Food
            </Link>
            <Link href="/volunteer" className="text-sm font-medium">
              Volunteer
            </Link>
            <Link href="/community-services" className="text-sm font-medium">
              Community Services
            </Link>
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </nav>
        </div>
      </header>

      <AnnouncementBanner
        message="Join our upcoming food drive this weekend! We need volunteers and donations."
        ctaText="Learn More"
        ctaLink="/volunteer"
      />

      <main className="flex-1">
        <ParallaxHero />

        <AnimatedSection className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Donate Surplus Food</h3>
                  <p className="text-muted-foreground">
                    Restaurants, grocery stores, and individuals can donate surplus food that would otherwise go to
                    waste.
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Volunteer Your Time</h3>
                  <p className="text-muted-foreground">
                    Help with food collection, transportation, distribution, or administrative tasks.
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <img src="/placeholder.svg?height=24&width=24" alt="Impact icon" className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Make an Impact</h3>
                  <p className="text-muted-foreground">
                    Your contributions help reduce food waste and support those facing food insecurity in your
                    community.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <ImpactMetrics />
        </AnimatedSection>

        <AnimatedSection className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How TrustBite Works</h2>
                <p className="text-muted-foreground">
                  Our platform connects food donors with volunteers to ensure surplus food reaches those who need it
                  most.
                </p>
                <ul className="space-y-2">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="rounded-full bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-sm">
                      1
                    </span>
                    <span>Donors list available food with details and pickup information</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <span className="rounded-full bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-sm">
                      2
                    </span>
                    <span>Volunteers sign up to collect and distribute food</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <span className="rounded-full bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-sm">
                      3
                    </span>
                    <span>Food is delivered to community centers, shelters, and individuals in need</span>
                  </motion.li>
                </ul>
                <Button asChild>
                  <Link href="/community-services">Our Services</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden">
                <motion.img
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src="/placeholder.svg?height=400&width=600"
                  alt="Food redistribution process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-12 md:py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">What People Say</h2>
              <p className="text-muted-foreground">Hear from our community members and partners</p>
            </div>
            <TestimonialCarousel />
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Success Stories</h2>
              <p className="text-muted-foreground">Real impact in our community</p>
            </div>
            <SuccessStoriesCarousel />
          </div>
        </AnimatedSection>

        <CtaBanner
          title="Join Our Mission Today"
          description="Help us create a more sustainable food system and support those in need."
          primaryCta="Get Involved"
          primaryCtaLink="/volunteer"
          secondaryCta="Learn More"
          secondaryCtaLink="/community-services"
        />
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <AnimatedLogo />
          <p className="text-sm text-muted-foreground">© 2025 TrustBite. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

