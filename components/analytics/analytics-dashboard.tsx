"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Calendar, ArrowUpRight, ArrowDownRight, Bot, Clock, ThumbsUp, Users } from "lucide-react"
import { ConversationVolumeChart } from "@/components/analytics/conversation-volume-chart"
import { ResolutionRateChart } from "@/components/analytics/resolution-rate-chart"
import { TopIssuesChart } from "@/components/analytics/top-issues-chart"
import { SentimentAnalysisChart } from "@/components/analytics/sentiment-analysis-chart"

export function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState("30d")

  const stats = [
    {
      title: "Total Conversations",
      value: "3,248",
      change: "+12%",
      trend: "up",
      icon: <Users className="h-5 w-5" />,
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
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
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
          <TabsTrigger value="conversations">Conversations</TabsTrigger>
          <TabsTrigger value="performance">AI Performance</TabsTrigger>
          <TabsTrigger value="satisfaction">Customer Satisfaction</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Conversation Volume</CardTitle>
                <CardDescription>Total conversations over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ConversationVolumeChart />
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>AI Resolution Rate</CardTitle>
                <CardDescription>Percentage of issues resolved by AI without human intervention</CardDescription>
              </CardHeader>
              <CardContent>
                <ResolutionRateChart />
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Top Customer Issues</CardTitle>
                <CardDescription>Most common customer inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <TopIssuesChart />
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Sentiment Analysis</CardTitle>
                <CardDescription>Customer sentiment during conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <SentimentAnalysisChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conversations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversation Analytics</CardTitle>
              <CardDescription>Detailed analysis of customer conversations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed rounded-lg">
                <p className="text-slate-600 dark:text-slate-400">Detailed conversation analytics will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Performance Metrics</CardTitle>
              <CardDescription>Detailed analysis of AI performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed rounded-lg">
                <p className="text-slate-600 dark:text-slate-400">AI performance metrics will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="satisfaction" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction</CardTitle>
              <CardDescription>Analysis of customer satisfaction metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed rounded-lg">
                <p className="text-slate-600 dark:text-slate-400">Customer satisfaction metrics will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

