"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PerformanceChart() {
  const [timeRange, setTimeRange] = useState("30d")

  // This would be replaced with actual chart implementation
  // using a library like Recharts, Chart.js, or ApexCharts
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className={timeRange === "7d" ? "bg-primary/10" : ""}
            onClick={() => setTimeRange("7d")}
          >
            7D
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={timeRange === "30d" ? "bg-primary/10" : ""}
            onClick={() => setTimeRange("30d")}
          >
            30D
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={timeRange === "90d" ? "bg-primary/10" : ""}
            onClick={() => setTimeRange("90d")}
          >
            90D
          </Button>
        </div>

        <Select defaultValue="resolution">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select metric" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="resolution">AI Resolution Rate</SelectItem>
            <SelectItem value="response">Response Time</SelectItem>
            <SelectItem value="satisfaction">Satisfaction Score</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Placeholder for actual chart */}
      <div className="h-[300px] bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden">
        {/* Mock chart elements */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] flex items-end px-4">
          {Array.from({ length: 30 }).map((_, i) => {
            const height = 30 + Math.random() * 120
            return (
              <div key={i} className="flex-1 mx-[1px] bg-primary/80 rounded-t-sm" style={{ height: `${height}px` }} />
            )
          })}
        </div>

        {/* Y-axis labels */}
        <div className="absolute top-0 left-0 h-full flex flex-col justify-between py-4 px-2 text-xs text-slate-500 dark:text-slate-400">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-4 pb-2 text-xs text-slate-500 dark:text-slate-400">
          <span>Apr 1</span>
          <span>Apr 15</span>
          <span>Apr 30</span>
        </div>
      </div>
    </div>
  )
}

