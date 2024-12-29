import { ProjectPosts } from 'app/components/projects'

export const metadata = {
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
