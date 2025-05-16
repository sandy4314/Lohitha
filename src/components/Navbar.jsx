import React, { useState } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-100 text-base-content shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer font-bold text-2xl font-[Poppins] text-pink-500 select-none">
          <span className="text-3xl mr-1 pt-1">
            <ion-icon name="laptop-outline"></ion-icon>
          </span>
          Lohitha
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-pink-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Theme Toggle on desktop */}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile menu icon + Theme Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          {/* Theme toggle visible on mobile */}
          <ThemeToggle />

          {/* Hamburger / Close icon */}
          <button
            onClick={() => setOpen(!open)}
            className="relative text-3xl focus:outline-none text-base-content "
            aria-label="Toggle menu"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-pink-500 text-white flex flex-col pt-20 px-8 space-y-8 transform transition-transform duration-300 ease-in-out z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {Links.map((link) => (
          <li key={link.name} className="text-2xl font-semibold">
            <Link
              to={link.link}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-black transition-colors duration-300"
              onClick={() => setOpen(false)} // close menu on click
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
