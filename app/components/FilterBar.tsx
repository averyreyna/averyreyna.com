// components/FilterBar.tsx
"use client";

import React from 'react';
import { TagButton } from './TagButton';

interface Project {
  slug: string;
  title: string;
  description: string;
  location: string;
  year: string;
  tags: string;
  image?: string;
}

interface FilterBarProps {
  allProjects: Project[];
  selectedProjects: Project[];
  setSelectedProjects: (projects: Project[]) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export const FilterBar = (props: FilterBarProps) => {
  const locationsArray = props.allProjects.map((proj) => proj.location);
  const locations = Array.from(new Set(locationsArray));
  
  const topicsArray = props.allProjects
    .map((proj) => proj.tags.split(', '))
    .flat();
  const topics = Array.from(new Set(topicsArray));
  
  const yearsArray = props.allProjects.map((proj) => proj.year);
  const years = Array.from(new Set(yearsArray)).sort((a, b) => b.localeCompare(a));

  return (
    <div className="bg-gray-100 p-4 rounded-md w-full mt-4 flex flex-col space-y-4 text-gray-500">
      <div className="flex flex-wrap">
        <span className="mr-1">Location: </span>
        {locations.map((tag) => (
          <TagButton
            key={tag}
            tag={tag}
            allProjects={props.allProjects}
            selectedProjects={props.selectedProjects}
            setSelectedProjects={props.setSelectedProjects}
            selectedTags={props.selectedTags}
            setSelectedTags={props.setSelectedTags}
            locations={locations}
            topics={topics}
            years={years}
          />
        ))}
      </div>
      <div className="flex flex-wrap">
        <span className="mr-1">Years: </span>
        {years.map((tag) => (
          <TagButton
            key={tag}
            tag={tag}
            allProjects={props.allProjects}
            selectedProjects={props.selectedProjects}
            setSelectedProjects={props.setSelectedProjects}
            selectedTags={props.selectedTags}
            setSelectedTags={props.setSelectedTags}
            locations={locations}
            topics={topics}
            years={years}
          />
        ))}
      </div>
      <div className="flex flex-wrap">
        <span className="mr-1">Tags: </span>
        {topics.map((tag) => (
          <TagButton
            key={tag}
            tag={tag}
            allProjects={props.allProjects}
            selectedProjects={props.selectedProjects}
            setSelectedProjects={props.setSelectedProjects}
            selectedTags={props.selectedTags}
            setSelectedTags={props.setSelectedTags}
            locations={locations}
            topics={topics}
            years={years}
          />
        ))}
      </div>
    </div>
  );
};