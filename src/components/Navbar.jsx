import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll


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
    <div className="min-h-[64px] w-full fixed top-0 left-0 bg-white z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="text-pink-500 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] ">
          <span className="text-3xl  mr-1 pt-2">
            <ion-icon name="laptop-outline"></ion-icon>
          </span>
          Lohitha
        </div>

        
        <div
            onClick={() => setOpen(!open)}
            className="text-3xl md:hidden fixed top-6 right-6 cursor-pointer z-50 text-black">
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
            className={`
            md:flex md:items-center md:static md:flex-row md:bg-white md:h-auto md:w-auto md:pt-0
            fixed top-0 right-0 h-screen w-1/2 bg-pink-500 flex flex-col items-center pt-24 transition-all duration-500 ease-in-out z-40
          ${open ? 'right-0' : 'right-[-100%]'}
            `}
        >
        {Links.map((link) => (
            <li key={link.name} className="text-xl my-4 md:ml-8 md:my-0">
            <Link
                to={link.link}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white md:text-gray-800 cursor-pointer hover:text-gray-300 md:hover:text-gray-400 duration-300"
                onClick={() => setOpen(false)} // Optional: auto-close on mobile
            >
                {link.name}
            </Link>
            </li>
  ))}
</ul>


        

      </div>
    </div>
  );
};

export default Navbar;
