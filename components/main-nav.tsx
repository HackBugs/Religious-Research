"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Muslim", path: "/research/muslim" },
    { name: "Hinduism", path: "/research/hinduism" },
    { name: "Christian", path: "/research/christian" },
    { name: "Sikhism", path: "/research/sikhism" },
    { name: "Buddhism", path: "/research/buddhism" },
    { name: "Other", path: "/research/other" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="flex gap-6">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.path ? "text-primary" : "text-muted-foreground",
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

