import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { ArrowRight, Globe, Award, Heart, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">About SupportAI</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              We're on a mission to transform customer support with the power of artificial intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Story</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  SupportAI was founded in 2020 by a team of AI researchers and customer experience experts who saw the
                  potential for artificial intelligence to revolutionize customer support.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  After experiencing firsthand the challenges of scaling customer support teams while maintaining
                  quality, our founders set out to build a solution that would empower support teams rather than replace
                  them.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Today, SupportAI helps thousands of businesses worldwide deliver exceptional customer support
                  experiences through the perfect blend of AI automation and human expertise.
                </p>
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
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Founded in 2020</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              To empower businesses to deliver exceptional customer support at scale through the perfect blend of
              artificial intelligence and human expertise.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Efficiency</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Automating routine tasks to free up human agents for complex issues
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Empathy</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Ensuring every customer interaction is handled with care and understanding
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Accessibility</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Making world-class support accessible to businesses of all sizes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Our Values</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Customer First</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        We believe that exceptional customer experiences are the foundation of business success.
                        Everything we build is designed to enhance the customer journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Innovation</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        We're constantly pushing the boundaries of what's possible with AI in customer support,
                        investing heavily in research and development.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Trust & Security</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        We maintain the highest standards of data security and privacy, ensuring our customers can trust
                        us with their sensitive information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Excellence</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        We're committed to delivering the highest quality in everything we do, from our product to our
                        customer service and support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Our Leadership Team</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  title: "CEO & Co-Founder",
                  bio: "Former Head of AI at TechCorp with 15+ years of experience in machine learning and customer experience.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Michael Chen",
                  title: "CTO & Co-Founder",
                  bio: "AI researcher with a PhD from MIT and 10+ years of experience building scalable AI systems.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Emma Rodriguez",
                  title: "Chief Customer Officer",
                  bio: "Customer success expert with experience scaling support teams at leading SaaS companies.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "David Kim",
                  title: "VP of Engineering",
                  bio: "Engineering leader with a track record of building high-performance teams and scalable systems.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Lisa Wang",
                  title: "VP of Product",
                  bio: "Product visionary with expertise in AI applications and user experience design.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "James Wilson",
                  title: "VP of Sales",
                  bio: "Sales leader with extensive experience in enterprise SaaS and customer support solutions.",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4 border-4 border-white dark:border-slate-800 shadow-md">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-1 text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Our Achievements</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">1,000+ Customers</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Trusted by over 1,000 businesses worldwide, from startups to Fortune 500 companies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Global Reach</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Supporting customers in over 50 countries and 100+ languages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Industry Recognition</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Winner of multiple industry awards for innovation in customer support technology.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">10M+ Conversations</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Processing over 10 million customer conversations monthly with 85%+ AI resolution rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl opacity-90 mb-8">
              We're always looking for talented individuals who are passionate about AI and customer experience.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/careers">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

