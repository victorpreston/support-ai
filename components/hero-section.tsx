import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/5" />

      <div className="container px-4 mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
              Transform Support into a<span className="text-primary"> Customer Experience</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              Imagine reducing response times by 80% while creating delightful customer experiences that build loyalty
              and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">See the Magic</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700"
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Join 1,000+ happy teams</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-slate-600 dark:text-slate-400">
                    4.9/5 from delighted customers
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="mx-auto text-sm font-medium text-slate-600 dark:text-slate-400">SupportAI Chat</div>
                </div>
              </div>

              <div className="p-6 h-96 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-end">
                    <div className="bg-primary text-primary-foreground rounded-lg rounded-bl-none p-3 max-w-[80%]">
                      <p className="text-sm">Hi there! I'm having trouble resetting my password.</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-end">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg rounded-br-none p-3 max-w-[80%]">
                      <p className="text-sm text-slate-900 dark:text-slate-100">
                        I'd be happy to help you reset your password. You can do this by clicking the "Forgot Password"
                        link on the login page. Would you like me to guide you through the steps?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end">
                    <div className="bg-primary text-primary-foreground rounded-lg rounded-bl-none p-3 max-w-[80%]">
                      <p className="text-sm">Yes, please. I tried that but didn't receive the email.</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-end">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg rounded-br-none p-3 max-w-[80%]">
                      <p className="text-sm text-slate-900 dark:text-slate-100">
                        I understand how frustrating that can be. Let me check if there's an issue with the email
                        delivery. Could you please confirm the email address associated with your account?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end">
                    <div className="bg-primary text-primary-foreground rounded-lg rounded-bl-none p-3 max-w-[80%]">
                      <p className="text-sm">It's john.doe@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-end">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg rounded-br-none p-3 max-w-[80%]">
                      <p className="text-sm text-slate-900 dark:text-slate-100">
                        Thank you, John. I've checked our system and I see that the reset email was sent, but it might
                        be in your spam folder. Could you please check there? If you still don't see it, I can manually
                        reset your password right now to get you back into your account quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-100 dark:bg-slate-800 border-0 focus:ring-0 rounded-full py-2 px-4 text-sm"
                  />
                  <Button size="sm" className="ml-2 rounded-full">
                    Send
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl opacity-50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

