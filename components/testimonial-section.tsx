import { Card, CardContent } from "@/components/ui/card"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "SupportAI has completely transformed how we connect with our customers. Our team feels empowered, and our customers feel valued. The emotional intelligence of this AI is truly remarkable.",
      author: "Sarah Johnson",
      title: "Customer Experience Director",
      company: "TechCorp Inc.",
    },
    {
      quote:
        "The difference is night and day. Our customers no longer feel like they're talking to a robot – they feel heard and understood. This has translated directly into higher retention rates and customer lifetime value.",
      author: "Michael Chen",
      title: "Head of Operations",
      company: "Retail Solutions",
    },
    {
      quote:
        "What impressed me most was how SupportAI captured our brand voice and values. It doesn't just solve problems – it creates moments of delight that customers remember and share with others.",
      author: "Emma Rodriguez",
      title: "CX Manager",
      company: "Global Services Ltd.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900 dark:text-white">
            Stories from Delighted Teams
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            See how SupportAI is creating meaningful connections and transforming customer relationships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-700 dark:text-slate-300 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 mr-3"></div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

