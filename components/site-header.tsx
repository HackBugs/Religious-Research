import Link from "next/link"
import { BookOpen } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import MainNav from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold">Religious Research</span>
        </Link>
        <div className="hidden md:flex">
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-end md:justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

