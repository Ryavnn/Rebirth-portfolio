import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-[url(/assets/background.png)] flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div className="h-full w-full flex justify-center item-center  text-white ">
          <div className="w-[90%] h-[90%] p-5 flex flex-col justify-center  gap-5 rounded-lg ">
            <h1 className="text-lg text-green-400 pl-3">Hi, my name is</h1>
            <h2 className="text-8xl font-extrabold text-gray-500">
              Ryan Njoroge
            </h2>
            <h3 className="text-7xl font-extrabold text-gray-400">
              I build things for the web
            </h3>
            <p className="text-gray-300 text- w-100">
              I'm a fronted developer specializing in building and even
              designing expectational digital expirience.
            </p>
            <button className="px-1 w-50 h-10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-sm">Download Resume</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
