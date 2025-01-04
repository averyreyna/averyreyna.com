import Contact from "./components/contact"
import Publications from "./components/publications"
import Connections from "./components/connections"

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Hello! I'm Avery Reyna.
      </h1>
      <p className="mb-4">
        I'm a Software Engineer working on data quality at Capital One. Before that, I researched computational social science and human-computer interaction with supervision from Jonathan Powell and Pamela Wisniewski. I also collaborated with teams improving developer experience at ActBlue, building predictive models at Swing Left, and researching technology policy at New America.
      </p>

      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
        Recent Projects
      </h2>
      <div className="mb-4">
        <Connections />
      </div>

      <h2 className="mb-4 text-2xl font-semibold tracking-tighter transition-all relative active:opacity-70 sm:active:opacity-100">
        Recent Publications
      </h2>
      <div className="mb-4">
        <Publications />
      </div>

      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
        Contact
      </h2>
      <div className="mb-4">
        <Contact />
      </div>

    </section>
  )
}