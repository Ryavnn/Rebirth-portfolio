import React from 'react'

const Projects = () => {
    const projectData = [
      {
        title: "Restaurant Management System",
        description:
          "A full-stack restaurant management app with POS, kitchen display, manager dashboard, client-facing order tracking, and receipt generation. Improved efficiency, reduced order confusion, and streamlined operations across roles.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi88XhdL4bEyh-d6N1gndDZq-qrGLd8uALZQ&s",
        techStack: ["React", "Tailwind", "Flask", "PostgreSQL"],
        link: "https://restaurant-management-system-ruby-xi.vercel.app",
      },
      {
        title: "Flavour Fusion",
        description:
          "FlavourFusion is a sleek, responsive recipe discovery platform built using React and Tailwind CSS. The site is optimized for performance and built with scalable, reusable components, making it easy to expand into features like meal planning and community contributions.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi88XhdL4bEyh-d6N1gndDZq-qrGLd8uALZQ&s",
        techStack: ["React", "Tailwind"],
        link: "https://conven-build-blueprint.vercel.app/",
      },
      {
        title: "Conven Build Blueprint",
        description:
          "ConvenBuild, a construction company site targeting private and government clients. Used React, Tailwind CSS, and shadcn/ui to create a clean, modern layout with strong CTAs, service sections, and portfolio previews. Focused on performance, accessibility, and scalable components for future features like quote forms and case studies.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi88XhdL4bEyh-d6N1gndDZq-qrGLd8uALZQ&s",
        techStack: ["React", "Tailwind", "ShadcnUI"],
        link: "https://conven-build-blueprint.vercel.app/",
      },
      {
        title: "Employee Management System",
        description:
          "Description of project 1 goes here. It was built using React and Flask.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi88XhdL4bEyh-d6N1gndDZq-qrGLd8uALZQ&s",
        techStack: ["React", "Tailwind", "Flask", "PostgreSQL"],
        link: "https://restaurant-management-system-ruby-xi.vercel.app",
      },

      // Add more projects as needed
    ];
      
  return (
    <div className="w-full h-[90%] p-5 flex flex-col justify-center items-center md:flex-row gap-5 mt-4 flex-wrap">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="w-full md:w-[300px] min-h-80 shadow-xl flex flex-col items-center justify-center border border-white/20 rounded-xl"
        >
          <div className="w-full h-1/2 bg-gray-300 rounded-t-lg flex justify-center items-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="w-full h-1/2 p-2 text-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">
              {project.title}
            </h3>
            <ul className="flex items-center w-full h-10 p-2 text-white gap-1">
              {project.techStack.map((tech, i) => (
                <li key={i} className="tech-stack">
                  {tech}
                </li>
              ))}
            </ul>

            <p className="text-sm mb-3 text-gray-300">{project.description}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[90%] h-10 text-lg bg-[#64ffda] mb-2 rounded-md text-gray-800 flex justify-center items-center hover:bg-[#64ffda]/80 transition-colors duration-300"
          >
            View Live
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects