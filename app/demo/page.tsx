"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, Send, User, Paperclip, Mic, ThumbsUp, ThumbsDown, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content:
        "👋 Hi there! I'm SupportAI. How can I help you today? Feel free to ask me anything about our products or services.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({})

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleFeedback = (messageId: string, isPositive: boolean) => {
    // In a real app, you would send this feedback to your API
    console.log(`Feedback for message ${messageId}: ${isPositive ? "positive" : "negative"}`)
    setShowFeedback((prev) => ({
      ...prev,
      [messageId]: false,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Clear input and show loading
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      // Simple demo responses based on keywords
      const lowerInput = input.toLowerCase()

      if (lowerInput.includes("password") || lowerInput.includes("reset")) {
        response =
          "To reset your password, please click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password. If you don't receive the email within a few minutes, please check your spam folder."
      } else if (lowerInput.includes("refund") || lowerInput.includes("return")) {
        response =
          "Our refund policy allows returns within 30 days of purchase. To initiate a refund, please go to your order history, select the order, and click 'Request Refund'. If you have any issues with this process, please provide your order number and I can help you further."
      } else if (lowerInput.includes("shipping") || lowerInput.includes("delivery")) {
        response =
          "Standard shipping typically takes 3-5 business days. Premium shipping is 1-2 business days. International shipping may take 7-14 business days. You can track your order status in your account under 'Order History'. Would you like me to explain how to track a specific order?"
      } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("discount")) {
        response =
          "Our pricing is available on the Pricing page. We offer monthly and annual plans with discounts for annual commitments. We also offer special discounts for non-profits and educational institutions. Would you like me to provide more details about a specific plan?"
      } else if (lowerInput.includes("contact") || lowerInput.includes("human") || lowerInput.includes("agent")) {
        response =
          "If you'd like to speak with a human agent, our support team is available Monday-Friday, 9am-5pm EST. You can reach them at support@example.com or by phone at (555) 123-4567. Would you like me to connect you with someone now?"
      } else {
        response =
          "Thank you for your question. I'd be happy to help with that. Could you provide a bit more information so I can give you the most accurate answer? For example, if you're asking about a specific product or service, please let me know which one."
      }

      // Add AI response
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <Bot className="h-6 w-6 text-primary mr-2" />
            <h1 className="text-xl font-bold text-slate-900">SupportAI Demo</h1>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      {/* Chat container */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Demo instructions */}
          <Card className="p-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
            <p className="text-amber-800 dark:text-amber-300 text-sm">
              This is a demo of our AI-powered customer support system. Try asking questions about password resets,
              refunds, shipping, pricing, or request to speak with a human agent.
            </p>
          </Card>

          {/* Chat messages */}
          {messages.map((message, index) => {
            const isUser = message.role === "user"
            const messageId = `msg-${index}`

            return (
              <div key={index} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                <div className={`flex items-start max-w-[80%] ${isUser ? "flex-row-reverse" : ""}`}>
                  <Avatar className={`h-8 w-8 ${isUser ? "ml-2" : "mr-2"}`}>
                    <AvatarFallback className={isUser ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"}>
                      {isUser ? (
                        <User className="h-4 w-4 text-primary-foreground" />
                      ) : (
                        <Bot className="h-4 w-4 text-primary" />
                      )}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div
                      className={`rounded-lg p-3 ${
                        isUser
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-bl-none"
                      }`}
                    >
                      <p className={isUser ? "" : "text-slate-900 dark:text-slate-100"}>{message.content}</p>
                    </div>

                    {!isUser && (
                      <div className="flex items-center mt-1 ml-1">
                        {showFeedback[messageId] ? (
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => handleFeedback(messageId, true)}
                            >
                              <ThumbsUp className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => handleFeedback(messageId, false)}
                            >
                              <ThumbsDown className="h-3 w-3" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 text-xs text-slate-500 dark:text-slate-400"
                            onClick={() => setShowFeedback((prev) => ({ ...prev, [messageId]: true }))}
                          >
                            Was this helpful?
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start max-w-[80%]">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarFallback className="bg-slate-200 dark:bg-slate-700">
                    <Bot className="h-4 w-4 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <div className="rounded-lg p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-bl-none">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="icon">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="button" variant="ghost" size="icon">
              <Mic className="h-5 w-5" />
            </Button>
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </form>
          <div className="text-xs text-center mt-2 text-slate-500 dark:text-slate-400">
            This is a demo. Try asking about password resets, refunds, shipping, or pricing.
          </div>
        </div>
      </div>
    </div>
  )
}

