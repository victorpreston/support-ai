"use client"

// This would be replaced with actual chart implementation
export function ResolutionRateChart() {
  return (
    <div className="h-[250px] bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden">
      {/* Mock chart - circular progress */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32 h-32">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full border-8 border-slate-200 dark:border-slate-700"></div>

          {/* Progress circle - 68% */}
          <div
            className="absolute inset-0 rounded-full border-8 border-primary"
            style={{
              clipPath: "polygon(50% 50%, 0% 0%, 0% 100%, 100% 100%, 100% 0%)",
              transform: "rotate(65deg)",
            }}
          ></div>

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">68%</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Resolution Rate</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-primary rounded-full mr-1"></div>
          <span className="text-slate-700 dark:text-slate-300">AI Resolved</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full mr-1"></div>
          <span className="text-slate-700 dark:text-slate-300">Human Assisted</span>
        </div>
      </div>
    </div>
  )
}

