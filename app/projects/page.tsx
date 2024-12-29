import { ProjectPosts } from 'app/components/projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avery Reyna | Projects',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <ProjectPosts />
    </section>
  )
}
