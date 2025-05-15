import React, { useState } from 'react';

const Contact = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 p-6 md:p-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h1>
        <p className="text-gray-600 mb-6">Have a question? Feel free to reach out.</p>
      </div>

      {/* Flex container for side-by-side layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 md:p-10">
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handlechange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handlechange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formdata.message}
                onChange={handlechange}
                rows={5}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-pink-600 mb-4">Contact Information</h1>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="mb-4">
              <div className='flex gap-2  '><i className="fas fa-envelope text-2xl text-pink-600 "></i>           <p className="text-sm font-semibold text-gray-700">Email</p></div>
              <p className="text-pink-400">itsmelohitha@gmail.com</p>
            </div>

             <div className="mb-4">
              <div className='flex gap-2  '><i className="fab fa-github text-2xl text-pink-600 "></i>           <p className="text-sm font-semibold text-gray-700">Email</p></div>
              <p className="text-pink-400">@ItsmeLohitha14</p>
            </div>

            <div className="mb-4">
              <div className='flex gap-2  '><i className="fab fa-linkedin text-2xl text-pink-600 "></i><p className="text-sm font-semibold text-gray-700">LinkedIn</p></div>
              <p className="text-pink-400">Chittem Venkata Lohitha</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Connect with me</h2>
            <div className="flex space-x-4 text-pink-600">
              <a href="https://github.com/ItsmeLohitha14" target="_blank" rel="noreferrer">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://linkedin.com/in/your-link" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="mailto:itsmelohitha@gmail.com">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
