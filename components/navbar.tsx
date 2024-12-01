"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown, FileText, HelpCircle, Users, Building, Mail, Zap, Puzzle } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">SupportAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                            href="/features"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">AI-Powered Support</div>
                            <p className="text-sm leading-tight text-white/90">
                              Transform your customer support with our advanced AI solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/features" title="Features" icon={<Zap className="h-4 w-4 mr-2" />}>
                        Explore our powerful features
                      </ListItem>
                      <ListItem href="/integrations" title="Integrations" icon={<Puzzle className="h-4 w-4 mr-2" />}>
                        Connect with your favorite tools
                      </ListItem>
                      <ListItem href="/pricing" title="Pricing" icon={<FileText className="h-4 w-4 mr-2" />}>
                        Simple, transparent pricing
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem
                        href="/documentation"
                        title="Documentation"
                        icon={<FileText className="h-4 w-4 mr-2" />}
                      >
                        Detailed guides and API references
                      </ListItem>
                      <ListItem href="/guides" title="Guides" icon={<FileText className="h-4 w-4 mr-2" />}>
                        Step-by-step tutorials
                      </ListItem>
                      <ListItem href="/help" title="Help Center" icon={<HelpCircle className="h-4 w-4 mr-2" />}>
                        FAQs and troubleshooting
                      </ListItem>
                      <ListItem href="/blog" title="Blog" icon={<FileText className="h-4 w-4 mr-2" />}>
                        Latest news and articles
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="/about" title="About Us" icon={<Users className="h-4 w-4 mr-2" />}>
                        Our mission and team
                      </ListItem>
                      <ListItem href="/careers" title="Careers" icon={<Building className="h-4 w-4 mr-2" />}>
                        Join our growing team
                      </ListItem>
                      <ListItem href="/contact" title="Contact" icon={<Mail className="h-4 w-4 mr-2" />}>
                        Get in touch with us
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/demo" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Demo</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="outline" size="sm" asChild className="ml-2">
              <Link href="/dashboard">Dashboard</Link>
            </Button>

            <Button size="sm" asChild className="ml-2">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200">
          <div className="space-y-1 px-4 py-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-between">
                  Products <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/features" className="flex items-center">
                    <Zap className="h-4 w-4 mr-2" /> Features
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/integrations" className="flex items-center">
                    <Puzzle className="h-4 w-4 mr-2" /> Integrations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/pricing" className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" /> Pricing
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-between">
                  Resources <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/documentation" className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" /> Documentation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/guides" className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" /> Guides
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/help" className="flex items-center">
                    <HelpCircle className="h-4 w-4 mr-2" /> Help Center
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog" className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" /> Blog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-between">
                  Company <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/about" className="flex items-center">
                    <Users className="h-4 w-4 mr-2" /> About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/careers" className="flex items-center">
                    <Building className="h-4 w-4 mr-2" /> Careers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" /> Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/demo">Demo</Link>
            </Button>

            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>

            <Button className="w-full mt-2" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

interface ListItemProps {
  className?: string
  title: string
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, href, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800",
              className,
            )}
            {...props}
          >
            <div className="flex items-center text-sm font-medium leading-none text-slate-900 dark:text-white">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

