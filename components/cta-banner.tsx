import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CtaBannerProps {
  title: string
  description: string
  primaryCta: string
  primaryCtaLink: string
  secondaryCta?: string
  secondaryCtaLink?: string
  bgImage?: string
}

export function CtaBanner({
  title,
  description,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
  bgImage,
}: CtaBannerProps) {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-0"
        style={
          bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}
        }
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">{title}</h2>
          <p className="text-lg text-white/90">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href={primaryCtaLink}>{primaryCta}</Link>
            </Button>
            {secondaryCta && secondaryCtaLink && (
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20" asChild>
                <Link href={secondaryCtaLink}>{secondaryCta}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

