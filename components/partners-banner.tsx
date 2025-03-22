export function PartnersBanner() {
  // Mock partner logos
  const partners = [
    { name: "City Government", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Local Grocery Chain", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Community Foundation", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Restaurant Association", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University Extension", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Corporate Sponsor", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tighter">Our Partners</h2>
          <p className="text-muted-foreground">
            Working together to create a more sustainable and food-secure community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

