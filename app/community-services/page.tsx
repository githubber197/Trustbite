import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Utensils, Users, BookOpen, Home, ShoppingBag, GraduationCap, ArrowRight } from "lucide-react"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { ImpactMetrics } from "@/components/impact-metrics"
import { CtaBanner } from "@/components/cta-banner"
import { PartnersBanner } from "@/components/partners-banner"

export default function CommunityServicesPage() {
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
        message="Urgent: We need volunteers this weekend for our community kitchen! Sign up now."
        ctaText="Sign Up"
        ctaLink="/volunteer"
      />

      <main className="flex-1">
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Community Services</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  TrustBite offers a range of services to support our community and reduce food waste.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Utensils className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Community Kitchens</CardTitle>
                  </div>
                  <CardDescription>
                    Our community kitchens provide hot, nutritious meals to those in need.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We operate community kitchens in various neighborhoods, serving meals prepared from rescued food.
                    Our kitchens are staffed by trained volunteers and provide a welcoming space for community members
                    to enjoy a meal together.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium">Operating Hours</span>
                      <span className="text-muted-foreground">Mon-Fri: 11am-2pm</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">Locations</span>
                      <span className="text-muted-foreground">4 across the city</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/community-kitchens" className="flex items-center justify-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <ShoppingBag className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Food Pantries</CardTitle>
                  </div>
                  <CardDescription>
                    Access to free groceries and essential food items for families in need.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our food pantries provide groceries to individuals and families experiencing food insecurity. We
                    distribute fresh produce, canned goods, dairy products, and other essentials to help supplement
                    household food needs.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium">Distribution Days</span>
                      <span className="text-muted-foreground">Tues & Thurs: 9am-1pm</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">Eligibility</span>
                      <span className="text-muted-foreground">Open to all in need</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/food-pantries" className="flex items-center justify-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Home className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Home Delivery</CardTitle>
                  </div>
                  <CardDescription>
                    Food delivery service for seniors, disabled individuals, and those unable to leave home.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our home delivery program ensures that vulnerable community members who cannot visit our
                    distribution centers still have access to nutritious food. Volunteers deliver prepared meals or
                    grocery packages directly to homes.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium">Delivery Schedule</span>
                      <span className="text-muted-foreground">Wed & Sat: 10am-4pm</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">Service Area</span>
                      <span className="text-muted-foreground">Within 15 miles</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/home-delivery" className="flex items-center justify-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Nutrition Education</CardTitle>
                  </div>
                  <CardDescription>
                    Workshops and classes on healthy eating, meal planning, and food preparation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our nutrition education program offers workshops on healthy eating on a budget, cooking skills, meal
                    planning, and food preservation. We believe in empowering community members with knowledge to make
                    healthy food choices.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium">Workshop Schedule</span>
                      <span className="text-muted-foreground">Monthly sessions</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">Registration</span>
                      <span className="text-muted-foreground">Free, sign up online</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/nutrition-education" className="flex items-center justify-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Community Gardens</CardTitle>
                  </div>
                  <CardDescription>Urban gardens that provide fresh produce and gardening education.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our community gardens provide spaces for residents to grow their own food, learn gardening skills,
                    and connect with nature. The gardens also supply fresh produce to our food distribution programs.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium">Garden Locations</span>
                      <span className="text-muted-foreground">3 urban gardens</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">Participation</span>
                      <span className="text-muted-foreground">Open to all</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/community-gardens" className="flex items-center justify-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Food Waste Education</CardTitle>
                  </div>
                  <CardDescription>
                    Programs to educate businesses and individuals on reducing food waste.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our food waste education initiatives work with restaurants, grocery stores, schools, and households
                    to implement strategies for reducing food waste. We offer consultations, workshops, and resources.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium">Business Program</span>
                      <span className="text-muted-foreground">Customized consulting</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">School Program</span>
                      <span className="text-muted-foreground">Interactive workshops</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/food-waste-education" className="flex items-center justify-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <ImpactMetrics />

        <CtaBanner
          title="Make a Difference Today"
          description="Join our mission to reduce food waste and feed our community."
          primaryCta="Donate Food"
          primaryCtaLink="/donate"
          secondaryCta="Volunteer"
          secondaryCtaLink="/volunteer"
        />

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Success Stories</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Real stories of impact from our community services.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="aspect-video w-full bg-muted">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Community kitchen volunteers serving meals"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>From Food Waste to Community Feast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Our restaurant was throwing away perfectly good food at the end of each day. Partnering with
                    TrustBite has allowed us to donate over 5,000 meals in the past year, feeding people in need while
                    reducing our environmental impact."
                  </p>
                  <div className="mt-4">
                    <p className="font-medium">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Owner, Fresh Bites Restaurant</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video w-full bg-muted">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Family receiving food assistance"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>A Lifeline During Difficult Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "After losing my job, I was struggling to put food on the table for my family. TrustBite's food
                    pantry provided us with nutritious groceries and their nutrition education program taught me how to
                    prepare affordable, healthy meals."
                  </p>
                  <div className="mt-4">
                    <p className="font-medium">James Thompson</p>
                    <p className="text-sm text-muted-foreground">Community Member</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <PartnersBanner />
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">TrustBite</span>
          </div>
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

