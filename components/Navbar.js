"use client"
import { useState } from "react";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" lg:flex-row  grid grid-2  xl:h-20 flex-row sm:w-45 xl:ml-4 xl:text-xl 2xl:h-auto xl:flex-row   xl:justify-between 2xl:flex-row   2xl:justify-between  items-center justify-between  md:flex-row  lg:justify-center xl:right-0 flex-wrap p-6">
      <div className="flex-row ml-0 xl:h-0 xl:mt-0  xl:pt-0 xl:flex-1 xl:mx-10 xl:px-10  xl:w-35 xl:flex-row sm:pr-0 flex  2xl:flex-row xl:ml-2 items-center lg:flex-row lg:justify-center lg:m-0  md:justify-between flex-shrink-0 text-white sm:mr-0  lg:mr-72">
        <a
          href="/"
          className="ml-0   xl:text-xl sm:ml-0 sm:pl-0 2xl:text-4xl  justify-start  pl-10  "
        >
         
            <img src="18.svg" className="w-auto h:auto  xl:w-35 sm:w-auto sm:h-auto  2xl:h-95 lg:h-10 xl:h-12 " alt="" />
         
        </a>
      </div>
      <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="xl:text-xl 2xl:text-4xl flex items-center px-3 py-2 lg:flex-row rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-8 w-5 ${isOpen ? "hidden" : "block"}     `}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
        <div
          id="mega-menu-full"
          className={` w-full xl:mt-0 xl:pt-0 block flex-grow lg:flex lg:mt-2 lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} `}
        >
          <ul className=" xl:text-xl xl:mt-0 xl:justify-end 2xl:justify-end   2xl:text-4xl sm:flex-col mr-8 flex flex-row md:p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="xl:text-xl 2xl:text-4xl block text-2xl md:text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="xl:text-xl 2xl:text-4xl flex text-2xl items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="xl:text-xl 2xl:text-4xl flex text-2xl items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Technologies{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="xl:text-xl 2xl:text-4xl block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" xl:text-xl 2xl:text-4xl block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
               Partnership
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" xl:text-xl 2xl:text-4xl block py-2 text-2xl px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" xl:text-xl 2xl:text-4xl block py-2 text-2xl px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Career
              </a>
            </li>
          </ul>
        </div>
        
    </nav>
  );
};

export default Navbar;
