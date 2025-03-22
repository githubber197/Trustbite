import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, CheckCircle, ArrowLeft } from "lucide-react"

export default function VolunteerSuccessPage() {
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
      <main className="flex-1 container py-12 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="text-2xl">Application Received!</CardTitle>
            <CardDescription>Thank you for volunteering with TrustBite.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">
              We've received your volunteer application. Our team will review it and get back to you within 48 hours.
            </p>
            <p className="text-sm text-muted-foreground">Application Reference: #VOL-2025-0001</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link href="/dashboard">Browse Opportunities</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/" className="flex items-center gap-2 justify-center">
                <ArrowLeft className="h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
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

