
const Navbar = () => {
  return (
    <>
      <div className="w-[90%] md:w-[700px] h-20 bg-white/10 mt-1 rounded-md flex justify-between items-center px-5 fixed top-0 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md">
        <h1 className="text-xl text-white font-extrabold hidden md:flex">
          Njoroge.dev
        </h1>
        <div className="w-full md:w-[65%] flex">
          <ul className="flex justify-evenly md:justify-between items-center w-full text-white text-lg">
            <li className="cursor-pointer">
              <a href="#services">Services</a>
            </li>
            <li className="cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="bg-[#64ffda] text-gray-500 h-10 rounded-md p-1 pl-1 w-30 text-center hidden md:flex cursor-pointer hover:border hover:border-[#64ffda] hover:bg-transparent hover:text-white">
              <a href="#contact">Get in touch</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar