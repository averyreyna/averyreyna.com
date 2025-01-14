import { Project } from './types';

interface ProjectCardProps {
    project: Project;
}
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
      <a
        href={project.url}
        className="flex h-48 w-full space-x-4 bg-gray-100 hover:bg-gray-200 rounded-md p-4
          phone:flex-col phone:space-x-0 phone:h-auto"
      >
        <div className="flex-shrink-0">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-64 object-cover rounded-md
                phone:w-full phone:h-64"
            />
          )}
        </div>
        
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg text-gray-900 mb-2">{project.title}</h3>
            <p className="text-base text-gray-500">{project.description}</p>
          </div>
          
          <div className="flex flex-wrap text-sm">
            <span className="bg-transparent border-[1px] text-gray-500 border-gray-400 px-1 rounded-md mr-1 mt-1">
              {project.location}
            </span>
            <span className="bg-transparent border-[1px] text-gray-500 border-gray-400 px-1 rounded-md mr-1 mt-1">
              {project.year}
            </span>
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-transparent border-[1px] text-gray-500 border-gray-400 px-1 rounded-md mr-1 mt-1"
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