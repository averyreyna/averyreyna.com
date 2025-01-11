import React from 'react';

const Tag = ({ text }) => (
  <span className="bg-transparent border-[1px] text-gray-500 border-gray-400 px-1 rounded-md mr-1 mt-1 text-xs">
    {text}
  </span>
);

const ProjectCard = ({ title, description, imageUrl, tags }) => (
  <div className="flex h-32 w-full space-x-4 bg-gray-100 hover:bg-gray-200 rounded-md p-3 mb-3">
    <div className="flex-shrink-0">
      <div className="h-full w-48">
        <img 
          src={imageUrl || "/api/placeholder/200/150"} 
          alt={title}
          className="h-full w-full object-cover bg-gray-50 rounded-md"
        />
      </div>
    </div>
    <div className="flex flex-col justify-between flex-grow">
      <div>
        <div className="flex justify-between w-full flex-shrink-0">
          <div className="text-base text-gray-900">
            {title}
          </div>
        </div>
        <div className="leading-snug text-sm text-gray-500">
          {description}
        </div>
      </div>
      <div className="flex flex-wrap leading-snug">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Help Supporters",
      description: "AI-powered alphabet creator, at labs.google/gentype",
      imageUrl: "/help_supporters/person_finder_glasses.png",
      tags: ["Google", "2024", "machine learning", "video"]
    },
    {
      title: "SpaceNav",
      description: "Interactive platform for exploring complex datasets",
      imageUrl: "/spacenav/chrome_extension.png",
      tags: ["React", "D3.js", "data viz"]
    },
    {
      title: "CoupCast",
      description: "Computational social science research analytics tool",
      imageUrl: "/coupcast/mali_coup_data.png",
      tags: ["Python", "research", "analytics"]
    }
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;