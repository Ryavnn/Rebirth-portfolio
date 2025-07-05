import React from 'react'

const ContactUs = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-[90%] h-[90%] p-5 flex justify-center items-center bg-[#8892b0] rounded-xl">
        <div className="h-[90%] w-120">
          <h1 className="text-[1.8rem] font-bold text-white ">Get in touch</h1>
          <p className="mb-2 text-white">
            Whether you want to collaborate or just chat about your next big
            idea, I'm just an email away. Let's connect!
          </p>
          <div>
            <form className="flex flex-col gap-3">
              <label className="text-gray-700 ">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="p-2 rounded-md bg-amber-50 outline-none focus:outline-none"
              />
              <label className="text-gray-700">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="p-2 rounded-md bg-amber-50 outline-none focus:outline-none"
              />
              <label className="text-gray-700">Message</label>
              <textarea
                placeholder="Enter message here..."
                className="p-2 rounded-md h-32 bg-amber-50 outline-none focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#0a192f] text-white p-2 rounded-md hover:bg-[#64ffda] hover:text-gray-900 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs