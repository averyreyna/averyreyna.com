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
    description: "Utilizing machine learning to predict coups across the globe",
    image: "/coupcast/mali_coup_data.png",
    url: "/projects/coupcast",
    location: "ucf",
    year: 2023,
    tags: ["css", "machine learning"]
  },
];

export default function Page() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  return (
    <div className="absolute inset-0 w-screen overflow-x-hidden font-sans bg-white">
      <div className="h-1/2 bg-white flex p-16 space-x-16 phone:flex-col phone:w-full phone:p-4 phone:space-x-0 phone:h-auto">
        <div className="w-1/3 phone:w-full text-gray-500">
          <h1 className="mb-4 text-2xl font-semibold tracking-tighter text-gray-900">
            Hello! I'm Avery Reyna.
          </h1>
          <p className="text-lg">
            I'm a Software Engineer working on data quality management at Capital One.
          </p>
        </div>
        <div className="w-2/3 phone:w-full bg-gray-100 rounded-md h-full flex justify-end items-end phone:mt-4 phone:h-64">
          <MusicalKeyDisplay />
        </div>
      </div>

      <div className="bg-white w-screen p-16 phone:pt-2 flex flex-col items-center phone:p-4">
        <div className="w-full phone:p-4 flex space-x-16 phone:flex-col phone:space-x-0">
          <div className="w-1/3 phone:w-full">
            <div className="sticky top-24 phone:static">
              <h2 className="text-2xl w-full text-gray-900 phone:text-lg font-semibold tracking-tighter mb-2">
                Projects
              </h2>
              <div className="phone:hidden">
                <ProjectFilter
                  allProjects={projects}
                  setFilteredProjects={setFilteredProjects}
                />
              </div>
            </div>
          </div>

          <div className="w-2/3 phone:w-full phone:mt-4">
            <div className="hidden phone:block mb-4">
              <ProjectFilter
                allProjects={projects}
                setFilteredProjects={setFilteredProjects}
              />
            </div>
            
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>

        <div className="h-32 phone:h-16"></div>
        <div className="w-full flex space-x-16 phone:flex-col phone:space-x-0">
          <div className="w-1/3 phone:w-full">
            <div className="sticky top-24 phone:static">
              <h2 className="text-2xl w-full text-gray-900 phone:text-lg font-semibold tracking-tighter">
                Contact
              </h2>
            </div>
          </div>
          <div className="w-2/3 phone:w-full phone:mt-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}