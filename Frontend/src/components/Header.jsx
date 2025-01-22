import React from 'react'
import { useEffect, useState } from 'react'
// import LightModeIcon from '@mui/icons-material/LightMode';

function Header() {
 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
     <header className={`${
        scrolled ? "bg-zinc-900 bg-opacity-80 text-white" : "bg-transparent"
      } text-black sticky top-0 shadow-md transition-all`}>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Branding */}
        <a href="/" className="text-2xl font-bold hover:text-gray-200">
          Tax Invoice Generator
        </a>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          id="menu-button"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          id="menu"
          className="hidden md:flex space-x-6 items-center font-medium"
        >
          <li>
            <a
              href="/home"
              className="hover:text-gray-300 transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/features"
              className="hover:text-gray-300 transition duration-200"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              className="hover:text-gray-300 transition duration-200"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-gray-300 transition duration-200"
            >
              Contact
            </a>
          </li>
          <li>
          {/* <LightModeIcon/> */}
          </li>
          <li>
            <a
              href="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-200"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header