import React from 'react';
import Image from 'next/image';
import s1 from '@/app/assets/s1.jpg';
import s2 from '@/app/assets/s2.jpg';
import s3 from '@/app/assets/s3.jpeg';
import s4 from '@/app/assets/s4.jpeg';
import s5 from '@/app/assets/s5.jpeg';
import s6 from '@/app/assets/s6.jpeg'; 

export default function Services() {
  const services = [
    {
      title: 'Residential Design',
      description:
        'Transform your living spaces with stylish, comfortable, and functional designs tailored to your lifestyle.',
      image: s1,
    },
    {
      title: 'Commercial Design',
      description:
        'Create inspiring and professional commercial spaces that enhance productivity and brand identity.',
      image: s2,
    },
    {
      title: 'Space Planning',
      description:
        'Maximize your space with our expert space planning solutions for small and large areas.',
      image: s3,
    },
    {
      title: 'Lighting Design',
      description:
        'Add warmth and elegance to your spaces with our bespoke lighting design solutions.',
      image: s4,
    },
    {
      title: 'Custom Furniture',
      description:
        'Enhance your interiors with bespoke furniture pieces designed to match your style.',
      image: s5,
    },
    {
      title: 'Color Consultation',
      description:
        'Discover the perfect color palette to bring harmony and vibrance to your interiors.',
      image: s6,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gray-600 text-white py-8">
        <h1 className="text-4xl font-bold text-center">Minhaaj Interior Design</h1>
      </header>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Discover Our Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full group">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-slate-500 text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-6">
            Contact us today to schedule a consultation and bring your dream interiors to life.
          </p>
          <a
            href="/contact"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Interior Design Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
