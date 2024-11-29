"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, User } from "lucide-react"

export function RecentConversations() {
  const conversations = [
    {
      id: "conv-1",
      customer: "Sarah Johnson",
      email: "sarah.j@example.com",
      time: "10 minutes ago",
      preview: "I'm having trouble with my account login...",
      status: "active",
      resolved: false,
      handledBy: "ai",
    },
    {
      id: "conv-2",
      customer: "Michael Chen",
      email: "m.chen@example.com",
      time: "25 minutes ago",
      preview: "How do I update my billing information?",
      status: "resolved",
      resolved: true,
      handledBy: "ai",
    },
    {
      id: "conv-3",
      customer: "Emma Rodriguez",
      email: "emma.r@example.com",
      time: "1 hour ago",
      preview: "I need to cancel my subscription...",
      status: "escalated",
      resolved: false,
      handledBy: "human",
    },
    {
      id: "conv-4",
      customer: "David Kim",
      email: "d.kim@example.com",
      time: "2 hours ago",
      preview: "When will my order be shipped?",
      status: "resolved",
      resolved: true,
      handledBy: "ai",
    },
    {
      id: "conv-5",
      customer: "Lisa Wang",
      email: "lisa.w@example.com",
      time: "3 hours ago",
      preview: "I received the wrong item in my order...",
      status: "escalated",
      resolved: false,
      handledBy: "human",
    },
  ]

  return (
    <div className="space-y-4">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className="flex items-start p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <Avatar className="h-10 w-10 mr-3">
            <AvatarFallback className="bg-primary/10 text-primary">{conversation.customer.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{conversation.customer}</p>
                <Badge
                  variant={
                    conversation.status === "active"
                      ? "default"
                      : conversation.status === "resolved"
                        ? "outline"
                        : "destructive"
                  }
                  className="ml-2"
                >
                  {conversation.status}
                </Badge>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">{conversation.time}</span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 truncate mb-1">{conversation.preview}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                  <span>Handled by:</span>
                  {conversation.handledBy === "ai" ? (
                    <div className="flex items-center ml-1 text-primary">
                      <Bot className="h-3 w-3 mr-1" />
                      <span>AI</span>
                    </div>
                  ) : (
                    <div className="flex items-center ml-1 text-slate-700 dark:text-slate-300">
                      <User className="h-3 w-3 mr-1" />
                      <span>Agent</span>
                    </div>
                  )}
                </div>
              </div>

              <Button variant="ghost" size="sm" className="h-7">
                View
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center pt-2">
        <Button variant="link" size="sm">
          View All Conversations
        </Button>
      </div>
    </div>
  )
}

