"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];


  return (
    <nav className="h-20 w-full">
      <div className="fixed w-full">
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
              {navLinks.map((link) => {
                  const isActive = router.endsWith(link.href);
                return (
                  <li key={link.name} className="mt-4 sm:mt-0">
                    <Link
                      href={link.href}
                      className={`${isActive?'text-gray-400':'text-white'} hover:text-gray-400 `}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
