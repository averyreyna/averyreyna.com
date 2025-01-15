import { Project } from './types';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsPhone(window.innerWidth <= 768);
    };
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <a
      href={project.url}
      className="flex h-40 w-full space-x-4 bg-gray-100 hover:bg-gray-200 rounded-md p-4
        phone:flex-col phone:space-x-0 phone:space-y-0 phone:h-auto phone:w-full phone:p-4"
    >
      <div className="flex-shrink-0 w-40 h-32 phone:w-full phone:h-64 phone:border-0">
        {project.image && (
          <div className="w-40 h-full overflow-hidden phone:w-full">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover bg-gray-50 rounded-md
                phone:border-[1px]"
            />
          </div>
        )}
      </div>
      
      <div className="flex flex-col justify-between flex-grow phone:border-0 phone:justify-start phone:space-y-1 phone:pb-0">
        {isPhone && (
          <div className="flex justify-between mt-2 phone:py-0">
            <div className="text-base phone:text-sm">
              {project.title}
            </div>
          </div>
        )}
        
        <div>
          <div className="flex justify-between w-full flex-shrink-0 phone:invisible phone:h-0 phone:w-0">
            <div className="text-base text-gray-900 phone:text-sm">
              {project.title}
            </div>
          </div>
          <div className="leading-snug text-base text-gray-500 phone:text-sm">
            {project.description}
          </div>
        </div>
        
        <div className="flex flex-wrap leading-snug phone:text-xs">
          <span className="bg-transparent border-[1px] text-gray-500 border-gray-400 px-1 rounded-md mr-1 mt-1 text-sm">
            {project.location}
          </span>
          <span className="bg-transparent border-[1px] text-gray-500 border-gray-400 px-1 rounded-md mr-1 mt-1 text-sm">
            {project.year}
          </span>
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="bg-transparent border-[1px] text-gray-500 border-gray-400 px-1 rounded-md mr-1 mt-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;