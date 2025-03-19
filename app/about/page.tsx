import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Religious Research Repository",
  description: "Learn about our mission and the team behind the Religious Research Repository",
}

export default function AboutPage() {
  return (
    <main className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Our Repository</h1>

        <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              The Religious Research Repository is dedicated to providing scholarly research on major world religions.
              Our mission is to foster understanding, respect, and knowledge through well-researched content that
              adheres to academic standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-gray-700">
              We approach the study of religions with respect and academic rigor. Our content is carefully researched
              and includes proper citations and references to ensure reliability and academic integrity.
            </p>
            <p className="text-gray-700 mt-4">
              We strive to present information in an objective manner, acknowledging the diversity of interpretations
              and practices within each religious tradition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">For Researchers and Students</h2>
            <p className="text-gray-700">
              This repository serves as a resource for students, scholars, and anyone interested in learning more about
              the diverse religious traditions around the world. We welcome feedback and contributions from the academic
              community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-gray-700">
              While we strive for accuracy and objectivity, we acknowledge that the study of religions involves
              interpretation and that there are diverse perspectives within each tradition. The content provided here
              should be considered as one scholarly perspective among many.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

