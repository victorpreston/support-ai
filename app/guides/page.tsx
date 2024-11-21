import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import { ArrowRight, BookOpen, FileText, Video, Code, Lightbulb, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
              Guides & Tutorials
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Learn how to get the most out of SupportAI with our comprehensive guides
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Guides</TabsTrigger>
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
                <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
              </TabsList>

              <Button variant="outline" asChild>
                <Link href="/documentation">View Documentation</Link>
              </Button>
            </div>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.map((guide, index) => (
                  <GuideCard key={index} guide={guide} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="getting-started">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides
                  .filter((guide) => guide.category === "getting-started")
                  .map((guide, index) => (
                    <GuideCard key={index} guide={guide} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="advanced">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides
                  .filter((guide) => guide.category === "advanced")
                  .map((guide, index) => (
                    <GuideCard key={index} guide={guide} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="use-cases">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides
                  .filter((guide) => guide.category === "use-cases")
                  .map((guide, index) => (
                    <GuideCard key={index} guide={guide} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                  Featured Guide: Building a Multilingual Support System
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Learn how to configure SupportAI to provide customer support in multiple languages, automatically
                  detecting and responding in the customer's preferred language.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>15 min read</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Bookmark className="h-4 w-4 mr-1" />
                    <span>Advanced</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/guides/multilingual-support">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Multilingual Support Guide"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Stay Updated with New Guides</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Subscribe to our newsletter to receive new guides, tutorials, and best practices directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface Guide {
  title: string
  description: string
  icon: React.ReactNode
  category: string
  type: string
  readTime: string
  href: string
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">{guide.icon}</div>
          <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
            {guide.type === "article" && <FileText className="h-3 w-3 mr-1" />}
            {guide.type === "video" && <Video className="h-3 w-3 mr-1" />}
            {guide.type === "tutorial" && <Code className="h-3 w-3 mr-1" />}
            <span>{guide.readTime}</span>
          </div>
        </div>
        <CardTitle className="mt-4">{guide.title}</CardTitle>
        <CardDescription>{guide.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href={guide.href}>Read Guide</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const guides: Guide[] = [
  {
    title: "Getting Started with SupportAI",
    description: "Learn the basics of setting up and configuring your SupportAI account",
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    category: "getting-started",
    type: "article",
    readTime: "10 min read",
    href: "/guides/getting-started",
  },
  {
    title: "Building Your Knowledge Base",
    description: "Create a comprehensive knowledge base to power your AI responses",
    icon: <FileText className="h-5 w-5 text-primary" />,
    category: "getting-started",
    type: "article",
    readTime: "12 min read",
    href: "/guides/knowledge-base",
  },
  {
    title: "Customizing AI Responses",
    description: "Fine-tune your AI to match your brand voice and support style",
    icon: <Lightbulb className="h-5 w-5 text-primary" />,
    category: "advanced",
    type: "tutorial",
    readTime: "15 min read",
    href: "/guides/customizing-ai",
  },
  {
    title: "Setting Up Team Workflows",
    description: "Create efficient workflows for your support team with AI assistance",
    icon: <FileText className="h-5 w-5 text-primary" />,
    category: "getting-started",
    type: "article",
    readTime: "8 min read",
    href: "/guides/team-workflows",
  },
  {
    title: "Advanced Analytics & Reporting",
    description: "Get deeper insights from your support data with custom reports",
    icon: <Code className="h-5 w-5 text-primary" />,
    category: "advanced",
    type: "tutorial",
    readTime: "20 min read",
    href: "/guides/advanced-analytics",
  },
  {
    title: "Integrating with CRM Systems",
    description: "Connect SupportAI with your existing CRM for seamless data flow",
    icon: <Lightbulb className="h-5 w-5 text-primary" />,
    category: "advanced",
    type: "tutorial",
    readTime: "18 min read",
    href: "/guides/crm-integration",
  },
  {
    title: "Handling Complex Customer Issues",
    description: "Strategies for managing difficult support scenarios with AI assistance",
    icon: <Video className="h-5 w-5 text-primary" />,
    category: "use-cases",
    type: "video",
    readTime: "25 min video",
    href: "/guides/complex-issues",
  },
  {
    title: "Optimizing for Customer Satisfaction",
    description: "Techniques to improve CSAT scores with AI-powered support",
    icon: <FileText className="h-5 w-5 text-primary" />,
    category: "use-cases",
    type: "article",
    readTime: "14 min read",
    href: "/guides/customer-satisfaction",
  },
  {
    title: "Scaling Support for Global Audiences",
    description: "Best practices for supporting customers across different regions",
    icon: <Video className="h-5 w-5 text-primary" />,
    category: "use-cases",
    type: "video",
    readTime: "22 min video",
    href: "/guides/global-support",
  },
]

