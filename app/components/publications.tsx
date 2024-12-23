import Link from 'next/link';
import { ArrowIcon } from './footer';

interface Publication {
  title: string;
  url: string;
  venue: string;
  authors: string[];
}

const publications: Publication[] = [
  {
    title: 'Help Supporters: Exploring the Design Space of Assistive Technologies to Support Face-to-Face Help Between Blind and Sighted Strangers',
    url: '',
    venue: 'CHI 2024',
    authors: ['Avery Reyna', 'John Doe'],
  },
  {
    title: 'Understanding Blind and Low Vision Users\' Attitudes Towards Spatial Interactions in Desktop Screen Readers',
    url: '',
    venue: 'ASSETS 2023',
    authors: ['Avery Reyna', 'John Doe'],
  }
];

export default function Publications() {
  return (
    <div className="flex flex-col gap-4 mx-auto">
      {publications.map((publication) => (
        <Link
          key={publication.url}
          className="flex flex-col space-y-1 mb-2"
          href={publication.url}
        >
          <div className="w-full flex flex-col">
            <div className="flex items-center">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {publication.title}
              </p>
              <ArrowIcon />
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              {publication.venue}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {publication.authors.join(', ')}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
