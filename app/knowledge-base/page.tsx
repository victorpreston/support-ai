import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { KnowledgeBaseManager } from "@/components/knowledge-base/knowledge-base-manager"

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <KnowledgeBaseManager />
        </main>
      </div>
    </div>
  )
}

