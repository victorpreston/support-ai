"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bot, Save, RefreshCw, Sparkles, MessageSquare, AlertCircle, User } from "lucide-react"

export function AIConfigurationPanel() {
  const [systemPrompt, setSystemPrompt] = useState(
    `You are SupportAI, a helpful customer support assistant.
Your goal is to provide accurate, friendly, and concise responses to customer inquiries.
If you don't know the answer to a question, acknowledge that and offer to connect the customer with a human agent.
Always maintain a professional and empathetic tone.`,
  )

  const [temperature, setTemperature] = useState(0.7)
  const [maxTokens, setMaxTokens] = useState(1000)
  const [model, setModel] = useState("gpt-4o")
  const [autoEscalation, setAutoEscalation] = useState(true)
  const [sentimentAnalysis, setSentimentAnalysis] = useState(true)
  const [knowledgeBaseIntegration, setKnowledgeBaseIntegration] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">AI Configuration</h1>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="prompts">Prompts & Responses</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Settings</TabsTrigger>
          <TabsTrigger value="testing">Testing & Evaluation</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Model Configuration</CardTitle>
              <CardDescription>Configure the AI model and its basic parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="model">AI Model</Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger id="model">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4o">GPT-4o (Recommended)</SelectItem>
                    <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                    <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  GPT-4o provides the best balance of performance and cost for customer support.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="temperature">Temperature: {temperature}</Label>
                <Slider
                  id="temperature"
                  min={0}
                  max={1}
                  step={0.1}
                  value={[temperature]}
                  onValueChange={(value) => setTemperature(value[0])}
                />
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>More Focused</span>
                  <span>More Creative</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-tokens">Max Response Length: {maxTokens} tokens</Label>
                <Slider
                  id="max-tokens"
                  min={100}
                  max={4000}
                  step={100}
                  value={[maxTokens]}
                  onValueChange={(value) => setMaxTokens(value[0])}
                />
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Shorter</span>
                  <span>Longer</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Features</CardTitle>
              <CardDescription>Enable or disable key AI capabilities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-escalation">Automatic Escalation</Label>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Automatically escalate complex issues to human agents
                  </p>
                </div>
                <Switch id="auto-escalation" checked={autoEscalation} onCheckedChange={setAutoEscalation} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sentiment-analysis">Sentiment Analysis</Label>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Detect customer emotions and adjust responses accordingly
                  </p>
                </div>
                <Switch id="sentiment-analysis" checked={sentimentAnalysis} onCheckedChange={setSentimentAnalysis} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="kb-integration">Knowledge Base Integration</Label>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Use your knowledge base to enhance AI responses
                  </p>
                </div>
                <Switch
                  id="kb-integration"
                  checked={knowledgeBaseIntegration}
                  onCheckedChange={setKnowledgeBaseIntegration}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prompts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Prompt</CardTitle>
              <CardDescription>Define how the AI should behave when interacting with customers</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                rows={8}
                className="font-mono text-sm"
              />
              <div className="flex justify-between mt-4">
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset to Default
                </Button>
                <Button size="sm">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Optimize Prompt
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Templates</CardTitle>
              <CardDescription>Create templates for common customer inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <Card className="col-span-1 p-4 border-dashed cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <div className="text-center">
                      <MessageSquare className="h-8 w-8 mx-auto mb-2 text-slate-400" />
                      <p className="font-medium">Add New Template</p>
                    </div>
                  </Card>

                  {["Password Reset", "Refund Request", "Shipping Status"].map((template) => (
                    <Card
                      key={template}
                      className="col-span-1 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer"
                    >
                      <div className="font-medium mb-1">{template}</div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                        Template for handling {template.toLowerCase()} inquiries...
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced AI Settings</CardTitle>
              <CardDescription>Fine-tune the AI behavior for specific use cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Response Style</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="bg-primary/10">
                      Friendly
                    </Button>
                    <Button variant="outline">Professional</Button>
                    <Button variant="outline">Concise</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frequency-penalty">Repetition Avoidance</Label>
                  <Slider id="frequency-penalty" min={0} max={2} step={0.1} defaultValue={[0.5]} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="presence-penalty">Topic Diversity</Label>
                  <Slider id="presence-penalty" min={0} max={2} step={0.1} defaultValue={[0.5]} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="context-window">Context Window (messages)</Label>
                  <Select defaultValue="10">
                    <SelectTrigger id="context-window">
                      <SelectValue placeholder="Select context window" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 messages</SelectItem>
                      <SelectItem value="10">10 messages</SelectItem>
                      <SelectItem value="15">15 messages</SelectItem>
                      <SelectItem value="20">20 messages</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Testing Console</CardTitle>
              <CardDescription>Test your AI configuration with sample customer inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white dark:bg-slate-700 p-3 rounded-lg">How do I reset my password?</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white dark:bg-slate-700 p-3 rounded-lg">
                        <p>I'd be happy to help you reset your password. You can do this by following these steps:</p>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                          <li>Go to the login page</li>
                          <li>Click on the "Forgot Password" link below the login form</li>
                          <li>Enter the email address associated with your account</li>
                          <li>Check your email for a password reset link</li>
                          <li>Click the link and follow the instructions to create a new password</li>
                        </ol>
                        <p className="mt-2">
                          If you don't receive the email within a few minutes, please check your spam folder. Is there
                          anything else you need help with?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Input placeholder="Enter a test question..." className="flex-1" />
                  <Button>Test</Button>
                </div>

                <div className="flex items-center p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-900">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                  <div className="text-sm text-amber-800 dark:text-amber-300">
                    Testing uses your current configuration but doesn't save any changes until you click "Save Changes".
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

