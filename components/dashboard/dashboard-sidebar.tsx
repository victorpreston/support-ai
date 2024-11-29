"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  Database,
  Bot,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Conversations",
    href: "/dashboard/conversations",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "AI Configuration",
    href: "/dashboard/ai-config",
    icon: <Bot className="h-5 w-5" />,
  },
  {
    title: "Knowledge Base",
    href: "/dashboard/knowledge-base",
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: "Team",
    href: "/dashboard/team",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Integrations",
    href: "/dashboard/integrations",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "Help & Support",
    href: "/dashboard/help",
    icon: <HelpCircle className="h-5 w-5" />,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-[calc(100vh-4rem)] sticky top-16">
      <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <nav className="flex-1 px-3 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                pathname === item.href
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                  : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white",
              )}
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

