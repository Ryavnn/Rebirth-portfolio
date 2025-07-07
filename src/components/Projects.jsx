import React from "react";
import convenllc from "../assets/convenllc.jpg";
import flavourFusion from "../assets/flavour-fusion.jpg";
import restaurantSys from "../assets/restaurants-sys.jpg";
const Projects = () => {
  const projectData = [
    {
      title: "Restaurant Management System",
      description:
        "A full-stack restaurant management app with POS, kitchen display, manager dashboard, client-facing order tracking, and receipt generation. Improved efficiency, reduced order confusion, and streamlined operations across roles.",
      image: restaurantSys,
      techStack: ["React", "Tailwind", "Flask", "PostgreSQL"],
      link: "https://restaurant-management-system-ruby-xi.vercel.app",
    },
    {
      title: "Flavour Fusion",
      description:
        "A sleek, responsive recipe discovery app built with React and Tailwind CSS. It features clean UI, fast performance, and reusable components. Built with scalability in mind to support future features like meal planning, grocery lists, and user-generated recipes.",
      image: flavourFusion,
      techStack: ["React", "Tailwind"],
      link: "https://flavour-fusion-wheat.vercel.app/",
    },
    {
      title: "Conven Build Blueprint",
      description:
        "A construction company website for private and government clients. Developed using React, Tailwind, and ShadcnUI with scalable components, clear CTAs, service showcases, and optimized layout. Built for performance, accessibility, and future feature expansion.",
      image: convenllc,
      techStack: ["React", "Tailwind", "ShadcnUI"],
      link: "https://conven-build-blueprint.vercel.app/",
    },
    {
      title: "Employee Management System",
      description:
        "A full-featured employee management app for HRs, managers, and employees. Includes dashboards, role-based access, performance tracking, and leave requests. Developed with React and Flask to improve HR workflows and streamline internal processes.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi88XhdL4bEyh-d6N1gndDZq-qrGLd8uALZQ&s",
      techStack: ["React", "Tailwind", "Flask", "PostgreSQL"],
      link: "https://restaurant-management-system-ruby-xi.vercel.app",
    },

    // Add more projects as needed
  ];

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center "
      id="projects"
    >
      <div className="w-full md:w-full h-[90%] p-1 md:p-5 flex flex-col ">
        <h1 className="text-white font-bold text-lg">
          * <span className="text-[#64ffda]">Projects</span>
        </h1>
        <p className="text-white font-bold text-2xl my-3">
          A glimpse into my past works
        </p>
        <div className="w-full h-[90%] p-3 flex flex-col justify-center items-center md:flex-row gap-5  flex-wrap ">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[300px] min-h-80 shadow-xl flex flex-col items-center justify-center border border-white/20 rounded-xl"
            >
              <div className="w-full h-40 bg-gray-300 rounded-t-lg flex justify-center items-center">
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

                <p className="text-sm mb-3 text-gray-300">
                  {project.description}
                </p>
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
      </div>
    </div>
  );
};

export default Projects;
