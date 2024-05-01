import React from "react";

const Footer = () => {
  return (
    <footer classNameName=" items-center justify-center flex flex-col  sw-full flex  w-full bg-slate-800 text-white py-4 text-xs">
      <div className=" flex-row 2xl:justify-around 2xl:mr-0  xl:justify-between   xl:mx-4  2xl:px-4 xl:text-xl 2xl:text-4xl sm:ml-4 grid grid-cols-3  gap-6  sm:justify-between sm:gap-y-10 lg:grid-cols-4  md:flex md:justify-between max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
        <ul
          className=" flex-col 2xl:justify-around xl:justify-between  xl:text-xl 2xl:text-4xl hidden mb-4 sm:flex sm:flex-col space-y-5 md:mb-0 md:block"
          aria-labelledby="mega-menu-full-image-button"
        >
          <span className=" space-y-4 mx-4 "><img className="space-y-4 sm:h-auto sm:w-auto h-8" src="18.svg" alt="" /></span>
          <li className=" xl:text-xl 2xl:text-4xl flex flex-row">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline space-y-4 text-sm md:text-xl flex flex-row space-x-4 hover:text-blue-600 dark:hover:text-blue-500"
            ><img src="location.svg" className="h-12 w-12" alt="location"/>
              C-171 Sector-63 Noida,Uttar Pradesh 201301
            </a>
          </li>
          <li className=" xl:text-xl 2xl:text-4xl flex flex-row">
           
            <a
              href="#"
              className=" xl:text-xl 2xl:text-4xl hover:underline text-sm md:text-xl flex flex-row space-x-4 hover:text-blue-600 dark:hover:text-blue-500"
            ><img src="location.svg" className="h-12 w-12" alt="location"/>
              Platina Height ,C-24,Sector 62,Noida,Uttar Pradesh 201301
            </a>
            
          </li>
          <li className="xl:text-xl 2xl:text-4xl flex flex-row text-xl space-x-4">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline  hover:text-blue-600 dark:hover:text-blue-500"
            >
            <img src="facebook.svg" alt="" className="h-12 w-12" />

            </a>
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
            <img  src="instagram.svg" alt="" className="h-12 w-12" />
            
            </a>
            <a
              href="#"
              className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
            <img src="twitter.svg" alt="" className="h-12 w-12" />
            
            </a>
          </li>
          
          
        </ul>
       
        <ul className="xl:text-xl 2xl:text-4xl mb-4 justify-around space-y-4 md:mb-0">
            <h1 className="xl:text-4xl 2xl:text-6xl text-blue-500 px-4 py-4 font-bold text-2xl"> Services</h1>
          <li className="xl:text-xl 2xl:text-4xl text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Expertise
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-4xl text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Web development
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-4xl text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Mobile App development
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-4xl text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              UI/UX design
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-4xl text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Hire Developer
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-4xl text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Become a Partner
            </a>
          </li>
        </ul>
        <ul className="mb-4 space-y-4  md:mb-0">
            <h1 className="xl:text-4xl 2xl:text-6xl text-blue-500 px-4 py-4 font-bold text-2xl">Expertise</h1>
          <li className="xl:text-xl 2xl:text-4xl text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Blockchain App Development
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-4xl text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              AI App Development
            </a>
          </li >
          <li className="xl:text-xl 2xl:text-4xl text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              IoT App development
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-4xl text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-4xl hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Blockchain App Development
            </a>
          </li>
          </ul>
      </div>

    
    <ul className=' xl:text-xl 2xl:text-4xl flex flex-row py-4 px-4 mx-4 my-4 space-x-11  text-gray-600 border-2xl justify-center   text-center  text-xl '>
      <li className="xl:text-xl 2xl:text-4xl text-xl">
        2023 Techlerate
      </li>
      <li className="xl:text-xl 2xl:text-4xl text-xl">
        Privacy Policy
      </li>
      <li className="xl:text-xl 2xl:text-4xl text-xl">
        Term & Condition
      </li>
      </ul>
   
</footer>
  );
};

export default Footer;
