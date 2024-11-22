"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { format, addDays, startOfWeek, addWeeks, subWeeks } from "date-fns"

// Sample generated content calendar data
const generateSampleData = (startDate: Date) => {
  const platforms = ["Instagram", "Twitter/X", "LinkedIn", "Facebook", "TikTok"]
  const contentTypes = [
    "Product showcase",
    "Industry news",
    "Customer testimonial",
    "Behind the scenes",
    "How-to guide",
    "Inspirational quote",
    "Poll/Question",
    "User-generated content",
    "Promotional offer",
  ]

  const calendar = []

  // Generate 3 weeks of content
  for (let week = 0; week < 3; week++) {
    const weekStart = addWeeks(startDate, week)

    // Generate 3-5 posts per week
    const postsCount = Math.floor(Math.random() * 3) + 3

    for (let i = 0; i < postsCount; i++) {
      const dayOffset = Math.floor(Math.random() * 7)
      const postDate = addDays(weekStart, dayOffset)

      const platform = platforms[Math.floor(Math.random() * platforms.length)]
      const contentType = contentTypes[Math.floor(Math.random() * contentTypes.length)]

      calendar.push({
        date: postDate,
        platform,
        contentType,
        title: `${contentType} post for ${format(postDate, "MMMM d")}`,
        description: `This ${platform} post will focus on ${contentType.toLowerCase()} to engage your audience and drive your business goals.`,
      })
    }
  }

  // Sort by date
  return calendar.sort((a, b) => a.date.getTime() - b.date.getTime())
}

export function ContentCalendar() {
  const today = new Date()
  const [currentDate, setCurrentDate] = useState(startOfWeek(today))
  const [calendarData] = useState(generateSampleData(today))

  const nextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1))
  }

  const prevWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1))
  }

  // Get posts for the current week
  const weekStart = startOfWeek(currentDate)
  const weekEnd = addDays(weekStart, 6)

  const currentWeekPosts = calendarData.filter((post) => post.date >= weekStart && post.date <= weekEnd)

  // Group posts by day
  const postsByDay = currentWeekPosts.reduce(
    (acc, post) => {
      const dayKey = format(post.date, "yyyy-MM-dd")
      if (!acc[dayKey]) {
        acc[dayKey] = []
      }
      acc[dayKey].push(post)
      return acc
    },
    {} as Record<string, typeof calendarData>,
  )

  // Generate days of the week
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Calendar</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={prevWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="font-medium">
            {format(weekStart, "MMM d")} - {format(weekEnd, "MMM d, yyyy")}
          </div>
          <Button variant="outline" onClick={nextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Calendar
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {weekDays.map((day) => {
          const dayKey = format(day, "yyyy-MM-dd")
          const dayPosts = postsByDay[dayKey] || []
          const isToday = format(day, "yyyy-MM-dd") === format(today, "yyyy-MM-dd")

          return (
            <div key={dayKey} className="min-h-[200px]">
              <div
                className={`text-center p-2 rounded-t-lg font-medium ${
                  isToday ? "bg-primary text-primary-foreground" : "bg-slate-100 dark:bg-slate-800"
                }`}
              >
                <div>{format(day, "EEE")}</div>
                <div>{format(day, "d")}</div>
              </div>

              <div className="border border-t-0 rounded-b-lg p-2 h-full">
                {dayPosts.length > 0 ? (
                  <div className="space-y-2">
                    {dayPosts.map((post, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-3">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <Badge className="mb-1">{post.platform}</Badge>
                              <div className="text-sm font-medium line-clamp-2">{post.title}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-sm text-slate-500 dark:text-slate-400">
                    No content
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Upcoming Content Details</h3>
        <div className="space-y-4">
          {currentWeekPosts.map((post, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>{post.platform}</Badge>
                      <Badge variant="outline">{post.contentType}</Badge>
                      <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        {format(post.date, "MMM d, yyyy")}
                      </div>
                    </div>
                    <h4 className="font-medium mb-1">{post.title}</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{post.description}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

