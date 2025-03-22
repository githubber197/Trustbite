"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { AnimatedLogo } from "@/components/animated-logo"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Heart, User, Settings, LogOut, Calendar, MapPin, Award, Edit, Camera, Save } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data
  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    bio: "Passionate about reducing food waste and helping my community. I volunteer weekly at local food banks and enjoy connecting restaurants with those in need.",
    location: "San Francisco, CA",
    joinDate: "March 2025",
    profileImage: "/placeholder.svg?height=200&width=200",
    notifications: {
      email: true,
      app: true,
      marketing: false,
    },
  })

  // Mock activity data
  const activities = [
    {
      id: 1,
      type: "donation",
      title: "Donated Fresh Produce",
      date: "April 15, 2025",
      description: "10 lbs of vegetables from local farmer's market",
      status: "completed",
    },
    {
      id: 2,
      type: "volunteer",
      title: "Food Sorting Volunteer",
      date: "April 10, 2025",
      description: "Helped sort and package donations at the distribution center",
      status: "completed",
    },
    {
      id: 3,
      type: "donation",
      title: "Bakery Items Donation",
      date: "April 5, 2025",
      description: "Bread and pastries from Downtown Bakery",
      status: "completed",
    },
    {
      id: 4,
      type: "volunteer",
      title: "Delivery Driver",
      date: "April 20, 2025",
      description: "Scheduled to deliver food packages to elderly residents",
      status: "upcoming",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNotificationChange = (key: string, checked: boolean) => {
    setUserData((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: checked,
      },
    }))
  }

  const handleSaveProfile = async () => {
    setIsSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSaving(false)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <AnimatedLogo />
          </Link>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="grid gap-8 md:grid-cols-[250px_1fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={userData.profileImage} alt={userData.name} />
                      <AvatarFallback>
                        {userData.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                      >
                        <Camera className="h-4 w-4" />
                        <span className="sr-only">Change profile picture</span>
                      </Button>
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{userData.name}</h2>
                    <p className="text-sm text-muted-foreground">{userData.email}</p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {userData.joinDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{userData.location}</span>
                  </div>
                  <div className="w-full pt-4">
                    <Button
                      variant={isEditing ? "outline" : "default"}
                      className="w-full"
                      onClick={() => (isEditing ? setIsEditing(false) : setIsEditing(true))}
                    >
                      {isEditing ? (
                        <>Cancel</>
                      ) : (
                        <>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Profile
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 space-y-2">
              <Button
                variant={activeTab === "profile" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("profile")}
              >
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
              <Button
                variant={activeTab === "activity" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("activity")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Activity
              </Button>
              <Button
                variant={activeTab === "settings" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs value={activeTab} className="m-0">
              <TabsContent value="profile" className="m-0" forceMount>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Profile Information</span>
                      {isEditing && (
                        <Button onClick={handleSaveProfile} disabled={isSaving}>
                          {isSaving ? (
                            <LoadingSpinner />
                          ) : (
                            <>
                              <Save className="mr-2 h-4 w-4" />
                              Save Changes
                            </>
                          )}
                        </Button>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {isEditing ? "Edit your profile information below" : "Your personal information and bio"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" value={userData.name} onChange={handleInputChange} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={userData.email}
                              onChange={handleInputChange}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" name="location" value={userData.location} onChange={handleInputChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea id="bio" name="bio" value={userData.bio} onChange={handleInputChange} rows={4} />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium text-muted-foreground">About Me</h3>
                          <p>{userData.bio}</p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-1">
                            <h3 className="text-sm font-medium text-muted-foreground">Badges</h3>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Award className="h-3 w-3" />
                                Regular Donor
                              </Badge>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Award className="h-3 w-3" />
                                Volunteer
                              </Badge>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Award className="h-3 w-3" />
                                Food Rescue Hero
                              </Badge>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <h3 className="text-sm font-medium text-muted-foreground">Stats</h3>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="rounded-lg border p-3 text-center">
                                <div className="text-2xl font-bold">12</div>
                                <div className="text-xs text-muted-foreground">Donations</div>
                              </div>
                              <div className="rounded-lg border p-3 text-center">
                                <div className="text-2xl font-bold">8</div>
                                <div className="text-xs text-muted-foreground">Volunteer Hours</div>
                              </div>
                              <div className="rounded-lg border p-3 text-center">
                                <div className="text-2xl font-bold">120</div>
                                <div className="text-xs text-muted-foreground">Meals Provided</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="m-0" forceMount>
                <Card>
                  <CardHeader>
                    <CardTitle>Activity History</CardTitle>
                    <CardDescription>Your recent donations and volunteer activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {activities.map((activity) => (
                        <div key={activity.id} className="flex">
                          <div className="mr-4 flex flex-col items-center">
                            <div
                              className={`rounded-full p-2 ${
                                activity.type === "donation"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-blue-100 text-blue-600"
                              }`}
                            >
                              {activity.type === "donation" ? (
                                <Heart className="h-4 w-4" />
                              ) : (
                                <User className="h-4 w-4" />
                              )}
                            </div>
                            <div className="mt-1 h-full w-px bg-border" />
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex items-center">
                              <h3 className="font-medium">{activity.title}</h3>
                              <Badge
                                variant={activity.status === "completed" ? "outline" : "secondary"}
                                className="ml-2"
                              >
                                {activity.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{activity.description}</p>
                            <p className="text-xs text-muted-foreground">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="m-0" forceMount>
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                        <span>Email Notifications</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Receive notifications about donations and volunteer opportunities via email
                        </span>
                      </Label>
                      <Switch
                        id="email-notifications"
                        checked={userData.notifications.email}
                        onCheckedChange={(checked) => handleNotificationChange("email", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="app-notifications" className="flex flex-col space-y-1">
                        <span>App Notifications</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Receive in-app notifications about your activities
                        </span>
                      </Label>
                      <Switch
                        id="app-notifications"
                        checked={userData.notifications.app}
                        onCheckedChange={(checked) => handleNotificationChange("app", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="marketing-notifications" className="flex flex-col space-y-1">
                        <span>Marketing Emails</span>
                        <span className="font-normal text-sm text-muted-foreground">
                          Receive updates about new features and events
                        </span>
                      </Label>
                      <Switch
                        id="marketing-notifications"
                        checked={userData.notifications.marketing}
                        onCheckedChange={(checked) => handleNotificationChange("marketing", checked)}
                      />
                    </div>
                  </CardContent>
                  <CardHeader className="border-t pt-6">
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full">
                      Connect Social Accounts
                    </Button>
                    <Button variant="destructive" className="w-full">
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>

      <footer className="border-t py-4 mt-8">
        <div className="container flex justify-center">
          <p className="text-sm text-muted-foreground">© 2025 TrustBite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

