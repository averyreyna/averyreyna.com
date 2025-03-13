import React from 'react';

interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  advisor?: string[];
}

interface Experience {
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  details: string[];
}

interface Award {
  name: string;
  organization: string;
  year: number;
}

interface Contact {
  type: string;
  value: string;
  url?: string;
}

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
  year: number;
  type: 'paper' | 'article';
}

const education: Education[] = [
  {
    degree: "Bachelor of Science - BS, Social Sciences",
    institution: "University of Central Florida",
    startDate: "2018",
    endDate: "2023",
    advisor: ["Advisors: Jonathan Powell and Pamela Wisniewski"],
  },
];

const experience: Experience[] = [
  {
    title: "Research Collaborator",
    organization: "MLCommons",
    startDate: "2025",
    endDate: "Present",
    details: [
      ""
    ]
  },
  {
    title: "Software Engineer",
    organization: "Capital One",
    startDate: "2023",
    endDate: "Present",
    details: [
      ""
    ]
  },
  {
    title: "Software Engineering Intern",
    organization: "ActBlue",
    startDate: "2022",
    endDate: "2023",
    details: [
      ""
    ]
  },
  {
    title: "Researcher",
    organization: "University of Central Florida",
    startDate: "2021",
    endDate: "2023",
    details: [
      ""
    ]
  },
  {
    title: "Visiting Researcher",
    organization: "Columbia University",
    startDate: "2022",
    endDate: "",
    details: [
      ""
    ]
  },
  {
    title: "Software Engineering Intern",
    organization: "Swing Left",
    startDate: "2021",
    endDate: "2022",
    details: [
      ""
    ]
  },
  {
    title: "Research Intern",
    organization: "New America",
    startDate: "2021",
    endDate: "2022",
    details: [
      ""
    ]
  },
  {
    title: "Visiting Researcher",
    organization: "University of Washington",
    startDate: "2021",
    endDate: "",
    details: [
      ""
    ]
  },
  {
    title: "Research Intern",
    organization: "Council on Foreign Relations",
    startDate: "2021",
    endDate: "",
    details: [
      ""
    ]
  }
];

const awards: Award[] = [
  {
    name: "Summer Undergraduate Research Fellowship",
    organization: "UCF Office of Undergraduate Research",
    year: 2022
  },
  {
    name: "The Laassel Family Political Science Endowed Scholarship",
    organization: "UCF School of Politics, Security, and International Affairs",
    year: 2020
  },
  {
    name: "Leader-in-Residence",
    organization: "Hispanic Association of Colleges and Universities",
    year: 2020
  },
  {
    name: "Excellence in Action Award",
    organization: "UCF Office of Diversity Education and Training",
    year: 2020
  },
  {
    name: "Burnett Honors Scholar",
    organization: "Burnett Honors College",
    year: 2019
  },
];

const contacts: Contact[] = [
  {
    type: "Are.na",
    value: "yourname@example.com",
    url: "https://www.are.na/avery-reyna/channels"
  },
  {
    type: "Email",
    value: "yourname@example.com",
    url: "mailto:avery@averyreyna.com"
  },
  {
    type: "GitHub",
    value: "github.com/yourusername",
    url: "https://github.com/averyreyna"
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    url: "https://linkedin.com/in/avery-reyna"
  }
];

const publications: Publication[] = [
  {
    title: 'Help Supporters: Exploring the Design Space of Assistive Technologies to Support Face-to-Face Help Between Blind and Sighted Strangers',
    url: '',
    venue: 'CHI 2024',
    year: 2024,
    authors: ['Yuanyang Teng', 'Connor Courtien', 'David Rios', 'Maximillian Tseng', 'Jacqueline Gibson', 'Maryam Aziz', 'Avery Reyna', 'Rajan Vaish', 'Brian A. Smith'],
    links: [
      { text: 'Paper', url: 'https://arxiv.org/pdf/2403.08221' }
    ],
    type: 'paper'
  },
  {
    title: 'Understanding Blind and Low Vision Users\' Attitudes Towards Spatial Interactions in Desktop Screen Readers',
    url: '',
    venue: 'ASSETS 2023',
    year: 2023,
    authors: ['Arnavi Chheda-Kothary', 'David Rios', 'Kynnedy Simone Smith', 'Avery Reyna', 'Cecilia Zhang', 'Brian A. Smith'],
    links: [
      { text: 'Paper', url: 'https://dl.acm.org/doi/10.1145/3597638.3614490' },
      { text: 'Project', url: 'https://ceal.cs.columbia.edu/spatialinteractions' }
    ],
    type: 'paper'
  },
  {
    title: 'The Threat of Artificial Intelligence Is Not Just Real, It\'s Here',
    url: '',
    venue: 'The Loop: The ECPR\'s Political Science Blog',
    year: 2023,
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://theloop.ecpr.eu/the-threat-of-artificial-intelligence-is-not-just-real-its-here/' }
    ],
    type: 'article'
  },
  {
    title: 'Interdisciplinary Social Science and the Limits of Quantitative Research',
    url: '',
    venue: 'The Loop: The ECPR\'s Political Science Blog',
    year: 2023,
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://theloop.ecpr.eu/interdisciplinary-social-science-and-the-limits-of-quantitative-research/' }
    ],
    type: 'article'
  },
  {
    title: 'Anti-Coup Strategies Should Address Civilian Coup Allies',
    url: '',
    venue: 'Just Security',
    year: 2022,
    authors: ['Salah Ben Hammou', 'Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://www.justsecurity.org/82471/anti-coup-strategies-should-address-civilian-coup-allies/' }
    ],
    type: 'article'
  },
  {
    title: 'Reflecting on Coup Risk in Mali',
    url: '',
    venue: 'Political Violence at a Glance',
    year: 2022,
    authors: ['Avery Reyna', 'Salah Ben Hammou'],
    links: [
      { text: 'Article', url: 'https://politicalviolenceataglance.org/2022/06/14/reflecting-on-coup-risk-in-mali/' }
    ],
    type: 'article'
  },
  {
    title: 'Integrated Data in the United States: A Look at New York\'s Workforce Portal',
    url: '',
    venue: 'New America',
    year: 2022,
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://www.newamerica.org/digital-impact-governance-initiative/blog/integrated-data-in-the-united-states-a-look-at-new-yorks-workforce-portal/' }
    ],
    type: 'article'
  },
  {
    title: 'Vaccination Efforts in Latin America: What to Know',
    url: '',
    venue: 'Council on Foreign Relations',
    year: 2021,
    authors: ['Avery Reyna'],
    links: [
      { text: 'Article', url: 'https://www.cfr.org/in-brief/latin-americas-vaccination-efforts-what-know' }
    ],
    type: 'article'
  }
];

export default function CV() {
  const usedYears = new Set<number>();
  const usedYearsPapers = new Set<number>();
  const usedYearsArticles = new Set<number>();

  const papers = publications.filter(pub => pub.type === 'paper');
  const articles = publications.filter(pub => pub.type === 'article');

  return (
    <div className="max-w-full">
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          {contacts.map((contact) => (
            <a
              key={contact.type}
              href={contact.url}
              className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-50 transition-all text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.type}
            </a>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-2xl mb-8 tracking-tighter">Education</h2>
        {education.sort((a, b) => {
          if (a.endDate === "Present") return -1;
          if (b.endDate === "Present") return 1;
          return b.endDate.localeCompare(a.endDate);
        }).map((edu) => (
          <div key={edu.degree} className="flex flex-col space-y-1 mb-4">
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] whitespace-nowrap tabular-nums">
                {edu.endDate ? `${edu.startDate} - ${edu.endDate}` : edu.startDate}
              </p>
              <div className="flex-1">
                <p className="text-zinc-950 dark:text-zinc-50 tracking-tight">
                  {edu.degree}
                </p>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm">
                  <span className="font-medium">{edu.institution}</span>
                </div>
                {edu.advisor && (
                  <div className="text-zinc-600 dark:text-zinc-300 text-sm">
                    {edu.advisor.join(', ')}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-2xl mb-8 tracking-tighter">Experience</h2>
        {experience.map((exp) => (
          <div key={`${exp.title}-${exp.organization}`} className="flex flex-col space-y-1 mb-4">
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] whitespace-nowrap tabular-nums">
                {exp.endDate ? `${exp.startDate} - ${exp.endDate}` : exp.startDate}
              </p>
              <div className="flex-1">
                <p className="text-zinc-950 dark:text-zinc-50 tracking-tight">
                  {exp.title}
                </p>
                <div className="text-zinc-600 dark:text-zinc-300 text-sm">
                  <span className="font-medium">{exp.organization}</span>
                </div>
                {exp.details.length > 0 && exp.details[0] !== "" && (
                  <div className="text-zinc-600 dark:text-zinc-300 text-sm">
                    {exp.details.join(', ')}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-2xl mb-8 tracking-tighter">Papers</h2>
        {papers
          .sort((a, b) => b.year - a.year)
          .map((paper) => {
            const showYear = !usedYearsPapers.has(paper.year);
            if (showYear) usedYearsPapers.add(paper.year);

            return (
              <div
                key={paper.title}
                className="flex flex-col space-y-1 mb-4"
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] whitespace-nowrap tabular-nums">
                    {showYear ? paper.year : ''}
                  </p>
                  <div className="flex-1">
                    <p className="text-zinc-950 dark:text-zinc-50 tracking-tight">
                      {paper.title}
                    </p>
                    <div className="text-zinc-600 dark:text-zinc-300 text-sm">
                      <span className="font-medium">{paper.venue}</span>
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-300 text-sm">
                      {paper.authors.join(', ')}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {paper.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-50 transition-all text-sm font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-2xl mb-8 tracking-tighter">Articles</h2>
        {articles
          .sort((a, b) => b.year - a.year)
          .map((article) => {
            const showYear = !usedYearsArticles.has(article.year);
            if (showYear) usedYearsArticles.add(article.year);

            return (
              <div
                key={article.title}
                className="flex flex-col space-y-1 mb-4"
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] whitespace-nowrap tabular-nums">
                    {showYear ? article.year : ''}
                  </p>
                  <div className="flex-1">
                    <p className="text-zinc-950 dark:text-zinc-50 tracking-tight">
                      {article.title}
                    </p>
                    <div className="text-zinc-600 dark:text-zinc-300 text-sm">
                      <span className="font-medium">{article.venue}</span>
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-300 text-sm">
                      {article.authors.join(', ')}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {article.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-50 transition-all text-sm font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-2xl mb-8 tracking-tighter">Awards and Honors</h2>
        {awards
          .sort((a, b) => b.year - a.year)
          .map((award) => {
            const showYear = !usedYears.has(award.year);
            if (showYear) usedYears.add(award.year);

            return (
              <div key={`${award.name}-${award.year}`} className="flex flex-col space-y-1 mb-4">
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] whitespace-nowrap tabular-nums">
                    {showYear ? award.year : ''}
                  </p>
                  <div className="flex-1">
                    <p className="text-zinc-950 dark:text-zinc-50 tracking-tight">
                      {award.name}
                    </p>
                    <div className="text-zinc-600 dark:text-zinc-300 text-sm">
                      <span className="font-medium">{award.organization}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}