"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Clock, ThumbsUp, ArrowUpRight, ArrowDownRight, Bot, RefreshCw } from "lucide-react"
import { RecentConversations } from "@/components/dashboard/recent-conversations"
import { PerformanceChart } from "@/components/dashboard/performance-chart"

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Conversations",
      value: "3,248",
      change: "+12%",
      trend: "up",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "AI Resolution Rate",
      value: "68%",
      change: "+5%",
      trend: "up",
      icon: <Bot className="h-5 w-5" />,
    },
    {
      title: "Avg. Response Time",
      value: "45s",
      change: "-18%",
      trend: "up", // Down is good for response time
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: "Customer Satisfaction",
      value: "94%",
      change: "+2%",
      trend: "up",
      icon: <ThumbsUp className="h-5 w-5" />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <Button>
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh Data
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className={`flex items-center ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                  <span className="text-sm font-medium">{stat.change}</span>
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="ml-1 h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.title}</h3>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>AI resolution rate and response times over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <PerformanceChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Conversations</CardTitle>
                <CardDescription>Latest customer interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentConversations />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analytics</CardTitle>
              <CardDescription>In-depth analysis of your support performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed rounded-lg">
                <p className="text-slate-600 dark:text-slate-400">Detailed analytics charts will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Custom Reports</CardTitle>
              <CardDescription>Generate and schedule custom reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed rounded-lg">
                <p className="text-slate-600 dark:text-slate-400">Report generation interface will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

