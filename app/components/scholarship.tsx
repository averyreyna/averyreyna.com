import React from 'react';
import { ArrowRight } from 'lucide-react';

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
  year: number;
}

const scholarship: Scholarship[] = [
  {
    title: 'Help Supporters: Exploring the Design Space of Assistive Technologies to Support Face-to-Face Help Between Blind and Sighted Strangers',
    url: '',
    venue: 'CHI 2024',
    year: 2024,
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
    year: 2023,
    authors: ['Arnavi Chheda-Kothary', 'David Rios', 'Kynnedy Simone Smith', 'Avery Reyna', 'Cecilia Zhang', 'Brian A. Smith'],
    links: [
      { text: 'ACM DL Page', url: 'https://dl.acm.org/doi/10.1145/3597638.3614490' },
      { text: 'Paper', url: 'https://dl.acm.org/doi/10.1145/3597638.3614490' },
      { text: 'Project', url: 'https://ceal.cs.columbia.edu/spatialinteractions' }
    ]
  },
  {
    title: 'The Threat of Artificial Intelligence Is Not Just Real, It\'s Here',
    url: '',
    venue: 'The Loop: The ECPR\'s Political Science Blog',
    year: 2023,
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://theloop.ecpr.eu/the-threat-of-artificial-intelligence-is-not-just-real-its-here/' }
    ]
  },
  {
    title: 'Interdisciplinary Social Science and the Limits of Quantitative Research',
    url: '',
    venue: 'The Loop: The ECPR\'s Political Science Blog',
    year: 2023,
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://theloop.ecpr.eu/interdisciplinary-social-science-and-the-limits-of-quantitative-research/' }
    ]
  },
  {
    title: 'Anti-Coup Strategies Should Address Civilian Coup Allies',
    url: '',
    venue: 'Just Security',
    year: 2022,
    authors: ['Salah Ben Hammou', 'Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://www.justsecurity.org/82471/anti-coup-strategies-should-address-civilian-coup-allies/' }
    ]
  },
  {
    title: 'Reflecting on Coup Risk in Mali',
    url: '',
    venue: 'Political Violence at a Glance',
    year: 2022,
    authors: ['Avery Reyna', 'Salah Ben Hammou'],
    links: [
      { text: 'Article', url: 'https://politicalviolenceataglance.org/2022/06/14/reflecting-on-coup-risk-in-mali/' }
    ]
  },
  {
    title: 'Integrated Data in the United States: A Look at New York\'s Workforce Portal',
    url: '',
    venue: 'New America',
    year: 2022,
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://www.newamerica.org/digital-impact-governance-initiative/blog/integrated-data-in-the-united-states-a-look-at-new-yorks-workforce-portal/' }
    ]
  },
  {
    title: 'Vaccination Efforts in Latin America: What to Know',
    url: '',
    venue: 'Council on Foreign Relations',
    year: 2021,
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://www.cfr.org/in-brief/latin-americas-vaccination-efforts-what-know' }
    ]
  }
];

export default function Scholarship() {
  const usedYears = new Set<number>();

  return (
    <div className="max-w-full">
      {scholarship
        .sort((a, b) => b.year - a.year)
        .map((item) => {
          const showYear = !usedYears.has(item.year);
          if (showYear) usedYears.add(item.year);

          return (
            <div
              key={item.title}
              className="flex flex-col space-y-1 mb-4"
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-full md:w-[100px] tabular-nums">
                  {showYear ? item.year : ''}
                </p>
                <div className="flex-1">
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {item.title}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {item.venue}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {item.authors.join(', ')}
                  </p>
                  <div className="flex gap-2 mt-0.5">
                    {item.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 [@media(hover:hover)]:hover:text-neutral-900 [@media(hover:hover)]:dark:hover:text-neutral-100 [@media(hover:none)]:transition-none transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{link.text}</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}