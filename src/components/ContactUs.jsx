import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
const ContactUs = () => {
    const [state, handleSubmit] = useForm("xkgbajaw");
    if (state.succeeded) {
        return (
          <div className="h-screen flex items-center justify-center bg-[#0a192f]">
            <p className="text-white text-xl font-semibold">Thanks for your submission! 👋</p>
          </div>
        );
    }
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
            <form className="flex flex-col gap-3" onSubmit={handleSubmit} method='POST'>
              <label className="text-gray-700 ">Name</label>
              <input
                type="text"
                name='name'
                placeholder="John Doe"
                className="p-2 rounded-md bg-amber-50 outline-none focus:outline-none"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <label className="text-gray-700">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                name='email'
                className="p-2 rounded-md bg-amber-50 outline-none focus:outline-none"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label className="text-gray-700">Message</label>
              <textarea
                placeholder="Enter message here..."
                className="p-2 rounded-md h-32 bg-amber-50 outline-none focus:outline-none"
                name='message'
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
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