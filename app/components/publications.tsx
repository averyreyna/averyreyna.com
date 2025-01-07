import React from 'react';

interface Publication {
  title: string;
  description: string;
  image: string;
  url?: string;
}

const publications: Publication[] = [
  {
    title: 'Help Supporters',
    description: 'Exploring the Design Space of Assistive Technologies to Support Face-to-Face Help Between Blind and Sighted Strangers',
    image: '/help_supporters/person_finder_glasses.png',
    url: 'https://dl.acm.org/doi/10.1145/3613904.3642816'
  },
  {
    title: 'SpaceNav',
    description: 'Understanding Blind and Low Vision Users\' Attitudes Towards Spatial Interactions in Desktop Screen Readers',
    image: '/spacenav/chrome_extension.png',
    url: 'https://dl.acm.org/doi/10.1145/3597638.3614490'
  }
];

function PublicationCard({ publication }: { publication: Publication }) {
  const formatTitle = (title: string) => {
    return title
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 phone:p-4">
      <a href={publication.url} className="flex-grow">
        <div className="w-full flex justify-center items-center rounded-md p-4 phone:p-0">
          <img 
            src={publication.image} 
            alt={publication.title}
            className="w-fit h-auto rounded-md max-h-96"
          />
        </div>
        <div className="text-gray-900 mt-2 text-lg phone:text-base">
          {formatTitle(publication.title)}
        </div>
        <div className="text-gray-500 text-lg phone:text-base">
          {publication.description}
        </div>
      </a>
    </div>
  );
}

export default function Publications() {
  // Split publications into featured (first) and rest
  const [featured, ...rest] = publications;
  
  return (
    <div className="space-y-4">
      {/* Featured Publication */}
      {featured && (
        <div>
          <PublicationCard publication={featured} />
        </div>
      )}
      
      {/* Remaining Publications in 2-column grid */}
      {rest.length > 0 && (
        <div className="flex space-x-4 mt-4 phone:flex-col phone:space-x-0 phone:space-y-4">
          {rest.map((publication, index) => (
            <div key={index} className="w-1/2 phone:w-full">
              <PublicationCard publication={publication} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}