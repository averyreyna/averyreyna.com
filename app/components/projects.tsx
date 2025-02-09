import Link from 'next/link'
import { formatDate, getProjectPosts } from 'app/projects/utils'

interface Metadata {
  title: string
  publishedAt: string
}

interface InternalProject {
  metadata: Metadata
  slug: string
  content: string
  isExternal?: false
}

interface ExternalProject {
  metadata: Metadata
  url: string
  isExternal: true
}

type Project = InternalProject | ExternalProject

const EXTERNAL_PROJECTS: ExternalProject[] = [
  {
    metadata: {
      title: 'Digital Transformation Opportunities',
      publishedAt: '2022-11-21',
    },
    url: 'https://www.newamerica.org/digital-impact-governance-initiative/reports/digital-transformation-opportunities-and-challenges-in-the-lower-mekong-region/',
    isExternal: true
  },
  {
    metadata: {
      title: 'Reconceptualizing Public Procurement',
      publishedAt: '2022-10-19',
    },
    url: 'https://www.newamerica.org/digital-impact-governance-initiative/reports/reconceptualizing-public-procurement/',
    isExternal: true
  }
]

export function ProjectPosts() {
  let allProjects = getProjectPosts()
  const usedYears = new Set<number>()

  const combinedProjects: Project[] = [
    ...allProjects,
    ...EXTERNAL_PROJECTS
  ]

  return (
    <div>
      {combinedProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((project, index) => {
          if (project.isExternal) {
            return (
              <a
                key={`external-${index}`}
                className="flex flex-col space-y-1 mb-4"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(project.metadata.publishedAt, usedYears)}
                  </p>
                  <div>
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                      {project.metadata.title}
                    </p>
                  </div>
                </div>
              </a>
            )
          }

          return (
            <Link
              key={project.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/projects/${project.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(project.metadata.publishedAt, usedYears)}
                </p>
                <div>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {project.metadata.title}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
    </div>
  )
}