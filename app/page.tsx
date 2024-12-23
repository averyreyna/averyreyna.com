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

      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
        Recent News
      </h2>

      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
        Recent Publications
      </h2>

      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
        Journey
      </h2>
      <p className='mb-4'>
      My undergraduate journey was a wild ride through a carnival of disciplines. This voyage didn't just fill my brain, but ignited my passion for interdisciplinary research. Below is the work I did connecting dots between seemingly unrelated fields:
      </p>
      <div className="grid grid-cols-2">
        <a href="https://www.cfr.org/in-brief/latin-americas-vaccination-efforts-what-know"
              target="_blank">Vaccination Efforts</a>
        <a href="https://www.newamerica.org/digital-impact-governance-initiative/blog/integrated-data-in-the-united-states-a-look-at-new-yorks-workforce-portal"
              target="_blank">Integrated Data</a>
        <a href="https://politicalviolenceataglance.org/2022/06/14/reflecting-on-coup-risk-in-mali"
              target="_blank">Reflecting on Coup Risk</a>
        <a href="https://www.newamerica.org/digital-impact-governance-initiative/blog/what-is-digital-public-infrastructure-a-top-10-reading-guide/"
            target="_blank">Digital Public Infrastructure</a>
        <a href="https://www.justsecurity.org/82471/anti-coup-strategies-should-address-civilian-coup-allies"
            target="_blank">Anti-Coup Strategies</a>
        <a href="https://theloop.ecpr.eu/interdisciplinary-social-science-and-the-limits-of-quantitative-research"
            target="_blank">Limits of Quantitative Research</a>
        <a href="https://www.newamerica.org/digital-impact-governance-initiative/reports/digital-transformation-opportunities-and-challenges-in-the-lower-mekong-region"
            target="_blank">Digital Transformation</a>
        <a href="https://theloop.ecpr.eu/the-threat-of-artificial-intelligence-is-not-just-real-its-here"
            target="_blank">Artificial Intelligence</a>
      </div>

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
