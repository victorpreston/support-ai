"use client"

// This would be replaced with actual chart implementation
export function TopIssuesChart() {
  const issues = [
    { name: "Password Reset", count: 245 },
    { name: "Billing Issues", count: 187 },
    { name: "Product Questions", count: 156 },
    { name: "Shipping Status", count: 132 },
    { name: "Refund Requests", count: 98 },
  ]

  // Calculate max value for scaling
  const maxCount = Math.max(...issues.map((issue) => issue.count))

  return (
    <div className="h-[250px] flex flex-col justify-center">
      <div className="space-y-3">
        {issues.map((issue, index) => (
          <div key={index} className="flex items-center">
            <div className="w-32 text-sm truncate mr-2">{issue.name}</div>
            <div className="flex-1">
              <div className="h-5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${(issue.count / maxCount) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="w-10 text-right text-sm ml-2">{issue.count}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

