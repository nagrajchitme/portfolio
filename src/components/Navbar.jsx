import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div
      className="
      max-w-screen-2xl container mx-auto 
      px-4 md:px-20 h-16 
      fixed top-0 left-0 right-0 z-50 
      bg-white/80 backdrop-blur-md shadow-sm
    "
    >
      <div className="flex justify-between items-center h-full">
        {/* LOGO SECTION */}
        <div className="flex items-center space-x-3">
          <img
            src="/Frame.jpg"
            alt="Profile"
            className="h-12 w-12 rounded-full shadow-md"
          />
          <h1 className="font-semibold text-xl cursor-pointer tracking-wide">
            Nagra
            <span className="text-green-500 text-2xl">j</span>
            Chitm
            <span className="text-green-500 text-2xl">e</span>
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="
                cursor-pointer 
                hover:text-green-600 
                hover:scale-105 
                transition-all duration-200
              "
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden text-gray-700"
        >
          {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-16 left-0 w-full bg-white
          shadow-md md:hidden transition-all duration-300 
          ${
            menu
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col items-center py-6 space-y-6 text-lg font-semibold">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:text-green-600 transition duration-200"
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenu(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
