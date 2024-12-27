import Link from 'next/link'

interface Project {
  title: string
  link: string
  date: string
}

const projects: Project[] = [
  {
    title: 'Help Supporters',
    link: 'https://dl.acm.org/doi/10.1145/3613904.3642816',
    date: '2024-03-01'
  }
]

export function Projects() {
  return (
    <div>
      {projects
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.title}
            className="flex flex-col space-y-1 mb-4"
            href={project.link}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {new Date(project.date).getFullYear()}
              </p>
              <div>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {project.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}