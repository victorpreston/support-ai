import {
  MessageSquareText,
  BrainCircuit,
  BarChart3,
  Users,
  Zap,
  Database,
  Sparkles,
  RefreshCw,
  Shield,
} from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <MessageSquareText className="h-6 w-6" />,
      title: "Human-like Conversations",
      description: "Create natural, empathetic interactions that make customers feel truly understood",
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Intelligent Prioritization",
      description: "Ensure urgent issues get immediate attention, so no customer feels ignored",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Insight-driven Support",
      description: "Understand customer sentiment and needs before they even express them",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Perfect Handoffs",
      description: "Create seamless transitions that make customers feel valued, not passed around",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Gratification",
      description: "Deliver immediate responses that show customers their time matters to you",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Knowledge Amplification",
      description: "Turn your existing knowledge into powerful customer experiences",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Emotional Intelligence",
      description: "Detect customer emotions and respond with appropriate empathy and care",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Continuous Improvement",
      description: "Build relationships that grow stronger with every interaction",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trust & Security",
      description: "Protect customer data with the same care you'd protect your own",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900 dark:text-white">
            Transform Every Support Interaction
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Create meaningful connections that turn customers into loyal advocates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

