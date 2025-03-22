"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Calendar, Clock, Filter } from "lucide-react"

// Mock data for donations
const donations = [
  {
    id: 1,
    type: "Prepared Meals",
    description: "Pasta with tomato sauce",
    quantity: "10 servings",
    expiry: "2025-03-05",
    location: "123 Main St, Anytown",
    distance: "0.8 miles",
    time: "Posted 2 hours ago",
  },
  {
    id: 2,
    type: "Fresh Produce",
    description: "Assorted vegetables",
    quantity: "15 pounds",
    expiry: "2025-03-04",
    location: "456 Oak Ave, Anytown",
    distance: "1.2 miles",
    time: "Posted 5 hours ago",
  },
  {
    id: 3,
    type: "Bakery Items",
    description: "Bread and pastries",
    quantity: "20 items",
    expiry: "2025-03-03",
    location: "789 Pine St, Anytown",
    distance: "2.5 miles",
    time: "Posted 1 day ago",
  },
  {
    id: 4,
    type: "Canned/Packaged Goods",
    description: "Canned soups and beans",
    quantity: "12 items",
    expiry: "2025-06-15",
    location: "101 Elm St, Anytown",
    distance: "3.1 miles",
    time: "Posted 2 days ago",
  },
]

// Mock data for volunteer opportunities
const opportunities = [
  {
    id: 1,
    title: "Food Pickup Driver",
    description: "Pick up donated food from local restaurants and deliver to our distribution center",
    location: "Downtown Anytown",
    date: "March 5, 2025",
    time: "5:00 PM - 7:00 PM",
    volunteers: "2/3 volunteers needed",
  },
  {
    id: 2,
    title: "Food Sorting",
    description: "Help sort and package donated food items for distribution",
    location: "TrustBite Distribution Center",
    date: "March 6, 2025",
    time: "10:00 AM - 1:00 PM",
    volunteers: "4/8 volunteers needed",
  },
  {
    id: 3,
    title: "Community Distribution",
    description: "Help distribute food packages to community members at local center",
    location: "Anytown Community Center",
    date: "March 7, 2025",
    time: "9:00 AM - 12:00 PM",
    volunteers: "3/6 volunteers needed",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("donations")

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
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Find food donations and volunteer opportunities</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              {activeTab === "donations" ? (
                <Button asChild>
                  <Link href="/donate">Donate Food</Link>
                </Button>
              ) : (
                <Button asChild>
                  <Link href="/volunteer">Volunteer</Link>
                </Button>
              )}
            </div>
          </div>

          <Tabs defaultValue="donations" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="donations">Available Donations</TabsTrigger>
              <TabsTrigger value="opportunities">Volunteer Opportunities</TabsTrigger>
            </TabsList>
            <TabsContent value="donations" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {donations.map((donation) => (
                  <Card key={donation.id}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <Badge>{donation.type}</Badge>
                        <span className="text-xs text-muted-foreground">{donation.time}</span>
                      </div>
                      <CardTitle className="mt-2">{donation.description}</CardTitle>
                      <CardDescription>{donation.quantity}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Expires: {donation.expiry}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{donation.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{donation.distance} away</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Claim Donation</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="opportunities" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {opportunities.map((opportunity) => (
                  <Card key={opportunity.id}>
                    <CardHeader>
                      <CardTitle>{opportunity.title}</CardTitle>
                      <CardDescription>{opportunity.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.time}</span>
                        </div>
                        <Badge variant="outline" className="w-fit mt-1">
                          {opportunity.volunteers}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sign Up</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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

