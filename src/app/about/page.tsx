import Image from 'next/image';
import abouth1 from '@/app/assets/abouth1.jpg';
import h1 from '@/app/assets/h1.jpeg';
import h2 from '@/app/assets/h2.jpeg';
import logo from '@/app/assets/Logo.png';

export default async function About() {
  return (
    <>
      <div className="relative w-full h-[700px] flex justify-center items-end">
        <div className="absolute inset-0 w-full h-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <Image
            src={abouth1}
            alt="hero"
            layout="fill"
            className="object-cover"
          />
          <div className="text-black text-lg md:text-xl lg:text-2xl">
            About Us
          </div>
        </div>

        <div className="bg-white w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-[40px] flex items-center justify-center text-[1rem] mb-[25px] relative z-10">
          <p>
            Design is about creating harmony between the soul of a space and the
            needs of the people within it
            <a href="#" className="text-[#007185]">
              {' '}
              Click here to go to
            </a>
          </p>
        </div>
      </div>

      <div className="w-full h-auto bg-slate-300 py-8 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="w-full lg:w-1/2 h-auto flex-shrink-0">
          <Image
            src={h1}
            alt="Google Logo"
            className="w-full h-auto object-contain rounded-3xl hover:scale-110 transform transition-transform duration-300"
          />
        </div>

        <div className="w-full lg:w-1/2 h-auto text-left overflow-y-auto p-6 rounded-2xl shadow-md">
          <p className="text-justify leading-relaxed font-sans text-base md:text-lg lg:text-xl">
            Welcome to Minhaaj Design Factor, where we bring your design
            aspirations to life. With a passion for transforming spaces and an
            unwavering commitment to excellence, we are dedicated to creating
            interior environments that inspire and uplift.
          </p>
          <p className="text-justify leading-relaxed font-sans text-base md:text-lg lg:text-xl mt-4">
            At Minhaaj Design Factor, we understand that each space is unique
            and has its own story to tell. Our team of talented designers and
            decorators work closely with clients to understand their vision,
            preferences, and functional requirements...
          </p>
        </div>
      </div>

      <div className="w-full h-auto bg-slate-300 py-8 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row-reverse items-center justify-center gap-8">
        <div className="w-full lg:w-1/2 h-auto flex-shrink-0">
          <Image
            src={h2}
            alt="Google Logo"
            className="w-full h-auto object-contain rounded-full hover:scale-110 transform transition-transform duration-300"
          />
        </div>

        <div className="w-full lg:w-1/2 h-auto text-left overflow-y-auto p-6 rounded-2xl shadow-md bg-red-50">
          <p className="text-justify leading-relaxed font-sans text-base md:text-lg lg:text-xl">
            Our goal is to create spaces that truly reflect our clients’
            personality and lifestyle while exceeding their expectations.
          </p>
          <p className="text-justify leading-relaxed font-sans text-base md:text-lg lg:text-xl mt-4">
            At Minhaaj Design Factor, we believe in the power of innovation. We
            strive to push boundaries, exploring new materials, techniques, and
            technologies to bring fresh and exciting ideas to life...
          </p>
        </div>
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
