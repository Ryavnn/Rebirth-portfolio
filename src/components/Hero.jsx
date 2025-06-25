import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {


  return (
    <>
      <div className="w-full md:h-[100vh] h-[70vh] bg-[url(/assets/background.png)] flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div className="h-full w-full flex justify-center item-center  text-white ">
          <div className="w-[90%] h-[90%] p-5 flex flex-col justify-center items-center md:items-start  gap-5 rounded-lg text-center">
            <h1 className="md:text-lg text-green-400 pl-3 text-[1.5rem]">Hi, my name is</h1>
            <h2 className="md:text-8xl font-extrabold text-gray-500 text-5xl">
              Ryan Njoroge
            </h2>
            <h3 className="md:text-7xl font-extrabold text-gray-400 text-4xl">
              I build things for the web
            </h3>
            <p className="text-gray-300 text- md:w-100 text-[1.2rem]">
              I'm a fronted developer specializing in building and even
              designing expectational digital expirience.
            </p>
            <a
              href="/resume.pdf"
              download
              className="px-4 w-[200px] h-10 flex items-center justify-center border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-sm transition"
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
