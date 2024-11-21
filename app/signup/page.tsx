"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Loader2 } from "lucide-react"

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // In a real app, you would redirect to the dashboard or show a success message
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/" className="font-bold text-xl text-slate-900">
              SupportAI
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">Already have an account?</span>
            <Button variant="outline" asChild>
              <Link href="/login">Log in</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
              <CardDescription>Get started with SupportAI today</CardDescription>
            </CardHeader>

            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="sso">SSO</TabsTrigger>
              </TabsList>

              <TabsContent value="email">
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Create a password" required />
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Must be at least 8 characters with 1 uppercase, 1 number, and 1 special character
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col">
                    <Button className="w-full" type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating account...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>

                    <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4">
                      By creating an account, you agree to our{" "}
                      <Link href="/terms" className="underline hover:text-primary">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="underline hover:text-primary">
                        Privacy Policy
                      </Link>
                    </p>
                  </CardFooter>
                </form>
              </TabsContent>

              <TabsContent value="sso">
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                        <path d="M1 1h22v22H1z" fill="none" />
                      </svg>
                      Continue with Google
                    </Button>

                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Continue with GitHub
                    </Button>

                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M6.28571 20C5.63571 20 5.07857 19.7693 4.61429 19.308C4.15 18.8467 3.91786 18.2933 3.91786 17.648V6.352C3.91786 5.70667 4.15 5.15333 4.61429 4.692C5.07857 4.23067 5.63571 4 6.28571 4H17.7143C18.3643 4 18.9214 4.
23067 19.3857 4.692C19.85 5.15333 20.0821 5.70667 20.0821 6.352V17.648C20.0821 18.2933 19.85 18.8467 19.3857 19.308C18.9214 19.7693 18.3643 20 17.7143 20H6.28571ZM12.0036 9.2C11.6393 9.2 11.3321 9.32 11.0821 9.56C10.8321 9.8 10.7071 10.0933 10.7071 10.44V10.456C10.7071 10.616 10.7357 10.7613 10.7929 10.892C10.85 11.0227 10.9357 11.1387 11.05 11.24C11.1071 11.288 11.1714 11.3307 11.2429 11.368C11.3143 11.4053 11.3857 11.4373 11.4571 11.464C11.5286 11.4907 11.5964 11.512 11.6607 11.528C11.725 11.544 11.7786 11.56 11.8214 11.576C11.8929 11.6 11.9607 11.6213 12.025 11.64C12.0893 11.6587 12.1464 11.68 12.1964 11.704C12.2464 11.728 12.2857 11.7573 12.3143 11.792C12.3429 11.8267 12.3571 11.8693 12.3571 11.92C12.3571 12.0133 12.3214 12.088 12.25 12.144C12.1786 12.2 12.0857 12.228 11.9714 12.228C11.8571 12.228 11.7643 12.1973 11.6929 12.136C11.6214 12.0747 11.5857 11.9947 11.5857 11.896H10.7071C10.7071 12.1013 10.7571 12.284 10.8571 12.444C10.9571 12.604 11.0929 12.7293 11.2643 12.82C11.4357 12.9107 11.6286 12.956 11.8429 12.956C12.0571 12.956 12.2464 12.9107 12.4107 12.82C12.575 12.7293 12.7036 12.604 12.7964 12.444C12.8893 12.284 12.9357 12.1013 12.9357 11.896C12.9357 11.736 12.9071 11.5933 12.85 11.468C12.7929 11.3427 12.7071 11.2347 12.5929 11.144C12.5357 11.096 12.4714 11.0533 12.4 11.016C12.3286 10.9787 12.2571 10.9467 12.1857 10.92C12.1143 10.8933 12.0464 10.872 11.9821 10.856C11.9179 10.84 11.8643 10.824 11.8214 10.808C11.75 10.784 11.6821 10.7627 11.6179 10.744C11.5536 10.7253 11.4964 10.704 11.4464 10.68C11.3964 10.656 11.3571 10.6267 11.3286 10.592C11.3 10.5573 11.2857 10.5147 11.2857 10.464C11.2857 10.3707 11.3214 10.296 11.3929 10.24C11.4643 10.184 11.5571 10.156 11.6714 10.156C11.7714 10.156 11.8536 10.184 11.9179 10.24C11.9821 10.296 12.0143 10.3707 12.0143 10.464H12.8929C12.8929 10.2587 12.8429 10.0787 12.7429 9.924C12.6429 9.76933 12.5071 9.64133 12.3357 9.548C12.1643 9.45467 11.9714 9.408 11.7571 9.408L12.0036 9.2ZM8.07143 9.24V12.916H8.95V11.896H9.95V11.168H8.95V9.968H10.15V9.24H8.07143ZM14.8286 9.24L13.9571 12.916H14.8357L15.0071 12.224H16.0071L16.1786 12.916H17.0571L16.1857 9.24H14.8286ZM15.1786 11.496L15.5071 10.152L15.8357 11.496H15.1786Z"
                        />
                      </svg>
                      Continue with SSO
                    </Button>
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} SupportAI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-900">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-slate-500 hover:text-slate-900">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

