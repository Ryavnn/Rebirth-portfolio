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
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-[#0a192f]"
    >
      <div className="max-w-7xl w-full flex flex-col">
        <h2 className="text-white font-bold text-xl md:text-2xl">
          * <span className="text-[#64ffda]">Projects</span>
        </h2>
        <p className="text-white text-2xl md:text-3xl font-bold mt-2 mb-6">
          A glimpse into my past works
        </p>

        <div className="w-full flex flex-wrap justify-center gap-6">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[300px] bg-[#112240] border border-white/10 rounded-xl shadow-xl overflow-hidden flex flex-col"
            >
              <div className="h-40 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow text-white">
                <h3 className="text-lg font-semibold mb-2 text-[#64ffda]">
                  {project.title}
                </h3>

                <ul className="flex flex-wrap gap-2 mb-3 text-sm text-white/80">
                  {project.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-white/10 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-white/70 flex-grow mb-4">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-center bg-[#64ffda] text-[#0a192f] font-medium py-2 px-4 rounded hover:bg-[#52e0c4] transition"
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
