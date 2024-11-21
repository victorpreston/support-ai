import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { ArrowRight, Check, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Integrations</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Connect SupportAI with your favorite tools and platforms
            </p>
            <Button size="lg" asChild>
              <Link href="#popular-integrations">
                Explore Integrations <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Integrations</TabsTrigger>
                  <TabsTrigger value="crm">CRM</TabsTrigger>
                  <TabsTrigger value="helpdesk">Helpdesk</TabsTrigger>
                  <TabsTrigger value="communication">Communication</TabsTrigger>
                  <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" id="popular-integrations">
                <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Popular Integrations</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {allIntegrations.map((integration, index) => (
                    <IntegrationCard key={index} integration={integration} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="crm">
                <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">CRM Integrations</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {allIntegrations
                    .filter((integration) => integration.category === "CRM")
                    .map((integration, index) => (
                      <IntegrationCard key={index} integration={integration} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="helpdesk">
                <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Helpdesk Integrations</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {allIntegrations
                    .filter((integration) => integration.category === "Helpdesk")
                    .map((integration, index) => (
                      <IntegrationCard key={index} integration={integration} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="communication">
                <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Communication Integrations</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {allIntegrations
                    .filter((integration) => integration.category === "Communication")
                    .map((integration, index) => (
                      <IntegrationCard key={index} integration={integration} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="ecommerce">
                <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">E-commerce Integrations</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {allIntegrations
                    .filter((integration) => integration.category === "E-commerce")
                    .map((integration, index) => (
                      <IntegrationCard key={index} integration={integration} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Featured Integration */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Seamless Zendesk Integration</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Our Zendesk integration allows you to enhance your existing support workflow with AI capabilities.
                  SupportAI works alongside your support team, handling routine inquiries automatically and providing
                  agents with AI-powered suggestions for complex issues.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Automatic ticket creation and categorization",
                    "AI-powered response suggestions for agents",
                    "Knowledge base synchronization",
                    "Seamless conversation handoff between AI and agents",
                    "Unified analytics and reporting",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">{feature}</p>
                    </div>
                  ))}
                </div>

                <Button asChild>
                  <Link href="/integrations/zendesk">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Zendesk Integration"
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

      {/* API & Custom Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>API Access</CardTitle>
                  <CardDescription>Build custom integrations with our comprehensive API</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Our robust API allows you to integrate SupportAI's capabilities into your custom applications and
                    workflows. Access AI-powered responses, conversation management, and analytics programmatically.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mb-6">
                    <code className="text-sm">
                      GET /api/v1/conversations
                      <br />
                      POST /api/v1/messages
                      <br />
                      GET /api/v1/analytics
                    </code>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/documentation/api">View API Documentation</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Custom Integrations</CardTitle>
                  <CardDescription>Need a specific integration? We can build it for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Our team of integration specialists can build custom connections between SupportAI and your existing
                    tools and platforms. Whether you need to connect to a proprietary system or a niche industry tool,
                    we've got you covered.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Custom requirements analysis</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Dedicated integration specialist</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">End-to-end testing and validation</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Integration Partners</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12">
              We work closely with these partners to ensure seamless integrations
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
                <div key={partner} className="flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=60&width=120`}
                    alt={`Partner ${partner}`}
                    width={120}
                    height={60}
                    className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Ready to Connect Your Tools?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Start integrating SupportAI with your existing workflow today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface Integration {
  name: string
  description: string
  category: string
  logo: string
  popular: boolean
}

function IntegrationCard({ integration }: { integration: Integration }) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6 flex items-center justify-center border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-40">
        <Image
          src={integration.logo || "/placeholder.svg"}
          alt={integration.name}
          width={120}
          height={60}
          className="max-h-20 w-auto object-contain"
        />
      </div>
      <CardHeader>
        <CardTitle>{integration.name}</CardTitle>
        <CardDescription>{integration.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{integration.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href={`/integrations/${integration.name.toLowerCase().replace(/\s+/g, "-")}`}>View Integration</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const allIntegrations: Integration[] = [
  {
    name: "Zendesk",
    description: "Enhance your Zendesk support workflow with AI-powered responses and ticket categorization.",
    category: "Helpdesk",
    logo: "/placeholder.svg?height=60&width=120",
    popular: true,
  },
  {
    name: "Salesforce",
    description: "Integrate SupportAI with Salesforce Service Cloud for enhanced customer support.",
    category: "CRM",
    logo: "/placeholder.svg?height=60&width=120",
    popular: true,
  },
  {
    name: "Intercom",
    description: "Add AI capabilities to your Intercom chat and support system.",
    category: "Communication",
    logo: "/placeholder.svg?height=60&width=120",
    popular: true,
  },
  {
    name: "Slack",
    description: "Connect SupportAI to Slack for team notifications and collaborative support.",
    category: "Communication",
    logo: "/placeholder.svg?height=60&width=120",
    popular: true,
  },
  {
    name: "Shopify",
    description: "Provide AI-powered support for your Shopify store customers.",
    category: "E-commerce",
    logo: "/placeholder.svg?height=60&width=120",
    popular: true,
  },
  {
    name: "HubSpot",
    description: "Integrate SupportAI with HubSpot CRM for unified customer data and support.",
    category: "CRM",
    logo: "/placeholder.svg?height=60&width=120",
    popular: true,
  },
  {
    name: "Freshdesk",
    description: "Enhance your Freshdesk support with AI-powered responses and automation.",
    category: "Helpdesk",
    logo: "/placeholder.svg?height=60&width=120",
    popular: false,
  },
  {
    name: "Microsoft Teams",
    description: "Connect SupportAI to Microsoft Teams for collaborative customer support.",
    category: "Communication",
    logo: "/placeholder.svg?height=60&width=120",
    popular: false,
  },
  {
    name: "WooCommerce",
    description: "Add AI support capabilities to your WooCommerce store.",
    category: "E-commerce",
    logo: "/placeholder.svg?height=60&width=120",
    popular: false,
  },
  {
    name: "Zoho CRM",
    description: "Integrate SupportAI with Zoho CRM for enhanced customer support.",
    category: "CRM",
    logo: "/placeholder.svg?height=60&width=120",
    popular: false,
  },
  {
    name: "Help Scout",
    description: "Add AI capabilities to your Help Scout support workflow.",
    category: "Helpdesk",
    logo: "/placeholder.svg?height=60&width=120",
    popular: false,
  },
  {
    name: "Magento",
    description: "Provide AI-powered support for your Magento store customers.",
    category: "E-commerce",
    logo: "/placeholder.svg?height=60&width=120",
    popular: false,
  },
]

