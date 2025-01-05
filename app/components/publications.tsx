import Link from 'next/link';
import { ArrowIcon } from './arrow';

interface Link {
  text: string;
  url: string;
}

interface Publication {
  title: string;
  url: string;
  venue: string;
  authors: string[];
  links: Link[];
}

const publications: Publication[] = [
  {
    title: 'Help Supporters: Exploring the Design Space of Assistive Technologies to Support Face-to-Face Help Between Blind and Sighted Strangers',
    url: '',
    venue: 'CHI 2024',
    authors: ['Yuanyang Teng', 'Connor Courtien', 'David Rios', 'Maximillian Tseng', 'Jacqueline Gibson', 'Maryam Aziz', 'Avery Reyna', 'Rajan Vaish', 'Brian A. Smith'],
    links: [
      { text: 'ACM DL Page', url: 'https://dl.acm.org/doi/10.1145/3613904.3642816' },
      { text: 'Paper', url: 'https://arxiv.org/pdf/2403.08221' }
    ]
  },
  {
    title: 'Understanding Blind and Low Vision Users\' Attitudes Towards Spatial Interactions in Desktop Screen Readers',
    url: '',
    venue: 'ASSETS 2023',
    authors: ['Arnavi Chheda-Kothary', 'David Rios', 'Kynnedy Simone Smith', 'Avery Reyna', 'Cecilia Zhang', 'Brian A. Smith'],
    links: [
      { text: 'ACM DL Page', url: 'https://dl.acm.org/doi/10.1145/3597638.3614490' },
      { text: 'Paper', url: 'https://dl.acm.org/doi/10.1145/3597638.3614490' },
      { text: 'Project', url: 'https://ceal.cs.columbia.edu/spatialinteractions/' }
    ]
  }
];

export default function Publications() {
  return (
    <div className="flex flex-col gap-4 mx-auto">
      {publications.map((publication) => (
        <div key={publication.url} className="flex flex-col space-y-1 mb-2">
          <div className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {publication.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {publication.venue}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {publication.authors.join(', ')}
            </p>
            <div className="flex gap-4 mt-1">
              {publication.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all flex items-center text-xs sm:text-base whitespace-nowrap overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowIcon />
                  <span className="ml-2 flex items-center">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
