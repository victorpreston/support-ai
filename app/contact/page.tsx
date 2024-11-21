import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, MessageSquare, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Contact Us</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Get in touch with our team for support, sales inquiries, or partnership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Email Us</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">For general inquiries and support</p>
                    <a href="mailto:support@supportai.com" className="text-primary font-medium hover:underline">
                      support@supportai.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Call Us</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Mon-Fri, 9am-5pm EST</p>
                    <a href="tel:+18005551234" className="text-primary font-medium hover:underline">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">Live Chat</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Chat with our support team</p>
                    <Button asChild>
                      <Link href="/chat">Start Chat</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="press">Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Our Offices</h2>

                <div className="space-y-6">
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">San Francisco (HQ)</h3>
                    <div className="flex items-start mb-4">
                      <MapPin className="h-5 w-5 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-400">
                        123 Market Street, Suite 400
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <Phone className="h-4 w-4 text-slate-400 mr-2" />
                      <p className="text-slate-600 dark:text-slate-400">+1 (800) 555-1234</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-slate-400 mr-2" />
                      <p className="text-slate-600 dark:text-slate-400">Mon-Fri, 9am-5pm PST</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">New York</h3>
                    <div className="flex items-start mb-4">
                      <MapPin className="h-5 w-5 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-400">
                        456 Broadway, 5th Floor
                        <br />
                        New York, NY 10013
                        <br />
                        United States
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <Phone className="h-4 w-4 text-slate-400 mr-2" />
                      <p className="text-slate-600 dark:text-slate-400">+1 (800) 555-5678</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-slate-400 mr-2" />
                      <p className="text-slate-600 dark:text-slate-400">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">London</h3>
                    <div className="flex items-start mb-4">
                      <MapPin className="h-5 w-5 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-400">
                        789 Oxford Street
                        <br />
                        London W1D 1BS
                        <br />
                        United Kingdom
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <Phone className="h-4 w-4 text-slate-400 mr-2" />
                      <p className="text-slate-600 dark:text-slate-400">+44 20 1234 5678</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-slate-400 mr-2" />
                      <p className="text-slate-600 dark:text-slate-400">Mon-Fri, 9am-5pm GMT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12">Find quick answers to common questions</p>

            <div className="space-y-6 text-left">
              {[
                {
                  question: "What are your support hours?",
                  answer:
                    "Our support team is available Monday through Friday, 9am-5pm EST. For Enterprise customers, we offer 24/7 support.",
                },
                {
                  question: "How quickly can I expect a response?",
                  answer:
                    "For email inquiries, we typically respond within 24 hours. Live chat support is usually available immediately during business hours. Phone support wait times are typically under 5 minutes.",
                },
                {
                  question: "Do you offer technical support for implementation?",
                  answer:
                    "Yes, we provide technical support for implementation and integration. Our Professional and Enterprise plans include dedicated implementation specialists to help you get set up.",
                },
                {
                  question: "How can I request a product demo?",
                  answer:
                    "You can request a product demo by filling out the contact form on this page or by emailing sales@supportai.com. One of our product specialists will reach out to schedule a personalized demo.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2 text-slate-900 dark:text-white">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link href="/help">
                  View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
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

