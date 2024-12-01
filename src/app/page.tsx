import Image from 'next/image';
import hero11 from '@/app/assets/hero11.jpg';
import room2 from '@/app/assets/room2.png';
import p1 from '@/app/assets/p1.jpg';
import p2 from '@/app/assets/p2.webp';
import p3 from '@/app/assets/p3.jpg';
import p4 from '@/app/assets/p4.webp';
import logo from '@/app/assets/Logo.png';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[600px] flex justify-center items-end">
        <div className="absolute inset-0 w-full h-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <Image
            src={hero11}
            alt="hero"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="bg-white h-[40px] flex items-center justify-center text-[1rem] sm:text-[1.2rem] w-[80%] mb-[25px] relative z-10">
          <p>
            Design is about creating harmony between the soul of a space 
            <a href="#" className="text-[#007185]"> Click here to go to </a>
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-[40px] sm:py-[80px] px-[20px] sm:px-[50px] w-full bg-white flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2">
          <Image
            src={room2}
            alt="home2"
            className="w-full h-auto rounded-2xl hover:scale-110 transform transition-transform duration-300"
          />
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-8">
          <h2 className="font-bold text-lg sm:text-xl text-gray-500 text-center sm:text-left">
            About Us
          </h2>
          <h1 className="font-bold text-2xl sm:text-4xl text-[#212529] text-center sm:text-left hover:shadow-lg transition-shadow duration-300">
            Minhaaj Design Factor
          </h1>
          <p className="font-normal text-sm sm:text-base text-[#212529] mt-6 font-serif text-justify sm:text-left">
            Welcome to Minhaaj Design Factor, a renowned design studio
            specializing in creating captivating spaces for residential, office,
            and commercial environments. With a passion for excellence and an
            unwavering commitment to client satisfaction, we redefine interior
            design through our artistry and innovation.
          </p>
          <p className="font-normal text-sm sm:text-base text-[#212529] mt-4 font-serif text-justify sm:text-left">
            At Minhaaj Design Factor, we understand that your living space is an
            extension of your personality and aspirations. Whether it’s a cozy
            home, a productive office, or a dynamic commercial setting, we
            believe in transforming spaces to reflect your unique style and
            vision.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start">
            <button className="w-full sm:w-auto font-medium text-[16px] sm:text-[18px] text-white bg-[#4F9CF9] py-2 px-6 sm:py-3 sm:px-10 rounded-md hover:scale-105 transform transition-all duration-300">
              Let’s Go
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 inline-block ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-[80px] sm:py-[140px] px-[20px] sm:px-[220px] w-full bg-white">
        <h1 className="font-bold text-4xl sm:text-[72px] text-[#212529] text-center mb-24 hover:scale-110 hover:rotate-6 hover:shadow-lg transform transition-all duration-300">
          Our Projects
        </h1>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {/* Upper Row */}
          <div className="w-full sm:w-[714px] h-auto flex items-center justify-center">
            <Image
              src={p1}
              alt="Project 1"
              className="w-full h-auto object-contain rounded-lg hover:scale-110 transform transition-transform duration-300"
            />
          </div>
          <div className="w-full sm:w-[714px] h-auto flex items-center justify-center hover:scale-110 transform transition-transform duration-300">
            <Image
              src={p4}
              alt="Project 2"
              className="w-full h-auto object-contain rounded-lg hover:scale-110 transform transition-transform duration-300"
            />
          </div>

          {/* Lower Row */}
          <div className="w-full sm:w-[714px] h-auto flex items-center justify-center rounded-lg hover:scale-110 transform transition-transform duration-300">
            <Image
              src={p2}
              alt="Project 3"
              className="w-full h-auto object-contain rounded-lg hover:scale-110 transform transition-transform duration-300"
            />
          </div>
          <div className="w-full sm:w-[714px] h-auto flex items-center justify-center">
            <Image
              src={p3}
              alt="Project 4"
              className="w-full h-auto object-contain rounded-lg hover:scale-110 transform transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
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
    </>
  );
}
