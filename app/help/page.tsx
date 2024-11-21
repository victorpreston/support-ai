import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/footer"
import { Search, FileText, MessageSquare, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Help Center</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Find answers to your questions and get the support you need
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input placeholder="Search for help..." className="pl-10 py-6 text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">Popular Help Topics</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Account & Billing",
                description: "Manage your account, subscription, and billing information",
                icon: <FileText className="h-6 w-6 text-primary" />,
                href: "/help/account-billing",
              },
              {
                title: "Using SupportAI",
                description: "Learn how to use SupportAI features and functionality",
                icon: <MessageSquare className="h-6 w-6 text-primary" />,
                href: "/help/using-supportai",
              },
              {
                title: "Troubleshooting",
                description: "Solve common issues and technical problems",
                icon: <FileText className="h-6 w-6 text-primary" />,
                href: "/help/troubleshooting",
              },
            ].map((topic, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {topic.icon}
                  </div>
                  <CardTitle>{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={topic.href}>View Articles</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Accordion type="single" collapsible className="w-full">
                  {generalFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="billing">
                <Accordion type="single" collapsible className="w-full">
                  {billingFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="technical">
                <Accordion type="single" collapsible className="w-full">
                  {technicalFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/help/all-faqs">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">Still Need Help?</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Chat with our support team in real-time</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Available Monday-Friday, 9am-5pm EST. Get immediate assistance with your questions.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/help/chat">Start Chat</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>Send us an email and we'll get back to you</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    We typically respond within 24 hours. For detailed questions or issues.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/help/email">Email Us</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Phone Support</CardTitle>
                  <CardDescription>Speak directly with our support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Available for Enterprise customers. Call us for urgent issues.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/help/phone">Call Support</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Help Resources */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Self-Help Resources</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Explore our comprehensive resources to find answers on your own
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Button variant="outline" size="lg" asChild className="h-auto py-6 flex flex-col">
                <Link href="/documentation">
                  <FileText className="h-8 w-8 mb-2" />
                  <span className="text-lg font-medium">Documentation</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Detailed guides and API references
                  </span>
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild className="h-auto py-6 flex flex-col">
                <Link href="/guides">
                  <FileText className="h-8 w-8 mb-2" />
                  <span className="text-lg font-medium">Tutorials & Guides</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Step-by-step instructions and best practices
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const generalFaqs = [
  {
    question: "What is SupportAI?",
    answer:
      "SupportAI is an AI-powered customer support automation platform that helps businesses provide faster, more efficient support to their customers. It uses advanced artificial intelligence to handle initial customer inquiries, categorize support tickets, and assist human agents with suggested responses.",
  },
  {
    question: "How does SupportAI work?",
    answer:
      "SupportAI works by integrating with your existing support channels (email, chat, etc.) and using AI to analyze and respond to customer inquiries. It can automatically resolve simple issues, route complex ones to the right team members, and provide human agents with context and suggested responses to help them work more efficiently.",
  },
  {
    question: "Can SupportAI integrate with my existing tools?",
    answer:
      "Yes, SupportAI integrates with a wide range of customer support platforms, CRM systems, and communication tools. We offer pre-built integrations for popular services like Zendesk, Salesforce, Intercom, Slack, and more. Custom integrations are also available for Enterprise customers.",
  },
  {
    question: "Is my data secure with SupportAI?",
    answer:
      "Absolutely. We take data security very seriously. SupportAI is SOC 2 Type II certified and GDPR compliant. All data is encrypted both in transit and at rest, and we implement strict access controls. We never use your customer data to train our AI models without explicit permission.",
  },
  {
    question: "How long does it take to set up SupportAI?",
    answer:
      "Basic setup can be completed in as little as 30 minutes. For more complex implementations with custom integrations and training, it typically takes 1-2 weeks. Our customer success team will guide you through the entire process to ensure a smooth implementation.",
  },
]

const billingFaqs = [
  {
    question: "What pricing plans do you offer?",
    answer:
      "We offer three main pricing tiers: Starter, Professional, and Enterprise. Each plan includes different features and conversation volumes. You can view detailed pricing information on our Pricing page. We also offer custom pricing for large organizations with specific needs.",
  },
  {
    question: "How do you count conversations?",
    answer:
      "A conversation is defined as a series of messages between a customer and your support team (including AI responses) about a specific issue. Conversations remain active for 24 hours after the last message. After that, new messages from the same customer about the same issue will be counted as a new conversation.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the end of your current billing cycle. When upgrading, you'll be charged the prorated difference for the remainder of your billing cycle.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial for all plans. No credit card is required to start your trial. During the trial, you'll have access to all features included in the Professional plan, with a limit of 500 conversations.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and PayPal. For Enterprise customers, we also offer invoicing with net-30 payment terms.",
  },
]

const technicalFaqs = [
  {
    question: "What languages does SupportAI support?",
    answer:
      "SupportAI supports over 100 languages for customer interactions. The AI can automatically detect the language being used and respond accordingly. The admin interface is currently available in English, Spanish, French, German, Japanese, and Portuguese.",
  },
  {
    question: "How accurate is the AI?",
    answer:
      "SupportAI achieves an average accuracy rate of 85-95% for common customer inquiries. The accuracy improves over time as the system learns from interactions and as you build out your knowledge base. For complex or unusual queries, the AI will automatically escalate to a human agent.",
  },
  {
    question: "Can I customize the AI's responses?",
    answer:
      "Yes, you can customize the AI's responses in several ways. You can create custom response templates, adjust the tone and style of responses, and build a knowledge base that the AI will use to generate accurate answers. You can also set up approval workflows for certain types of responses.",
  },
  {
    question: "How does the knowledge base integration work?",
    answer:
      "SupportAI can connect to your existing knowledge base (such as Zendesk Guide, Confluence, or custom documentation) and use that information to generate accurate responses. The system uses advanced retrieval techniques to find the most relevant information for each customer query.",
  },
  {
    question: "What analytics and reporting features are available?",
    answer:
      "SupportAI provides comprehensive analytics including conversation volume, AI resolution rate, response times, customer satisfaction scores, and common issue categories. You can create custom reports, set up automated report delivery, and export data for further analysis in your preferred tools.",
  },
]

