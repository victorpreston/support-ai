"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { CalendarIcon, Loader2 } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ContentCalendar } from "@/components/content-calendar"

const industries = [
  "Technology",
  "E-commerce",
  "Healthcare",
  "Finance",
  "Education",
  "Food & Beverage",
  "Travel",
  "Fashion",
  "Real Estate",
  "Entertainment",
]

const platforms = ["Instagram", "Twitter/X", "LinkedIn", "Facebook", "TikTok", "YouTube", "Pinterest", "Blog"]

export function CalendarGenerator() {
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    description: "",
    goals: "",
    contentFrequency: 3,
    platforms: [] as string[],
  })

  const handlePlatformToggle = (platform: string) => {
    setFormData((prev) => {
      if (prev.platforms.includes(platform)) {
        return {
          ...prev,
          platforms: prev.platforms.filter((p) => p !== platform),
        }
      } else {
        return {
          ...prev,
          platforms: [...prev.platforms, platform],
        }
      }
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSliderChange = (value: number[]) => {
    setFormData((prev) => ({
      ...prev,
      contentFrequency: value[0],
    }))
  }

  const generateCalendar = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setGenerated(true)
    }, 2000)
  }

  return (
    <div>
      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="generator">Generator</TabsTrigger>
          <TabsTrigger value="calendar" disabled={!generated}>
            Calendar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="generator">
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  name="businessName"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select onValueChange={(value) => handleSelectChange("industry", value)} value={formData.industry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Business Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Briefly describe your business and target audience"
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="goals">Content Goals</Label>
                <Textarea
                  id="goals"
                  name="goals"
                  placeholder="What are your content marketing goals? (e.g., increase brand awareness, drive sales, etc.)"
                  rows={2}
                  value={formData.goals}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label>Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label>Content Frequency (posts per week)</Label>
                <div className="pt-4 pb-2">
                  <Slider defaultValue={[3]} max={7} min={1} step={1} onValueChange={handleSliderChange} />
                </div>
                <div className="text-center text-sm text-slate-500 dark:text-slate-400">
                  {formData.contentFrequency} post{formData.contentFrequency > 1 ? "s" : ""} per week
                </div>
              </div>

              <div>
                <Label className="mb-2 block">Platforms</Label>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((platform) => (
                    <Button
                      key={platform}
                      variant={formData.platforms.includes(platform) ? "default" : "outline"}
                      onClick={() => handlePlatformToggle(platform)}
                      className="mb-2"
                    >
                      {platform}
                    </Button>
                  ))}
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={generateCalendar} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Calendar...
                  </>
                ) : (
                  "Generate Content Calendar"
                )}
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <ContentCalendar />
        </TabsContent>
      </Tabs>
    </div>
  )
}

