"use client"
import Image from "next/image"

export function PartnerLogos() {
  const logos = [
    { name: "Microsoft", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Google", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Amazon", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Salesforce", logo: "/placeholder.svg?height=40&width=120" },
    { name: "IBM", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Adobe", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
          Trusted by industry leaders worldwide
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100"
            >
              <Image
                src={logo.logo || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={40}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

