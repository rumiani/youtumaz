"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full">
      <div className="w-11/12 bg-gray-800 px-4 py-2 my-2 rounded-lg mx-auto flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <span className="text-white align-middle text-xl pt-3 font-bold">
            YouTuMaz
          </span>
          <button
            className="block sm:hidden text-white font text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
        <div
          className={`bg-gray-900 sm:bg-transparent flex flex-col-reverse w-full p-4 sm:p-0 mt-2 rounded-lg sm:flex-row flex-grow justify-between items-center ${
            isOpen ? "block" : "hidden"
          } sm:flex text-center `}
        >
          <ul className="sm:flex  w-full mx-auto max-w-96 justify-around">
            <li className="mt-4 sm:mt-0">
              <Link href="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="mt-4 sm:mt-0">
              <Link href="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            <li className="mt-4 sm:mt-0">
              <Link href="/contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
