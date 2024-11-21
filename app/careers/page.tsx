import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { ArrowRight, MapPin, Briefcase, Clock, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Join Our Team</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                  Help us transform customer support with the power of artificial intelligence
                </p>
                <Button size="lg" asChild>
                  <a href="#open-positions">
                    View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="SupportAI Team"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Why Join SupportAI?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Meaningful Work",
                  description:
                    "Build technology that helps businesses deliver better customer experiences and makes support agents' jobs more fulfilling.",
                  icon: <Briefcase className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Innovation & Growth",
                  description:
                    "Work at the cutting edge of AI technology with opportunities to learn, grow, and make an impact.",
                  icon: <ArrowRight className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Inclusive Culture",
                  description:
                    "Join a diverse team that values different perspectives and fosters a supportive, collaborative environment.",
                  icon: <Check className="h-6 w-6 text-primary" />,
                },
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Our Benefits</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Competitive salary and equity packages",
                "Comprehensive health, dental, and vision insurance",
                "Flexible work arrangements (remote, hybrid, or in-office)",
                "Unlimited PTO policy with minimum time off encouraged",
                "Professional development budget",
                "401(k) matching program",
                "Wellness programs and gym membership reimbursement",
                "Catered lunches and fully stocked kitchen",
                "Team building events and company retreats",
                "Parental leave and family support programs",
                "Home office stipend for remote employees",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Our Locations</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  city: "San Francisco",
                  country: "United States",
                  address: "123 Market Street, San Francisco, CA 94105",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  city: "New York",
                  country: "United States",
                  address: "456 Broadway, New York, NY 10013",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  city: "London",
                  country: "United Kingdom",
                  address: "789 Oxford Street, London W1D 1BS",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((location, index) => (
                <Card key={index}>
                  <div className="overflow-hidden">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.city}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-1 text-slate-900 dark:text-white">{location.city}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">{location.country}</p>
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-slate-400 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">{location.address}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We also support remote work across multiple time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        id="open-positions"
        className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Open Positions</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Senior AI Engineer",
                  department: "Engineering",
                  location: "San Francisco or Remote",
                  type: "Full-time",
                  href: "/careers/senior-ai-engineer",
                },
                {
                  title: "Product Manager",
                  department: "Product",
                  location: "San Francisco",
                  type: "Full-time",
                  href: "/careers/product-manager",
                },
                {
                  title: "Customer Success Manager",
                  department: "Customer Success",
                  location: "New York or Remote",
                  type: "Full-time",
                  href: "/careers/customer-success-manager",
                },
                {
                  title: "Frontend Engineer",
                  department: "Engineering",
                  location: "San Francisco or Remote",
                  type: "Full-time",
                  href: "/careers/frontend-engineer",
                },
                {
                  title: "Sales Development Representative",
                  department: "Sales",
                  location: "London or Remote",
                  type: "Full-time",
                  href: "/careers/sales-development-representative",
                },
                {
                  title: "Content Marketing Specialist",
                  department: "Marketing",
                  location: "Remote",
                  type: "Full-time",
                  href: "/careers/content-marketing-specialist",
                },
              ].map((position, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{position.title}</CardTitle>
                    <CardDescription>{position.department}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{position.type}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={position.href}>View Position</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Don't see a position that matches your skills? We're always looking for talented individuals to join our
                team.
              </p>
              <Button variant="outline" asChild>
                <Link href="/careers/general-application">Submit General Application</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Our Hiring Process</h2>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Application Review",
                  description:
                    "Our recruiting team reviews your application and resume to determine if your skills and experience align with the position requirements.",
                },
                {
                  step: "2",
                  title: "Initial Interview",
                  description:
                    "A 30-minute video call with a recruiter to discuss your background, experience, and interest in SupportAI.",
                },
                {
                  step: "3",
                  title: "Technical Assessment",
                  description:
                    "Depending on the role, you may be asked to complete a technical assessment or case study to demonstrate your skills.",
                },
                {
                  step: "4",
                  title: "Team Interviews",
                  description:
                    "A series of interviews with team members and potential colleagues to assess your technical skills, problem-solving abilities, and cultural fit.",
                },
                {
                  step: "5",
                  title: "Final Interview",
                  description:
                    "A conversation with a senior leader or executive to discuss your career goals and how you can contribute to SupportAI's mission.",
                },
                {
                  step: "6",
                  title: "Offer & Onboarding",
                  description:
                    "If selected, you'll receive an offer letter and begin our comprehensive onboarding process to set you up for success.",
                },
              ].map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-6 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    {index < 5 && <div className="w-0.5 h-12 bg-slate-200 dark:bg-slate-700 mx-auto mt-2"></div>}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl opacity-90 mb-8">
              Explore our open positions and take the first step towards a rewarding career at SupportAI.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#open-positions">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

