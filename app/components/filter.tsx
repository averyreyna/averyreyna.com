import { useState } from 'react';
import { Project } from './types';

interface ProjectFilterProps {
  allProjects: Project[];
  setFilteredProjects: (projects: Project[]) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ allProjects, setFilteredProjects }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const getLocations = (): string[] => Array.from(new Set(allProjects.map(p => p.location)));
  const getYears = (): number[] => Array.from(new Set(allProjects.map(p => p.year))).sort((a, b) => b - a);
  const getTags = (): string[] => Array.from(new Set(allProjects.flatMap(p => p.tags)));

  const handleTagToggle = (tag: string): void => {
    const isSelected = selectedTags.includes(tag);
    const newTags = isSelected
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newTags);
    
    if (newTags.length === 0) {
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project =>
        newTags.some(tag => 
          project.location === tag ||
          project.year.toString() === tag ||
          project.tags.includes(tag)
        )
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md w-full mt-4 flex flex-col space-y-4 text-gray-500">
      <div className="flex flex-wrap">
        <span className="mr-1 text-sm">Location:</span>
        {getLocations().map(loc => (
          <span
            key={loc}
            onClick={() => handleTagToggle(loc)}
            className={`whitespace-nowrap rounded-md px-2 mr-1 mb-1 text-sm
              border-[1px] border-gray-400 hover:cursor-pointer hover:bg-gray-200
              ${selectedTags.includes(loc) ? 'bg-gray-300' : 'bg-transparent'}`}
          >
            {loc} {selectedTags.includes(loc) && <span className="text-xs">✕</span>}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap">
        <span className="mr-1 text-sm">Years:</span>
        {getYears().map(year => (
          <span
            key={year}
            onClick={() => handleTagToggle(year.toString())}
            className={`whitespace-nowrap rounded-md px-2 mr-1 mb-1 text-sm
              border-[1px] border-gray-400 hover:cursor-pointer hover:bg-gray-200
              ${selectedTags.includes(year.toString()) ? 'bg-gray-300' : 'bg-transparent'}`}
          >
            {year} {selectedTags.includes(year.toString()) && <span className="text-xs">✕</span>}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap">
        <span className="mr-1 text-sm">Tags:</span>
        {getTags().map(tag => (
          <span
            key={tag}
            onClick={() => handleTagToggle(tag)}
            className={`whitespace-nowrap rounded-md px-2 mr-1 mb-1 text-sm
              border-[1px] border-gray-400 hover:cursor-pointer hover:bg-gray-200
              ${selectedTags.includes(tag) ? 'bg-gray-300' : 'bg-transparent'}`}
          >
            {tag} {selectedTags.includes(tag) && <span className="text-xs">✕</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;