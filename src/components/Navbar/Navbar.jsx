import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {


      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white z-40 border-gray-200 transition-[padding] duration-300 dark:bg-slate-700 fixed start-0 right-0 top-0 ${isScrolled ? "py-0" : "py-2"
        }`}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link to="/" className="text-3xl font-bold text-white">
          <h1>START FRAMEWORK</h1>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-slate-700 md:dark:bg-slate-700 dark:border-slate-700">
            <li>
              <NavLink
                to="/about"
                className="block py-3 px-2 rounded-md text-white font-bold"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="block py-3 md:px-1 rounded-md text-white font-bold"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-3 px-2 rounded-md text-white font-bold"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}