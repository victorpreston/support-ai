import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { ArrowRight, MessageSquare, BrainCircuit, BarChart3, Users, Zap, Database, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">Features</h1>
            <p className="text-xl text-slate-600 mb-8">
              Discover how SupportAI transforms customer support with powerful AI capabilities
            </p>
            <Button size="lg" asChild>
              <Link href="/demo">
                Try Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Core Features</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI-Powered Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Instantly respond to customer inquiries with our advanced AI chatbot that understands context and
                    intent.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Smart Categorization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Automatically categorize and prioritize support tickets to streamline your workflow.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Gain insights into customer satisfaction and support performance with detailed analytics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Seamless Handoff</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Smooth transition from AI to human agents when needed, with full conversation context.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Instant Responses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Reduce wait times with immediate AI-generated responses to common questions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Knowledge Base Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Connect your existing knowledge base for more accurate AI responses.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Feature Spotlight</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">AI-Powered Chat</h3>
                <p className="text-slate-600 mb-6">
                  Our advanced AI chatbot uses natural language processing to understand customer inquiries and provide
                  accurate, helpful responses in real-time.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-slate-600">Understands context and intent</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-slate-600">Responds in multiple languages</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-slate-600">Handles complex queries</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-slate-600">Learns from interactions</p>
                  </div>
                </div>

                <Button className="mt-8" asChild>
                  <Link href="/demo">Try AI Chat Demo</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="AI Chat Interface"
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Transform Your Customer Support?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Join thousands of businesses that have improved customer satisfaction while reducing support costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Try Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

