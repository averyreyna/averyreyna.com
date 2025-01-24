import Link from 'next/link';
import { ArrowIcon } from './footer';

interface Link {
  text: string;
  url: string;
}

interface Scholarship {
  title: string;
  url: string;
  venue: string;
  authors: string[];
  links: Link[];
}

const scholarship: Scholarship[] = [
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
  },
  {
    title: 'The Threat of Artificial Intelligence Is Not Just Real, It\’s Here',
    url: '',
    venue: 'The Loop: The ECPR’s Political Science Blog',
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://theloop.ecpr.eu/the-threat-of-artificial-intelligence-is-not-just-real-its-here/' }
    ]
  },
  {
    title: 'Interdisciplinary Social Science and the Limits of Quantitative Research',
    url: '',
    venue: 'The Loop: The ECPR’s Political Science Blog',
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://theloop.ecpr.eu/interdisciplinary-social-science-and-the-limits-of-quantitative-research/' }
    ]
  },
  {
    title: 'Anti-Coup Strategies Should Address Civilian Coup Allies',
    url: '',
    venue: 'Just Security',
    authors: ['Salah Ben Hammou', 'Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://www.justsecurity.org/82471/anti-coup-strategies-should-address-civilian-coup-allies/' }
    ]
  },
  {
    title: 'Reflecting on Coup Risk in Mali',
    url: '',
    venue: 'Political Violence at a Glance',
    authors: ['Avery Reyna', 'Salah Ben Hammou'],
    links: [
      { text: 'Article', url: 'https://politicalviolenceataglance.org/2022/06/14/reflecting-on-coup-risk-in-mali/' }
    ]
  },
  {
    title: 'Integrated Data in the United States: A Look at New York\’s Workforce Portal',
    url: '',
    venue: 'New America',
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://www.newamerica.org/digital-impact-governance-initiative/blog/integrated-data-in-the-united-states-a-look-at-new-yorks-workforce-portal/' }
    ]
  },
  {
    title: 'Vaccination Efforts in Latin America: What to Know',
    url: '',
    venue: 'Council on Foreign Relations',
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://www.cfr.org/in-brief/latin-americas-vaccination-efforts-what-know' }
    ]
  }
];

export default function Scholarship() {
  return (
    <div className="flex flex-col gap-4 mx-auto">
      {scholarship.map((scholarship) => (
        <div key={scholarship.url} className="flex flex-col space-y-1 mb-2">
          <div className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {scholarship.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {scholarship.venue}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {scholarship.authors.join(', ')}
            </p>
            <div className="flex gap-4 mt-1">
              {scholarship.links.map((link, index) => (
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
