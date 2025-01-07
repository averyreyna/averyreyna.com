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
    description: 'Bringing richer website layout understanding to blind and low-vision users',
    image: '/spacenav/chrome_extension.png',
    url: 'https://dl.acm.org/doi/10.1145/3597638.3614490'
  },
  {
    title: 'CoupCast',
    description: 'Understanding Blind and Low Vision Users\' Attitudes Towards Spatial Interactions in Desktop Screen Readers',
    image: '/coupcast/mali_coup_data.png',
    url: 'https://dl.acm.org/doi/10.1145/3597638.3614490'
  }
];

function PublicationCard({ publication, featured = false }: { publication: Publication, featured?: boolean }) {
  const imageContainerClasses = featured
    ? "w-full flex justify-center items-center rounded-lg p-4 phone:p-0"
    : "w-full h-64 flex justify-center items-center rounded-lg p-4 phone:p-0";

  const imageClasses = featured
    ? "w-fit h-auto rounded-lg max-h-96"
    : "w-full h-full object-cover rounded-lg";

  return (
    <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 phone:p-4">
      <a href={publication.url} className="flex-grow">
        <div className={imageContainerClasses}>
          <img 
            src={publication.image} 
            alt={publication.title}
            className={imageClasses}
          />
        </div>
        <div className="text-gray-900 mt-2 text-base font-medium phone:text-sm">
          {publication.title}
        </div>
        <div className="text-gray-500 text-sm mt-1 phone:text-xs">
          {publication.description}
        </div>
      </a>
    </div>
  );
}

export default function Publications() {
  const [featured, ...rest] = publications;
  
  return (
    <div className="space-y-4">
      {/* Featured Publication */}
      {featured && (
        <div>
          <PublicationCard publication={featured} featured={true} />
        </div>
      )}
      
      {/* Remaining Publications in 2-column grid */}
      {rest.length > 0 && (
        <div className="flex space-x-4 mt-4 phone:flex-col phone:space-x-0 phone:space-y-4">
          {rest.map((publication, index) => (
            <div key={index} className="w-1/2 phone:w-full">
              <PublicationCard publication={publication} featured={false} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}