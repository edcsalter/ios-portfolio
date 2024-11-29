import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

interface AppData {
  name: string;
  description: string;
  imageUrl: string;
  appStoreLink: string;
  technologies: string[];
  yearReleased: number;
  screenshots: string[]; // Add screenshots array
}

const apps: AppData[] = [
  {
    name: "D&D Beyond",
    description: "The official digital toolset for Dungeons & Dragons 5th Edition. Create characters, access rules, spells, and adventures on iOS and iPadOS.",
    imageUrl: "/images/dnd-beyond.png",
    appStoreLink: "https://apps.apple.com/us/app/d-d-beyond/id1501810129",
    technologies: ["Swift", "UIKit", "SwiftUI", "Core Data", "Push Notifications"],
    yearReleased: 2020,
    screenshots: [
      "/images/dnd-beyond-1.png",
      "/images/dnd-beyond-2.png",
      "/images/dnd-beyond-3.png",
    ]
  }
];

const ScreenshotCarousel: React.FC<{ screenshots: string[] }> = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="flex-none w-full"
            >
              <img 
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const AppCard: React.FC<AppData> = ({
  name,
  description,
  screenshots,
  appStoreLink,
  technologies,
  yearReleased
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <ScreenshotCarousel screenshots={screenshots} />
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <span className="text-sm text-gray-500">{yearReleased}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={appStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
      >
        View on App Store
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
            iOS Portfolio
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;