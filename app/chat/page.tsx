"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, Send, User, Paperclip, Mic, ThumbsUp, ThumbsDown } from "lucide-react"
import { useChat } from "@ai-sdk/react"

export default function ChatPage() {
  const { messages, sendMessage, status, error } = useChat({
    api: "/api/chat",
  })

  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({})

  const isLoading = status === "loading"

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    
    const message = input
    setInput("")
    sendMessage(message)
  }

  const handleFeedback = (messageId: string, isPositive: boolean) => {
    // In a real app, you would send this feedback to your API
    console.log(`Feedback for message ${messageId}: ${isPositive ? "positive" : "negative"}`)
    setShowFeedback((prev) => ({
      ...prev,
      [messageId]: false,
    }))
  }

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-6 w-6 text-primary mr-2" />
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">SupportAI Chat</h1>
          </div>
          <Button variant="outline" size="sm">
            Start New Chat
          </Button>
        </div>
      </header>

      {/* Chat container */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Welcome message */}
          {messages.length === 0 && (
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Welcome to SupportAI</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                How can I help you today? Ask me anything about our products or services.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="outline" className="flex items-center justify-center">
                  <span>How do I reset my password?</span>
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <span>What are your business hours?</span>
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <span>I need to cancel my order</span>
                </Button>
              </div>
            </Card>
          )}

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
            <Input value={input} onChange={handleInputChange} placeholder="Type your message..." className="flex-1" />
            <Button type="button" variant="ghost" size="icon">
              <Mic className="h-5 w-5" />
            </Button>
            <Button type="submit" size="icon" disabled={isLoading || !input?.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </form>
          <div className="text-xs text-center mt-2 text-slate-500 dark:text-slate-400">
            SupportAI may produce inaccurate information about people, places, or facts.
          </div>
        </div>
      </div>
    </div>
  )
}

