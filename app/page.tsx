import Footer from "./components/footer"
import Publications from "./components/publications"
import Connections from "./components/connections"
import Link from 'next/link'
import { ArrowIcon } from "./components/footer"

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Hello! I'm Avery Reyna.
      </h1>
      <p className="mb-4">
        I'm a Software Engineer working on data quality at Capital One. Before that, I researched computational social science and human-computer interaction with supervision from Jonathan Powell and Pamela Wisniewski. I also collaborated with teams improving developer experience at ActBlue, building predictive models at Swing Left, and researching technology policy at New America.
      </p>

      <Link href="/publications" className="group inline-flex items-center">
        <h2 className="mb-4 text-2xl font-semibold tracking-tighter transition-all relative active:opacity-70 sm:active:opacity-100">
          Publications
          <span className="hidden sm:items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all opacity-0 translate-x-[-8px] sm:group-hover:opacity-100 sm:group-hover:translate-x-0 duration-200 ml-4 text-xs sm:text-base whitespace-nowrap inline-flex">
            <ArrowIcon />
            <span className="ml-2 flex items-center">All</span>
          </span>
        </h2>
      </Link>
      <div className="mb-4">
        <Publications />
      </div>

      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
        Connections
      </h2>
      <div className="mb-4">
        <Connections />
      </div>

      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
        Contact
      </h2>

      <Footer />
    </section>
  )
}