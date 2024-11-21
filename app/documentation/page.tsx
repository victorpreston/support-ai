import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/footer"
import { Search, FileText, Code, BookOpen, Terminal, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Documentation</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Everything you need to integrate and use SupportAI effectively
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input placeholder="Search documentation..." className="pl-10 py-6 text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="getting-started" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="sdk">SDK</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" /> Quick Start Guide
                    </CardTitle>
                    <CardDescription>Get up and running with SupportAI in minutes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Learn how to set up your SupportAI account, configure your first AI assistant, and integrate it
                      with your existing support channels.
                    </p>
                    <Button asChild>
                      <Link href="/documentation/quick-start">
                        Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" /> Core Concepts
                    </CardTitle>
                    <CardDescription>Understand the fundamentals of SupportAI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Explore the key concepts behind SupportAI, including AI models, knowledge base integration, and
                      conversation management.
                    </p>
                    <Button asChild>
                      <Link href="/documentation/core-concepts">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Terminal className="h-5 w-5 mr-2" /> Installation
                    </CardTitle>
                    <CardDescription>Set up SupportAI in your environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Follow our step-by-step installation guides for different platforms and environments, including
                      cloud and on-premise options.
                    </p>
                    <Button asChild>
                      <Link href="/documentation/installation">
                        View Instructions <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="h-5 w-5 mr-2" /> Tutorials
                    </CardTitle>
                    <CardDescription>Hands-on examples to get you started</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Follow our practical tutorials to implement common use cases and get the most out of SupportAI's
                      features.
                    </p>
                    <Button asChild>
                      <Link href="/documentation/tutorials">
                        Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Not sure where to start?</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                  Our interactive guide will help you find the right resources based on your needs and experience level.
                </p>
                <Button size="lg" asChild>
                  <Link href="/documentation/interactive-guide">Take the Interactive Guide</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="guides">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "AI Configuration",
                    description: "Learn how to configure and fine-tune your AI assistant",
                    href: "/documentation/guides/ai-configuration",
                  },
                  {
                    title: "Knowledge Base Setup",
                    description: "Create and manage your knowledge base for better AI responses",
                    href: "/documentation/guides/knowledge-base",
                  },
                  {
                    title: "Conversation Management",
                    description: "Handle and organize customer conversations effectively",
                    href: "/documentation/guides/conversation-management",
                  },
                  {
                    title: "Analytics & Reporting",
                    description: "Get insights from your support data with advanced analytics",
                    href: "/documentation/guides/analytics",
                  },
                  {
                    title: "Team Collaboration",
                    description: "Set up roles and workflows for your support team",
                    href: "/documentation/guides/team-collaboration",
                  },
                  {
                    title: "Integrations",
                    description: "Connect SupportAI with your existing tools and platforms",
                    href: "/documentation/guides/integrations",
                  },
                ].map((guide, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" asChild className="w-full">
                        <Link href={guide.href}>Read Guide</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="api">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>API Reference</h2>
                <p>
                  Our comprehensive API allows you to integrate SupportAI's powerful features directly into your
                  applications and workflows. The SupportAI API is organized around REST principles, uses predictable
                  resource-oriented URLs, and leverages standard HTTP response codes, authentication, and verbs.
                </p>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md my-6">
                  <h3 className="text-lg font-medium mb-2">Base URL</h3>
                  <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">
                    https://api.supportai.com/v1
                  </code>
                </div>

                <h3>Authentication</h3>
                <p>
                  The SupportAI API uses API keys for authentication. You can view and manage your API keys in the
                  SupportAI Dashboard. Your API keys carry many privileges, so be sure to keep them secure.
                </p>

                <h3>Available Endpoints</h3>
                <ul>
                  <li>
                    <strong>Conversations</strong> - Manage customer conversations
                  </li>
                  <li>
                    <strong>Messages</strong> - Send and receive messages
                  </li>
                  <li>
                    <strong>AI</strong> - Configure and interact with AI models
                  </li>
                  <li>
                    <strong>Knowledge Base</strong> - Manage your knowledge base content
                  </li>
                  <li>
                    <strong>Analytics</strong> - Access support analytics and metrics
                  </li>
                  <li>
                    <strong>Users</strong> - Manage users and permissions
                  </li>
                </ul>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/documentation/api/reference">View Full API Reference</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sdk">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>SDK Documentation</h2>
                <p>
                  Our Software Development Kits (SDKs) make it easy to integrate SupportAI into your applications across
                  different platforms and programming languages.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>JavaScript SDK</CardTitle>
                      <CardDescription>For web applications and Node.js</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mb-4">
                        <code className="text-sm">npm install @supportai/js-sdk</code>
                      </div>
                      <Button asChild>
                        <Link href="/documentation/sdk/javascript">View Documentation</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Python SDK</CardTitle>
                      <CardDescription>For Python applications and data science</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mb-4">
                        <code className="text-sm">pip install supportai</code>
                      </div>
                      <Button asChild>
                        <Link href="/documentation/sdk/python">View Documentation</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="mt-8">Additional SDKs</h3>
                <ul>
                  <li>
                    <Link href="/documentation/sdk/java" className="text-primary hover:underline">
                      Java SDK
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation/sdk/ruby" className="text-primary hover:underline">
                      Ruby SDK
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation/sdk/go" className="text-primary hover:underline">
                      Go SDK
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation/sdk/dotnet" className="text-primary hover:underline">
                      .NET SDK
                    </Link>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Need help with implementation?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to assist you with custom integrations, training, and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/documentation/faq">View FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

