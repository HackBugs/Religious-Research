import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export interface Reference {
  bookName: string
  chapterNumber?: number | string
  verseNumber?: number | string
  additionalInfo?: string
}

export interface ResearchPost {
  id: string
  title: string
  content: string
  date: string
  references: Reference[]
}

interface ResearchPostProps {
  post: ResearchPost
}

export function ResearchPost({ post }: ResearchPostProps) {
  return (
    <Card className="backdrop-blur-sm bg-white/80 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl md:text-2xl">{post.title}</CardTitle>
            <CardDescription>{post.date}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          <div className="mb-6 text-gray-700">
            {post.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {post.references.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">References</h3>
              <ul className="space-y-3">
                {post.references.map((ref, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <Badge variant="outline" className="w-fit">
                      Ref {idx + 1}
                    </Badge>
                    <span className="text-sm">
                      <strong>{ref.bookName}</strong>
                      {ref.chapterNumber && `, Chapter ${ref.chapterNumber}`}
                      {ref.verseNumber && `, Verse ${ref.verseNumber}`}
                      {ref.additionalInfo && ` (${ref.additionalInfo})`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

