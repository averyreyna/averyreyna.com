export function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:avery.reyna16@gmail.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Email</p>
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/averyreyna"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
            rel="noopener noreferrer"
            target="_blank"
            href="https://scholar.google.com/citations?user=WecCIHwAAAAJ&hl=en"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Google Scholar</p>
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/avery-reyna"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
