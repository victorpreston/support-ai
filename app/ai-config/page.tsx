import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { AIConfigurationPanel } from "@/components/ai-config/ai-configuration-panel"

export default function AIConfigPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <AIConfigurationPanel />
        </main>
      </div>
    </div>
  )
}

