"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/date-picker"
import { Heart, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DonatePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      router.push("/donation-success")
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">TrustBite</span>
          </div>
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
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-2xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Card>
            <CardHeader>
              <CardTitle>Donate Food</CardTitle>
              <CardDescription>
                Share your surplus food with those in need. All donations are verified and distributed responsibly.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="food-type">Food Type</Label>
                  <Select required>
                    <SelectTrigger id="food-type">
                      <SelectValue placeholder="Select food type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prepared">Prepared Meals</SelectItem>
                      <SelectItem value="produce">Fresh Produce</SelectItem>
                      <SelectItem value="canned">Canned/Packaged Goods</SelectItem>
                      <SelectItem value="bakery">Bakery Items</SelectItem>
                      <SelectItem value="dairy">Dairy Products</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="food-name">Food Description</Label>
                  <Input id="food-name" placeholder="E.g., Pasta with tomato sauce, 10 apples" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <div className="flex items-center gap-2">
                      <Input id="quantity" type="number" min="1" placeholder="Amount" required />
                      <Select defaultValue="servings">
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="servings">Servings</SelectItem>
                          <SelectItem value="kilograms">Kilograms</SelectItem>
                          <SelectItem value="items">Items</SelectItem>
                          <SelectItem value="boxes">Boxes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expiry-date">Expiration Date</Label>
                    <DatePicker />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickup-address">Pickup Address</Label>
                  <Input id="pickup-address" placeholder="Street address" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" required pattern="\d{6}" title="ZIP Code must be exactly 6 digits"/>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickup-instructions">Pickup Instructions</Label>
                  <Textarea
                    id="pickup-instructions"
                    placeholder="Provide any special instructions for pickup (e.g., 'Ring doorbell', 'Ask for manager')"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-name">Contact Name</Label>
                  <Input id="contact-name" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input id="contact-phone" type="tel" required pattern="\d{10}"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" required />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Donation"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">TrustBite</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 TrustBite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

