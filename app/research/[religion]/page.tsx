import { ResearchPost } from "@/components/research-post"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface ReligionPageProps {
  params: {
    religion: string
  }
}

export async function generateMetadata({ params }: ReligionPageProps): Promise<Metadata> {
  const religion = formatReligionName(params.religion)

  if (!religion) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    }
  }

  return {
    title: `${religion} Research | Religious Research Repository`,
    description: `Explore scholarly research on ${religion.toLowerCase()} traditions, texts, and practices.`,
  }
}

function formatReligionName(slug: string): string | null {
  const religions: Record<string, string> = {
    muslim: "Muslim",
    hinduism: "Hinduism",
    christian: "Christian",
    sikhism: "Sikhism",
    buddhism: "Buddhism",
    other: "Other Major Religions",
  }

  return religions[slug] || null
}

export default function ReligionPage({ params }: ReligionPageProps) {
  const religionName = formatReligionName(params.religion)

  if (!religionName) {
    notFound()
  }

  // This would typically come from a database or API
  const posts = getMockPosts(params.religion)

  return (
    <main className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{religionName} Research</h1>
        <p className="text-gray-600 mb-8">
          Explore scholarly research on {religionName.toLowerCase()} traditions, texts, and practices.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <ResearchPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}

function getMockPosts(religion: string) {
  // This is mock data - in a real application, this would come from a database
  const commonPosts = [
    {
      id: "1",
      title: `Introduction to ${formatReligionName(religion)} Studies`,
      content: `This research post provides an overview of the key concepts, historical development, and contemporary practices in ${formatReligionName(religion)?.toLowerCase() || ""} traditions.\n\nThe study of religious traditions requires careful attention to historical context, textual analysis, and cultural practices. This post aims to establish a foundation for further research in this area.\n\nScholars have approached this subject from various perspectives, including historical, sociological, and theological frameworks.`,
      date: "March 15, 2024",
      references: [
        {
          bookName: "Foundations of Religious Studies",
          chapterNumber: 3,
          verseNumber: "",
          additionalInfo: "Oxford University Press, 2020",
        },
        {
          bookName: "Comparative Religion: A Historical Approach",
          chapterNumber: 2,
          verseNumber: "",
          additionalInfo: "Cambridge University Press, 2018",
        },
      ],
    },
    {
      id: "2",
      title: `Sacred Texts in ${formatReligionName(religion)} Tradition`,
      content: `This research examines the canonical texts and their interpretations within the ${formatReligionName(religion)?.toLowerCase() || ""} tradition.\n\nSacred texts form the foundation of religious thought and practice. This post explores the historical development, key themes, and interpretive traditions associated with these texts.\n\nThe relationship between text, interpretation, and practice reveals important insights into how religious communities understand their traditions.`,
      date: "February 28, 2024",
      references: [
        {
          bookName: "Sacred Texts and Interpretations",
          chapterNumber: 5,
          verseNumber: "",
          additionalInfo: "Harvard University Press, 2019",
        },
        {
          bookName: "Hermeneutics of Religious Texts",
          chapterNumber: 7,
          verseNumber: "12-15",
          additionalInfo: "Yale University Press, 2021",
        },
      ],
    },
  ]

  return commonPosts
}

