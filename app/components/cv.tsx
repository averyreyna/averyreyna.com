import React from 'react';

interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  advisor?: string[];
}

interface Experience {
  title: string;
  organization: string;
  location: string;
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
    location: "Orlando, FL",
    startDate: "2018",
    endDate: "2023",
    advisor: ["Dr. John Doe"],
  },
];

const experience: Experience[] = [
  {
    title: "Software Engineering Intern",
    organization: "ActBlue",
    location: "Somerville, MA",
    startDate: "2022",
    endDate: "2023",
    details: [
      ""
    ]
  },
  {
    title: "Researcher",
    organization: "University of Central Florida",
    location: "Orlando, FL",
    startDate: "2021",
    endDate: "2023",
    details: [
      ""
    ]
  },
];

const awards: Award[] = [
  {
    name: "Outstanding Research Award",
    organization: "Columbia University",
    year: 2023,
    description: "Awarded for exceptional contribution to accessibility research"
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
                {edu.startDate} - {edu.endDate}
              </p>
              <div className="flex-1">
                <p className="text-zinc-950 dark:text-zinc-50 font-medium">
                  {edu.degree}
                </p>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {edu.institution}, {edu.location}
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
                {exp.startDate} - {exp.endDate}
              </p>
              <div className="flex-1">
                <p className="text-zinc-950 dark:text-zinc-50 font-medium">
                  {exp.title}
                </p>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {exp.organization}, {exp.location}
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
        <h2 className="text-xl font-semibold mb-4">Awards & Honors</h2>
        {awards.sort((a, b) => b.year - a.year).map((award) => (
          <div key={`${award.name}-${award.year}`} className="mb-4">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {award.year}
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
        ))}
      </section>
    </div>
  );
}