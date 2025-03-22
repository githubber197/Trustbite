"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface AnnouncementBannerProps {
  message: string
  ctaText?: string
  ctaLink?: string
  variant?: "default" | "warning" | "success"
}

export function AnnouncementBanner({ message, ctaText, ctaLink, variant = "default" }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const variantStyles = {
    default: "bg-primary text-primary-foreground",
    warning: "bg-yellow-500 text-white",
    success: "bg-green-600 text-white",
  }

  return (
    <div className={`w-full ${variantStyles[variant]}`}>
      <div className="container py-3 px-4 md:px-6 flex items-center justify-between">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          {ctaText && ctaLink && (
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-white/20 bg-white/10 hover:bg-white/20 hover:text-white"
              asChild
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-white/20 hover:text-white"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

