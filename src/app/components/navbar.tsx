"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/Logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="w-full bg-black py-4 px-4 md:px-8 lg:px-12 xl:px-28 flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Logo Section */}
        <div className="flex justify-between items-center w-full">
          <Image
            src={logo}
            alt="logo"
            className="h-auto max-h-16 w-auto md:max-h-20 lg:max-h-24 xl:max-h-28 hover:rotate-12 transform transition-transform duration-300"
          />
          {/* Hamburger Menu */}
          <button
            id="menu-btn"
            onClick={toggleMenu}
            className="text-white text-2xl md:hidden focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Links Section */}
        <div
          id="menu"
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-4 mt-4 md:mt-0 text-white text-sm sm:text-base md:text-lg lg:text-xl`}
        >
          <Link href="/" className="hover:opacity-75">
            <b>Home</b>
          </Link>
          <Link href="/about" className="hover:opacity-75">
            <b>About</b>
          </Link>
          <Link href="/projects" className="hover:opacity-75">
            <b>Projects</b>
          </Link>
          <Link href="/contact" className="hover:opacity-75">
            <b>Contact</b>
          </Link>
          <Link href="/services" className="hover:opacity-75">
            <b>Services</b>
          </Link>
        </div>
      </nav>
    </>
  );
}
