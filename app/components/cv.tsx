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
  description?: string;
}

const education: Education[] = [
  {
    degree: "Bachelor of Science - BS, Social Sciences",
    institution: "University of Central Florida",
    startDate: "2018",
    endDate: "2023",
    advisor: ["Dr. John Doe"],
  },
];

const experience: Experience[] = [
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
    year: 2022,
    description: ""
  },
  {
    name: "The Laassel Family Political Science Endowed Scholarship",
    organization: "UCF School of Politics, Security, and International Affairs",
    year: 2020,
    description: ""
  },
  {
    name: "Leader-in-Residence",
    organization: "Hispanic Association of Colleges and Universities",
    year: 2020,
    description: ""
  },
  {
    name: "Excellence in Action Award",
    organization: "UCF Office of Diversity Education and Training",
    year: 2020,
    description: ""
  },
  {
    name: "Burnett Honors Scholar",
    organization: "Burnett Honors College",
    year: 2019,
    description: ""
  },
];

export default function CV() {
  const usedYears = new Set<number>();

  return (
    <div className="max-w-full">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        {education.sort((a, b) => {
          if (a.endDate === "Present") return -1;
          if (b.endDate === "Present") return 1;
          return b.endDate.localeCompare(a.endDate);
        }).map((edu) => (
          <div key={edu.degree} className="mb-4">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {edu.endDate ? `${edu.startDate} - ${edu.endDate}` : edu.startDate}
              </p>
              <div className="flex-1">
                <p className="text-zinc-950 dark:text-zinc-50 font-medium">
                  {edu.degree}
                </p>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {edu.institution}
                </p>
                {edu.advisor && (
                  <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300 mt-2">
                    {edu.advisor.map((advisor, index) => (
                      <li key={index}>{advisor}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        {experience.map((exp) => (
          <div key={`${exp.title}-${exp.organization}`} className="mb-4">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {exp.endDate ? `${exp.startDate} - ${exp.endDate}` : exp.startDate}
              </p>
              <div className="flex-1">
                <p className="text-zinc-950 dark:text-zinc-50 font-medium">
                  {exp.title}
                </p>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {exp.organization}
                </p>
                <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300 mt-2">
                  {exp.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Awards and Honors</h2>
        {awards
          .sort((a, b) => b.year - a.year)
          .map((award) => {
            const showYear = !usedYears.has(award.year);
            if (showYear) usedYears.add(award.year);

            return (
              <div key={`${award.name}-${award.year}`} className="mb-4">
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {showYear ? award.year : ''}
                  </p>
                  <div className="flex-1">
                    <p className="text-zinc-950 dark:text-zinc-50 font-medium">
                      {award.name}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      {award.organization}
                    </p>
                    {award.description && (
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                        {award.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}