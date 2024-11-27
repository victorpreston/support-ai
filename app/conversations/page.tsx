import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { ConversationsList } from "@/components/conversations/conversations-list"

export default function ConversationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <ConversationsList />
        </main>
      </div>
    </div>
  )
}

