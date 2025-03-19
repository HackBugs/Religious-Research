import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SocialLinks from "@/components/social-links"

export default function Home() {
  const religions = [
    { name: "Muslim", path: "/research/muslim" },
    { name: "Hinduism", path: "/research/hinduism" },
    { name: "Christian", path: "/research/christian" },
    { name: "Sikhism", path: "/research/sikhism" },
    { name: "Buddhism", path: "/research/buddhism" },
    { name: "Other Major Religions", path: "/research/other" },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Religious Research Repository
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A comprehensive collection of research on major world religions, providing scholarly insights and
            references.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="#research-sections">
              Explore Research <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Research Sections */}
      <section id="research-sections" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Research Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {religions.map((religion) => (
              <Card
                key={religion.name}
                className="backdrop-blur-sm bg-white/80 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <CardTitle>{religion.name} Research</CardTitle>
                  <CardDescription>
                    Explore scholarly research on {religion.name.toLowerCase()} traditions, texts, and practices.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={religion.path}>
                      View Research <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">About Our Repository</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Welcome to our Religious Research Repository, a platform dedicated to providing scholarly research on
                major world religions. Our mission is to foster understanding and knowledge through well-researched
                content.
              </p>
              <p>
                Each research section contains carefully curated posts with detailed references and citations to ensure
                academic integrity and reliability of information.
              </p>
              <p>
                This repository serves as a resource for students, scholars, and anyone interested in learning more
                about the diverse religious traditions around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
          <p className="text-gray-600 mb-8">
            Follow us on social media or reach out directly for collaborations and inquiries.
          </p>
          <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <SocialLinks />
            <div className="mt-8 flex justify-center">
              <Button className="rounded-full">
                <Mail className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

