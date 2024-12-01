import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small businesses just getting started with AI support",
      features: [
        "AI chatbot with basic responses",
        "Up to 1,000 conversations/month",
        "Email support",
        "Basic analytics",
        "1 team member",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing businesses with moderate support volume",
      features: [
        "Advanced AI with custom training",
        "Up to 5,000 conversations/month",
        "Priority email & chat support",
        "Advanced analytics & reporting",
        "5 team members",
        "Knowledge base integration",
        "Custom branding",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex support needs",
      features: [
        "Fully customizable AI responses",
        "Unlimited conversations",
        "24/7 dedicated support",
        "Enterprise-grade security",
        "Unlimited team members",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Choose the plan that's right for your business</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-slate-200 dark:border-slate-700 ${plan.popular ? "ring-2 ring-primary relative" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}

              <CardHeader className="pb-0">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-600 dark:text-slate-400">/month</span>}
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                  <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 text-slate-600 dark:text-slate-400">
          All plans come with a 14-day free trial. No credit card required.
        </div>
      </div>
    </section>
  )
}

