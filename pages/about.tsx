import React from 'react';
import Layout from "../components/Layout";

const About: React.FC = () => {
  const skills = [
    "Swift", "SwiftUI", "UIKit", "Core Data", "Push Notifications",
    "Firebase", "REST APIs", "Git", "App Store Connect"
  ];

  const experience = [
    {
      company: "Wizards of the Coast",
      role: "iOS Developer",
      period: "2019 - Present",
      projects: [
        {
          name: "D&D Beyond",
          description: "Led iOS development for the official D&D digital toolset",
          achievements: [
            "Implemented SwiftUI-based character creation flow",
            "Integrated Core Data for offline functionality",
            "Developed real-time game session features"
          ]
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Professional Summary */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
            <p className="text-lg text-gray-600">
              Experienced iOS developer passionate about creating intuitive and powerful 
              mobile applications. Specialized in SwiftUI and UIKit development with 
              a focus on delivering high-quality user experiences.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Technologies & Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                <p className="text-gray-600 mb-2">{exp.role} | {exp.period}</p>
                
                {exp.projects.map((project, pIndex) => (
                  <div key={pIndex} className="ml-4 mb-4">
                    <h4 className="font-medium text-gray-800">{project.name}</h4>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                    <ul className="list-disc list-inside text-gray-600">
                      {project.achievements.map((achievement, aIndex) => (
                        <li key={aIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;