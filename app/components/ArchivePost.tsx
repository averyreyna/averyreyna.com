"use client";

import { useEffect, useState } from 'react';

interface ArchivePostProps {
  post: {
    slug: string;
    title: string;
    description: string;
    location: string;
    year: string;
    tags: string;
    image?: string;
  }
}

export function ArchivePost({ post }: ArchivePostProps) {
  const [isPhone, setIsPhone] = useState(false);

  const formatTitle = (title: string) => {
    let formattedTitle = title
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    
    const replacements: { [key: string]: string } = {
      'Gentype': 'GenType',
      'Ai Roadtrip': 'AI Road Trip',
      'Llm Axis': 'LLM Axis',
      'Mit': 'MIT',
      'Bpm': 'BPM',
      'Vsco': 'VSCO'
    };

    Object.entries(replacements).forEach(([search, replace]) => {
      formattedTitle = formattedTitle.replace(search, replace);
    });

    return formattedTitle;
  };

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
      href={post.slug}
      className="flex h-48 w-full space-x-4 bg-gray-100 
        hover:bg-gray-200 rounded-md p-4
        phone:flex-col phone:space-x-0 phone:space-y-0 
        phone:h-auto phone:w-full phone:p-4"
    >
      {post.image && (
        <div className="flex-shrink-0 phone:border-0">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-64 object-cover bg-gray-50
              rounded-md phone:w-full phone:border-[1px] 
              phone:object-cover phone:h-64"
          />
        </div>
      )}
      <div className="flex flex-col justify-between flex-grow 
        phone:border-0 phone:justify-start phone:space-y-1 phone:pb-0">
        {isPhone ? (
          <div className="flex justify-between mt-2 phone:py-0">
            <div className="text-xl phone:text-base">
              {formatTitle(post.title)}
            </div>
          </div>
        ) : (
          <div className="flex justify-between w-full flex-shrink-0">
            <div className="text-lg text-gray-900 phone:text-base">
              {formatTitle(post.title)}
            </div>
          </div>
        )}
        <div className="leading-snug text-lg text-gray-500 phone:text-base">
          {post.description}
        </div>
        <div className="flex flex-wrap leading-snug phone:text-sm">
          <span className="bg-transparent border-[1px] text-gray-500
            border-gray-400 px-1 rounded-md mr-1 mt-1">
            {post.location}
          </span>
          <span className="bg-transparent border-[1px] text-gray-500
            border-gray-400 px-1 rounded-md mr-1 mt-1">
            {post.year}
          </span>
          {post.tags.split(', ').map((tag, index) => (
            <span
              key={index}
              className="bg-transparent border-[1px] text-gray-500
                border-gray-400 px-1 rounded-md mr-1 mt-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}