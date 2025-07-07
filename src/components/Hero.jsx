import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {


  return (
    <>
      <div
        className="w-full md:h-[100vh] min-h-[70vh]  flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
        id="hero"
      >
        <Navbar />
        <div className="h-full w-full flex justify-center item-center  text-white ">
          <div className="w-[90%] h-[90%] p-5 flex flex-col justify-center items-center md:items-start  gap-5 rounded-lg text-center">
            <h1 className="md:text-lg text-[#64ffda] pl-3 text-[1.5rem]">
              Hi, my name is
            </h1>
            <h2 className="md:text-8xl font-extrabold text-White text-5xl">
              Ryan Njoroge
            </h2>
            <h3 className="md:text-7xl font-extrabold text-gray-400 text-4xl">
              I build things for the web
            </h3>
            <p className="text-gray-300 md:text-left md:w-100 text-[1.2rem]">
              I'm a Fullstack developer specializing in building and 
              designing exceptional digital experience.
            </p>
            <a
              href="/Ryan_Njoroge_Resume.pdf"
              download
              className="px-4 w-[200px] h-10 flex items-center justify-center border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-gray-500 rounded-sm transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
