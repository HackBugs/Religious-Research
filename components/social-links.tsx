import { Github, Instagram, Facebook, Youtube, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#" },
    { icon: <Youtube className="h-5 w-5" />, label: "YouTube", href: "#" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Snapchat", href: "#" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "#" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialLinks.map((link) => (
        <Button key={link.label} variant="outline" size="icon" className="rounded-full h-12 w-12" asChild>
          <a href={link.href} aria-label={link.label}>
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  )
}

