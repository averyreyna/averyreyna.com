import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getProjectPosts } from '../utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'

export async function generateStaticParams() {
  try {
    const posts = getProjectPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export function generateMetadata({ params }) {
  let post = getProjectPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let { title, publishedAt: publishedTime, summary: description } = post.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${post.slug}`,
    },
  }
}

export default function Project({ params }) {
  let post = getProjectPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="font-bold text-3xl tracking-tight mb-4">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
      <article className="prose dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}

export function Projects() {
  let allProjects = getProjectPosts()

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {new Date(post.metadata.publishedAt).getFullYear()}
              </p>
              <div>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}