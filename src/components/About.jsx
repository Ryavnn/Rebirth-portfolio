import React from "react";
import Image from "../assets/portfolio_malo.jpg";

const About = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center "
      id="about"
    >
      <div className="w-full md:w-[90%] h-[90%] p-1 md:p-5 flex flex-col ">
        <h1 className="text-white font-bold text-lg">
          * <span className="text-[#64ffda]">About me</span>
        </h1>
        <p className="text-white font-bold text-2xl my-3">
          Get to know me better
        </p>
        <div className="w-full h-[90%] p-5 flex flex-col justify-center items-center md:flex-row gap-5 mt-4 ">
          <div className="w-full md:w-[50%] text-gray-400  text-[1.1rem]">
            <p className="">
              Hello! I’m Ryan, a full-stack web developer who enjoys creating
              engaging and user-friendly web applications.My journey in web
              development began back in 2020 when I started learning HTML, CSS,
              and JavaScript.
            </p>
            <p className="mt-2">
              Since then I have specialized in building seamless,
              conversion-ready web apps with React, Flask, and PostgreSQL having
              developed booking platforms, employee systems, admin dashboards,
              company websites and more each tailored to solve real business
              problems.
            </p>
            <p className="mt-2">
              Outside of tech, I’m into video games, curious about how
              businesses grow, and always up for quality time with the people
              who matter most.
            </p>
            <p className="mt-3">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="list-disc list-inside mt-2 grid grid-cols-2 gap-x-4">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Flask</li>
              <li>PostgreSQL</li>
              <li>Tailwind CSS</li>
              <li>Wordpress</li>
            </ul>
          </div>
          <div className="w-full md:w-[50%] text-white flex justify-center items-center">
            <div className="w-[250px] h-[250px] overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <img
                
                src={Image}
                alt="Service preview"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
