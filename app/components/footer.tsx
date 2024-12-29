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
    <div className="mb-4">
      <div className="grid grid-cols-2">
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center text-[13px] sm:text-base"
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:avery@averyreyna.com"
        >
          <ArrowIcon />
          <span className="ml-2 h-7">Email</span>
        </a>
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center text-[13px] sm:text-base"
          rel="noopener noreferrer"
          target="_blank"
          href="https://scholar.google.com/citations?user=WecCIHwAAAAJ&hl=en"
        >
          <ArrowIcon />
          <span className="ml-2 h-7">Google Scholar</span>
        </a>
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center text-[13px] sm:text-base"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/averyreyna"
        >
          <ArrowIcon />
          <span className="ml-2 h-7">GitHub</span>
        </a>
        <a
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center text-[13px] sm:text-base"
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/avery-reyna"
        >
          <ArrowIcon />
          <span className="ml-2 h-7">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
