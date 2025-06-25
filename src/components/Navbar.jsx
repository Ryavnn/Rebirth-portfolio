
const Navbar = () => {
  return (
    <>
    <div className='w-full md:w-[700px] h-20 bg-white/10 mt-4 rounded-md flex justify-between items-center px-5'>
    <h1 className='text-xl text-white font-extrabold hidden md:flex'>Ryan Njoroge</h1>
    <div className='w-full md:w-[65%] flex'>
        <ul className='flex justify-evenly md:justify-between items-center w-full text-white text-lg'>
            <li>Tech-stack</li>
            <li>Services</li>
            <li>Projects</li>
            <li className='bg-green-500 text-white h-10 rounded-md p-2 w-30 text-center hidden md:block'>Get in touch</li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar