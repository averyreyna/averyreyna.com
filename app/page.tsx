"use client";

import { useState } from 'react';
import Footer from "./components/footer";
import MusicalKeyDisplay from "./components/keys";
import ProjectFilter from "./components/filter";
import ProjectCard from "./components/card";
import { Project } from "./components/types";

const projects: Project[] = [
  {
    title: "Help Supporters",
    description: "Exploring the design space of assistive technologies to foster colloboration between blind and sighted strangers",
    image: "/help_supporters/person_finder_glasses.png",
    url: "/projects/help_supporters",
    location: "columbia",
    year: 2024,
    tags: ["hci", "accessibility", "reu"]
  },
  {
    title: "SpaceNav",
    description: "Understanding blind users' attitudes towards spatial interactions in desktop screen readers",
    image: "/spacenav/chrome_extension.png",
    url: "/projects/spacenav",
    location: "columbia",
    year: 2024,
    tags: ["hci", "accessibility", "reu"]
  },
  {
    title: "CoupCast",
    description: "Utilizing machine learning to predict politcal instabilty across the globe",
    image: "/coupcast/mali_coup_data.png",
    url: "/projects/coupcast",
    location: "ucf",
    year: 2023,
    tags: ["css", "machine learning"]
  },
  {
    title: "Digital Transformation Efforts",
    description: "Identifying opportunities and challenges in the Lower Mekong Region",
    image: "/new_america/lower_mekong.png",
    url: "https://www.newamerica.org/digital-impact-governance-initiative/reports/digital-transformation-opportunities-and-challenges-in-the-lower-mekong-region/",
    location: "new america",
    year: 2022,
    tags: ["tech policy"]
  },
];

export default function Page() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  return (
    <div className="absolute inset-0 w-screen overflow-x-hidden font-sans bg-white">
      <div className="h-1/2 bg-white flex p-16 space-x-16 phone:flex-col phone:w-full phone:p-4 phone:space-x-0 phone:h-auto">
        <div className="w-1/3 phone:w-full text-gray-500">
          <h1 className="text-2xl font-semibold tracking-tighter text-gray-900">
            Hello! I'm Avery Reyna.
          </h1>
          <p className="text-lg">
            I'm a Software Engineer at Capital One, managing data quality across the enterprise.
          </p>
        </div>
        <div className="w-2/3 phone:w-full bg-gray-100 rounded-md h-full flex justify-end items-end phone:mt-4 phone:h-64">
          <MusicalKeyDisplay />
        </div>
      </div>

      <div className="bg-white w-screen px-16 pt-16 pb-2 phone:pt-2 flex flex-col items-center phone:p-0">
        <div className="flex space-x-0 mb-12 mx-auto phone:space-x-0 justify-center w-full phone:w-full phone:flex-col">
          <div className="flex flex-col pr-0 w-1/3 phone:invisible phone:h-0 phone:w-0 phone:px-0">
            <div className="flex flex-col w-full space-x-0 sticky top-20 bg-white">
              <div className="text-2xl font-semibold tracking-tighter text-gray-900">
                Projects
              </div>
              <div className="text-gray-500 text-lg mb-0">
                All projects, big and small.
              </div>

              <div className="phone:hidden">
                <ProjectFilter
                  allProjects={projects}
                  setFilteredProjects={setFilteredProjects}
                />
              </div>
            </div>
          </div>

          {/* phone version of header */}
          <div className="hidden phone:block w-full px-4">
            <div className="text-lg text-gray-900">Projects</div>
            <div className="text-gray-500 text-base">
              All projects, big and small.
            </div>
            <div className="mt-4">
              <ProjectFilter
                allProjects={projects}
                setFilteredProjects={setFilteredProjects}
              />
            </div>
          </div>

          <div className="flex flex-col w-2/3 space-y-4 phone:w-full mt-20 pl-16 phone:mt-0 phone:p-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}