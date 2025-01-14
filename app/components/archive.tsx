"use client"

import { useState } from 'react';
import { Project } from './types';
import ProjectFilter from './filter';
import ProjectCard from './card';

const projects: Project[] = [
  {
    title: "GenType",
    description: "AI-powered alphabet creator, at labs.google/gentype",
    image: "/path/to/gentype-image.jpg",
    url: "/projects/gentype",
    location: "Google",
    year: 2024,
    tags: ["machine learning", "video", "fullstack"]
  },
];

const ProjectArchive: React.FC = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  return (
    <div className="space-y-8">
      <ProjectFilter 
        allProjects={projects}
        setFilteredProjects={setFilteredProjects}
      />
      <div className="space-y-4">
        {filteredProjects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectArchive;