import React from 'react';
import Image from 'next/image';
import lr1 from '@/app/assets/lr1.jpg';
import lr2 from '@/app/assets/lr2.jpg';
import lr3 from '@/app/assets/lr3.jpg';
import lr4 from '@/app/assets/lr4.jpg';
import lr5 from '@/app/assets/lr5.jpg';
import k1 from '@/app/assets/k1.jpg';
import k2 from '@/app/assets/k2.jpg';
import k3 from '@/app/assets/k3.jpg';
import k4 from '@/app/assets/k4.jpg';
import k5 from '@/app/assets/k5.jpg';
import w1 from '@/app/assets/w1.jpg';
import w2 from '@/app/assets/w2.jpg';
import w3 from '@/app/assets/w3.jpg';
import w4 from '@/app/assets/w4.jpg';
import w5 from '@/app/assets/w5.jpg';
import b1 from '@/app/assets/b1.webp';
import b2 from '@/app/assets/b2.webp';
import b3 from '@/app/assets/b3.webp';
import b4 from '@/app/assets/b4.webp';
import b5 from '@/app/assets/b5.jpg';
import bd1 from '@/app/assets/bd1.jpg';
import bd2 from '@/app/assets/bd2.jpg';
import bd3 from '@/app/assets/bd3.jpg';
import bd4 from '@/app/assets/bd4.jpg';
import bd5 from '@/app/assets/bd5.jpg';
import logo from '@/app/assets/Logo.png';

const Projects = () => {
  return (
    <div>
      <div className="w-full h-auto bg-gray-100 py-12 px-40 ">
        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <h1 className="text-3xl font-bold font-sans flex px-8 py-2">
              Living Room
            </h1>
            <p className="font-sans py-4 px-8">
              Transform your living room with Minhaaj Design Factor’s
              exceptional interior design .
            </p>
          </div>

          {/* Box 2 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={lr2}
              alt="Box 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 3 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={lr3}
              alt="Box 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 4 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={lr4}
              alt="Box 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 5 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={lr5}
              alt="Box 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 6 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={lr1}
              alt="Box 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <button className="bg-yellow-500 h-12 w-40 rounded-full hover:bg-black text-white p-3 font-sans font-bold">
          View More
        </button>
      </div>

      <div className=" w-full h-auto bg-gray-100 py-12 px-28">
        {/* Grid Container */}
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className=" hover:scale-110 transform transition-transform duration-300 w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl ">
            <h1 className="text-3xl font-bold font-sans flex px-8 py-2">
              Kitchen
            </h1>
            <p className="font-sans py-4 px-8">
              Transform your kitchen with Minhaaj Design Factor exceptional
              interior design .
            </p>
          </div>

          {/* Box 2 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-300">
            <Image
              src={k1}
              alt="Box 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 3 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden hover:scale-110 transform transition-transform duration-100">
            <Image
              src={k2}
              alt="Box 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 4 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={k3}
              alt="Box 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 5 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={k4} // Replace with your image source
              alt="Box 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 6 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={k5} // Replace with your image source
              alt="Box 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <button className="bg-yellow-500 h-12 w-40 rounded-full hover:bg-black text-white p-3 font-sans font-bold">
          View More
        </button>
      </div>

      <div className=" w-full h-auto bg-gray-100 py-12 px-28">
        {/* Grid Container */}
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className=" hover:scale-110 transform transition-transform duration-300 w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl ">
            <h1 className="text-3xl font-bold font-sans flex px-8 py-2">
              Wardrobes
            </h1>
            <p className="font-sans py-4 px-8">
              Transform your wardrobes with Minhaaj Design Factor exceptional
              interior design .
            </p>
          </div>

          {/* Box 2 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-300">
            <Image
              src={w1} // Replace with your image source
              alt="Box 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 3 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden hover:scale-110 transform transition-transform duration-100">
            <Image
              src={w2} // Replace with your image source
              alt="Box 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 4 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={w3} // Replace with your image source
              alt="Box 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 5 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={w4} // Replace with your image source
              alt="Box 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 6 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={w5} // Replace with your image source
              alt="Box 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <button className="bg-yellow-500 h-12 w-40 rounded-full hover:bg-black text-white p-3 font-sans font-bold">
          View More
        </button>
      </div>

      <div className=" w-full h-auto bg-gray-100 py-12 px-28">
        {/* Grid Container */}
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className=" hover:scale-110 transform transition-transform duration-300 w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl ">
            <h1 className="text-3xl font-bold font-sans flex px-8 py-2">
              Bathroom
            </h1>
            <p className="font-sans py-4 px-8">
              Transform your bathroom with Minhaaj Design Factor exceptional
              interior design .
            </p>
          </div>

          {/* Box 2 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-300">
            <Image
              src={b1} // Replace with your image source
              alt="Box 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 3 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden hover:scale-110 transform transition-transform duration-100">
            <Image
              src={b2} // Replace with your image source
              alt="Box 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 4 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={b3} // Replace with your image source
              alt="Box 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 5 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={b4} // Replace with your image source
              alt="Box 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 6 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={b5} // Replace with your image source
              alt="Box 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <button className="bg-yellow-500 h-12 w-40 rounded-full hover:bg-black text-white p-3 font-sans font-bold">
          View More
        </button>
      </div>

      <div className=" w-full h-auto bg-gray-100 py-12 px-28">
        {/* Grid Container */}
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className=" hover:scale-110 transform transition-transform duration-300 w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl ">
            <h1 className="text-3xl font-bold font-sans flex px-8 py-2">
              Bedrooms
            </h1>
            <p className="font-sans py-4 px-8">
              Transform your bedrooms with Minhaaj Design Factor exceptional
              interior design .
            </p>
          </div>

          {/* Box 2 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-300">
            <Image
              src={bd1} // Replace with your image source
              alt="Box 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 3 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden hover:scale-110 transform transition-transform duration-100">
            <Image
              src={bd2} // Replace with your image source
              alt="Box 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 4 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={bd3} // Replace with your image source
              alt="Box 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 5 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={bd4} // Replace with your image source
              alt="Box 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 6 */}
          <div className="w-full h-[200px] bg-white shadow-md rounded-lg overflow-hidden  hover:scale-110 transform transition-transform duration-100">
            <Image
              src={bd5} // Replace with your image source
              alt="Box 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  py-28">
        <button className="bg-yellow-500 h-12 w-40 rounded-full hover:bg-black text-white p-3 font-sans font-bold">
          View More
        </button>
      </div>

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
            <div
              key={section}
              className="w-full sm:w-[20%] text-center sm:text-left"
            >
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
};

export default Projects;
