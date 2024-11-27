"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Filter, Bot, User, Clock, CheckCircle2, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample conversation data
const conversations = [
  {
    id: "conv-1",
    customer: "Sarah Johnson",
    email: "sarah.j@example.com",
    time: "10 minutes ago",
    preview:
      "I'm having trouble with my account login. I've tried resetting my password but I'm not receiving the email.",
    status: "active",
    resolved: false,
    handledBy: "ai",
    priority: "medium",
  },
  {
    id: "conv-2",
    customer: "Michael Chen",
    email: "m.chen@example.com",
    time: "25 minutes ago",
    preview: "How do I update my billing information? I need to change my credit card details.",
    status: "resolved",
    resolved: true,
    handledBy: "ai",
    priority: "low",
  },
  {
    id: "conv-3",
    customer: "Emma Rodriguez",
    email: "emma.r@example.com",
    time: "1 hour ago",
    preview: "I need to cancel my subscription immediately. I'm not satisfied with the service.",
    status: "escalated",
    resolved: false,
    handledBy: "human",
    priority: "high",
  },
  {
    id: "conv-4",
    customer: "David Kim",
    email: "d.kim@example.com",
    time: "2 hours ago",
    preview: "When will my order be shipped? I placed it 3 days ago and haven't received any updates.",
    status: "resolved",
    resolved: true,
    handledBy: "ai",
    priority: "medium",
  },
  {
    id: "conv-5",
    customer: "Lisa Wang",
    email: "lisa.w@example.com",
    time: "3 hours ago",
    preview: "I received the wrong item in my order. I ordered the blue version but received the red one.",
    status: "escalated",
    resolved: false,
    handledBy: "human",
    priority: "high",
  },
  {
    id: "conv-6",
    customer: "James Wilson",
    email: "j.wilson@example.com",
    time: "4 hours ago",
    preview: "Do you offer discounts for bulk orders? I'm looking to purchase for my entire team.",
    status: "active",
    resolved: false,
    handledBy: "ai",
    priority: "low",
  },
  {
    id: "conv-7",
    customer: "Olivia Martinez",
    email: "o.martinez@example.com",
    time: "5 hours ago",
    preview: "The checkout process isn't working on your website. I keep getting an error at the payment step.",
    status: "escalated",
    resolved: false,
    handledBy: "human",
    priority: "high",
  },
  {
    id: "conv-8",
    customer: "Robert Taylor",
    email: "r.taylor@example.com",
    time: "6 hours ago",
    preview: "I'd like to request a refund for my last purchase. The product doesn't meet my expectations.",
    status: "active",
    resolved: false,
    handledBy: "ai",
    priority: "medium",
  },
]

export function ConversationsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [handlerFilter, setHandlerFilter] = useState("all")

  // Filter conversations based on search query and filters
  const filteredConversations = conversations.filter((conv) => {
    // Search filter
    const matchesSearch =
      conv.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.preview.toLowerCase().includes(searchQuery.toLowerCase())

    // Status filter
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && conv.status === "active") ||
      (statusFilter === "resolved" && conv.status === "resolved") ||
      (statusFilter === "escalated" && conv.status === "escalated")

    // Handler filter
    const matchesHandler =
      handlerFilter === "all" ||
      (handlerFilter === "ai" && conv.handledBy === "ai") ||
      (handlerFilter === "human" && conv.handledBy === "human")

    return matchesSearch && matchesStatus && matchesHandler
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Conversations</h1>
        <Button>New Conversation</Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>All Conversations</CardTitle>
          <CardDescription>View and manage all customer conversations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Search and filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[130px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="escalated">Escalated</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={handlerFilter} onValueChange={setHandlerFilter}>
                  <SelectTrigger className="w-[130px]">
                    <User className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Handler" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Handlers</SelectItem>
                    <SelectItem value="ai">AI Only</SelectItem>
                    <SelectItem value="human">Human Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="escalated">Escalated</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-4">
                <div className="space-y-2">
                  {filteredConversations.length > 0 ? (
                    filteredConversations.map((conversation) => (
                      <ConversationItem key={conversation.id} conversation={conversation} />
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-slate-500 dark:text-slate-400">No conversations found</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="active" className="mt-4">
                <div className="space-y-2">
                  {filteredConversations.filter((c) => c.status === "active").length > 0 ? (
                    filteredConversations
                      .filter((c) => c.status === "active")
                      .map((conversation) => <ConversationItem key={conversation.id} conversation={conversation} />)
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-slate-500 dark:text-slate-400">No active conversations found</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="escalated" className="mt-4">
                <div className="space-y-2">
                  {filteredConversations.filter((c) => c.status === "escalated").length > 0 ? (
                    filteredConversations
                      .filter((c) => c.status === "escalated")
                      .map((conversation) => <ConversationItem key={conversation.id} conversation={conversation} />)
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-slate-500 dark:text-slate-400">No escalated conversations found</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="resolved" className="mt-4">
                <div className="space-y-2">
                  {filteredConversations.filter((c) => c.status === "resolved").length > 0 ? (
                    filteredConversations
                      .filter((c) => c.status === "resolved")
                      .map((conversation) => <ConversationItem key={conversation.id} conversation={conversation} />)
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-slate-500 dark:text-slate-400">No resolved conversations found</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ConversationItem({ conversation }: { conversation: any }) {
  return (
    <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-primary/10 text-primary">{conversation.customer.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <p className="font-medium text-slate-900 dark:text-white truncate">{conversation.customer}</p>
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

              <Badge
                variant="outline"
                className={`ml-2 ${
                  conversation.priority === "high"
                    ? "border-red-500 text-red-500"
                    : conversation.priority === "medium"
                      ? "border-amber-500 text-amber-500"
                      : "border-green-500 text-green-500"
                }`}
              >
                {conversation.priority}
              </Badge>
            </div>

            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <Clock className="h-3 w-3 mr-1" />
              <span>{conversation.time}</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-2">{conversation.preview}</p>

          <div className="flex items-center justify-between">
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

            <div className="flex gap-2">
              {conversation.status === "resolved" ? (
                <Badge variant="outline" className="flex items-center gap-1 border-green-500 text-green-500">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Resolved</span>
                </Badge>
              ) : conversation.status === "escalated" ? (
                <Badge variant="outline" className="flex items-center gap-1 border-red-500 text-red-500">
                  <AlertCircle className="h-3 w-3" />
                  <span>Escalated</span>
                </Badge>
              ) : null}

              <Button size="sm" variant="outline">
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

