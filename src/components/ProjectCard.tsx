import React from 'react';
import Image from 'next/image';

// Define the props for your component for type safety
type ProjectCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, tags, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {/* The main container no longer needs card-specific styles like bg-white or shadow-lg */}
      <div>
        {/* 1. Project Image with border and rounded corners */}
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="w-full h-auto rounded-lg border border-gray-200"
        />

        {/* 2. Project Title */}
        <h3 className="mt-4 text-xl font-semibold text-gray-900">
          {title}
        </h3>

        {/* 3. Project Description */}
        <p className="mt-2 text-base text-gray-600">
          {description}
        </p>

        {/* 4. Tags container */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
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