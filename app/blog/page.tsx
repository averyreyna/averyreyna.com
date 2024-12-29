import { BlogPosts } from 'app/components/posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avery Reyna | Blog',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  )
}
