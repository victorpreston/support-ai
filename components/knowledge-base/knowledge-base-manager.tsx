"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, FileText, FolderPlus, Edit, Trash2, Upload, Database, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample knowledge base articles
const articles = [
  {
    id: "kb-1",
    title: "How to Reset Your Password",
    category: "Account Management",
    lastUpdated: "2 days ago",
    status: "published",
    views: 1245,
  },
  {
    id: "kb-2",
    title: "Updating Billing Information",
    category: "Billing",
    lastUpdated: "1 week ago",
    status: "published",
    views: 876,
  },
  {
    id: "kb-3",
    title: "Cancelling Your Subscription",
    category: "Account Management",
    lastUpdated: "2 weeks ago",
    status: "published",
    views: 1532,
  },
  {
    id: "kb-4",
    title: "Tracking Your Order",
    category: "Orders",
    lastUpdated: "3 days ago",
    status: "published",
    views: 2145,
  },
  {
    id: "kb-5",
    title: "Requesting a Refund",
    category: "Billing",
    lastUpdated: "5 days ago",
    status: "published",
    views: 987,
  },
  {
    id: "kb-6",
    title: "Product Return Policy",
    category: "Orders",
    lastUpdated: "1 month ago",
    status: "published",
    views: 3210,
  },
  {
    id: "kb-7",
    title: "Two-Factor Authentication Setup",
    category: "Security",
    lastUpdated: "2 days ago",
    status: "draft",
    views: 0,
  },
  {
    id: "kb-8",
    title: "Changing Your Email Address",
    category: "Account Management",
    lastUpdated: "1 week ago",
    status: "published",
    views: 654,
  },
]

// Sample categories
const categories = [
  { id: "cat-1", name: "Account Management", count: 3 },
  { id: "cat-2", name: "Billing", count: 2 },
  { id: "cat-3", name: "Orders", count: 2 },
  { id: "cat-4", name: "Security", count: 1 },
  { id: "cat-5", name: "Troubleshooting", count: 0 },
]

export function KnowledgeBaseManager() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter articles based on search query and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Knowledge Base</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Article
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div
                className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                onClick={() => setSelectedCategory("all")}
              >
                <span className="font-medium">All Categories</span>
                <Badge variant="outline">{articles.length}</Badge>
              </div>

              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                    selectedCategory === category.name
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <span>{category.name}</span>
                  <Badge variant="outline">{category.count}</Badge>
                </div>
              ))}

              <Button variant="ghost" className="w-full justify-start mt-4">
                <FolderPlus className="mr-2 h-4 w-4" />
                Add Category
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main content */}
        <Card className="md:col-span-3">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Knowledge Base Articles</CardTitle>
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Sync with AI
              </Button>
            </div>
            <CardDescription>Manage your knowledge base articles that power the AI responses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                <Input
                  placeholder="Search articles..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Tabs */}
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="published">Published</TabsTrigger>
                  <TabsTrigger value="draft">Drafts</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-4">
                  <div className="space-y-2">
                    {filteredArticles.length > 0 ? (
                      filteredArticles.map((article) => <ArticleItem key={article.id} article={article} />)
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-slate-500 dark:text-slate-400">No articles found</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="published" className="mt-4">
                  <div className="space-y-2">
                    {filteredArticles.filter((a) => a.status === "published").length > 0 ? (
                      filteredArticles
                        .filter((a) => a.status === "published")
                        .map((article) => <ArticleItem key={article.id} article={article} />)
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-slate-500 dark:text-slate-400">No published articles found</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="draft" className="mt-4">
                  <div className="space-y-2">
                    {filteredArticles.filter((a) => a.status === "draft").length > 0 ? (
                      filteredArticles
                        .filter((a) => a.status === "draft")
                        .map((article) => <ArticleItem key={article.id} article={article} />)
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-slate-500 dark:text-slate-400">No draft articles found</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Integration Card */}
      <Card>
        <CardHeader>
          <CardTitle>AI Knowledge Integration</CardTitle>
          <CardDescription>Configure how your knowledge base is used by the AI</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-1">Knowledge Retrieval</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                AI automatically retrieves relevant knowledge base articles when answering customer queries.
              </p>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Active</Badge>
            </div>

            <div className="p-4 border rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-1">Article Suggestions</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                AI suggests relevant articles to customers based on conversation context.
              </p>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Active</Badge>
            </div>

            <div className="p-4 border rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <RefreshCw className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-1">Knowledge Gaps</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                AI identifies missing information in your knowledge base based on customer questions.
              </p>
              <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                3 gaps detected
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ArticleItem({ article }: { article: any }) {
  return (
    <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
            <FileText className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="font-medium text-slate-900 dark:text-white">{article.title}</h3>
              {article.status === "draft" && (
                <Badge variant="outline" className="ml-2">
                  Draft
                </Badge>
              )}
            </div>
            <div className="flex items-center mt-1 text-sm text-slate-500 dark:text-slate-400">
              <span className="mr-3">{article.category}</span>
              <span>Updated {article.lastUpdated}</span>
              {article.status === "published" && <span className="ml-3">{article.views.toLocaleString()} views</span>}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

