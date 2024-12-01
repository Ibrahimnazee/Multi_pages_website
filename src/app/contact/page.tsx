import React from 'react';
import logo from '@/app/assets/Logo.png'
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-500 text-white py-6">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      </header>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
         <p>" We'd love to hear from you!"</p>
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
             
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email address"
           
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-600 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Type your message here..."
          
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* footer */}
      <div className="py-[40px] sm:py-[80px] px-[20px] sm:px-[50px] bg-black">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 text-white">
          <div className="w-full sm:w-[25%] text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <Image
                src={logo}
                alt="Logo"
                className="h-10 hover:scale-110 hover:shadow-xl transform transition-all duration-300"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              Whitepace was created for the new ways we live and work. We make a
              better workspace around the world.
            </p>
          </div>

          {['Product', 'Resources', 'Company'].map((section) => (
            <div key={section} className="w-full sm:w-[20%] text-center sm:text-left">
              <p className="font-bold text-sm sm:text-lg text-white mb-2">
                {section}
              </p>
              {['Overview', 'Pricing', 'Stories'].map((item) => (
                <p
                  key={item}
                  className="text-sm sm:text-base text-gray-300 hover:text-white cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-[#2E4E73] mt-8"></div>
        <div className="text-center text-white pt-4">
          <p className="text-sm sm:text-base text-gray-400">
            ©2021 Minhaaj Design Factor LLC.
          </p>
        </div>
      </div>

     
    </div>
  );
}
