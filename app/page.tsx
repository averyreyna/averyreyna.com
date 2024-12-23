import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello! I'm Avery Reyna.
      </h1>
      <p className="mb-4">
        I'm a Software Engineer working on data quality management at Capital One. Before that, I researched human-computer interaction and computational social science with supervision from Pamela Wisniewski and Jonathan Powell. I also dove into collaborations with teams improving developer experience at ActBlue, building predictive models at Swing Left, and researching technology policy at New America.
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
