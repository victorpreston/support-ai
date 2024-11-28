"use client"

// This would be replaced with actual chart implementation
export function SentimentAnalysisChart() {
  const sentiments = [
    { name: "Positive", percentage: 65, color: "bg-green-500" },
    { name: "Neutral", percentage: 25, color: "bg-slate-400" },
    { name: "Negative", percentage: 10, color: "bg-red-500" },
  ]

  return (
    <div className="h-[250px] flex flex-col justify-center">
      {/* Donut chart */}
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32">
          {/* Create donut segments */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#22c55e"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="87.92"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#94a3b8"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="188.4"
              transform="rotate(-90 50 50)"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#ef4444"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="226.08"
              transform="rotate(-180 50 50)"
            />
          </svg>

          {/* Center hole */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4">
        {sentiments.map((sentiment, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-1 ${sentiment.color}`}></div>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              {sentiment.name} ({sentiment.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

