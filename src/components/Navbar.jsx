
const Navbar = () => {
  return (
    <>
      <div className="w-[90%] md:w-[700px] h-20 bg-white/10 m-2 rounded-md flex justify-between items-center px-5">
        <h1 className="text-xl text-white font-extrabold hidden md:flex">
          Njoroge.dev
        </h1>
        <div className="w-full md:w-[65%] flex">
          <ul className="flex justify-evenly md:justify-between items-center w-full text-white text-lg">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Projects</li>
            <li className="bg-[#64ffda] text-gray-500 h-10 rounded-md p-1 pl-1 w-30 text-center hidden md:flex cursor-pointer hover:border hover:border-[#64ffda] hover:bg-transparent">
              Get in touch
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar