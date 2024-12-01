import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, BarChart3, Users } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { PartnerLogos } from "@/components/partner-logos"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <HeroSection />

      {/* Partner Logos */}
      <PartnerLogos />

      {/* Features Section */}
      <FeatureSection />

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900 dark:text-white">
              How SupportAI Works
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our AI-powered platform streamlines your customer support workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">AI First Response</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our AI handles initial customer inquiries, resolving simple issues instantly
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Smart Routing</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Complex issues are automatically categorized and routed to the right team
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Continuous Learning</h3>
              <p className="text-slate-600 dark:text-slate-400">
                The system learns from every interaction to improve future responses
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/demo">
                Try Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Pricing */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to create support experiences that matter?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of businesses that have transformed customer interactions from transactions into
            relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/demo">Experience the Difference</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

