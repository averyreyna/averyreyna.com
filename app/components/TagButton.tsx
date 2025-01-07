'use client';

import React, { useState } from 'react';

interface Project {
  location: string;
  year: string;
  tags: string;
  title: string;
  description: string;
}

interface TagButtonProps {
  tag: string;
  allProjects: Project[];
  selectedProjects: Project[];
  setSelectedProjects: (projects: Project[]) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  locations: string[];
  topics: string[];
  years: string[];
}

export const TagButton = (props: TagButtonProps) => {
  const [selected, setSelected] = useState(false);
  
  const getMatchingProj = (tagList: string[]): Project[] => {
    const projList: Project[] = [];
    
    for (const projObj of props.allProjects) {
      if (tagList.includes(projObj.location)) {
        projList.push(projObj);
      }
      for (const projTag of projObj.tags.split(', ')) {
        if (tagList.includes(projTag)) {
          projList.push(projObj);
        }
      }
      if (tagList.includes(projObj.year)) {
        projList.push(projObj);
      }
    }
    
    return Array.from(new Set(projList));
  };

  const tagClicked = () => {
    if (selected) {
      const newTagList = props.selectedTags.filter((tag) => tag !== props.tag);
      if (props.selectedTags.length === 1) {
        props.setSelectedProjects(props.allProjects);
      } else {
        props.setSelectedProjects(getMatchingProj(newTagList));
      }
      props.setSelectedTags(newTagList);
    } else {
      const newTagList = [...props.selectedTags, props.tag];
      props.setSelectedProjects(getMatchingProj(newTagList));
      props.setSelectedTags(newTagList);
    }
    setSelected(!selected);
  };

  return (
    <span
      className={`whitespace-nowrap rounded-md px-2 mr-1 mb-1 border border-gray-400 hover:cursor-pointer ${
        selected ? 'bg-gray-300' : 'bg-gray-100 hover:bg-gray-300 text-gray-500'
      }`}
      onClick={tagClicked}
    >
      {props.tag} {selected && <span className="text-xs">✕</span>}
    </span>
  );
};