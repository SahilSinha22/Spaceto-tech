"use client";
import React from "react";

const bar = () => {
  return (
    <nav className=" md:w-auto xl:w-auto xl:p-0 xl:m-0  md:justify-center   2xl:justify-end  mr-4 xl:justify-end bg-blue-600  sm:w-auto sm:p-0 sm:justify-start  sm:font-small sm:flex-col  flex flex-row border-gray-200 dark:bg-gray-900  max-h-14 items-center justify-end  ">
      <div className=" xl:mr-0 2xl:mr-0 xl:text-lg 2xl:text-2xl flex flex-row justify-end   2xl:justify-end  lg:justify-end xl:justify-end  md:items-center sm:justify-start sm:p-0  sm:text-small sm:m-0  sm: ml-1 sm:text-start  sm:items-center  sm:flex-col items-center mr-0 max-w-screen-xl p-3 xl:pr-2  ">
        <div className="  xl:text-lg xl:pr-0  xl:mr-0  xl:p-0 xl:m-0 2xl:text-2xl flex flex-row  ml-8 2xl:justify-end items-center xl:justify-end lg:justify-end md:w-full md:justify-end  sm:pl-0 sm:mx-2 sm: m-0 sm:text-sm text-2xl rtl:space-x-reverse ">
          <a
            href="#"
            className="xl:text-lg 2xl:text-2xl text-xl   md:mx-2  md:text-xl sm:pl-0 sm:left-0 sm:text-sm sm:ml-0 mb-2 text-gray-200  dark:text-blue-500 hover:underline"
          >
            Feature Listing
          </a>
          <img src="19.svg" className="h-8 xl:text-2xl 2xl:h-85   md:mx-2 mb-2 " alt="" />
          <img src="FlagIndia.svg" className="h-5  md:mx-2  mb-2" alt="" />{" "}
          <a
            href="tel:5541251234"
            className="xl:text-lg 2xl:text-2xl text-xl mb-2 md:text-xl sm:text-sm  md:mx-2  text-gray-200 dark:text-white hover:underline"
          >
            {" "}
            +91 88820076755
          </a>
          <h1 className="xl:text-lg 2xl:text-2xl xl:top-2 2xl:mt-0 text-white md:text-xl  md:mx-2  sm:mt-4 sm:px-2 sm:text-sm h-4 mb-8">|</h1>
          <img src="logo.svg" className="h-7  md:mx-2 mb-2" alt="Whatsapp" />
          <img src="Flag.svg" className="h-5  md:mx-2 mb-2" alt="" />
          <a
            href="tel:5541251234"
            className="xl:text-lg 2xl:text-2xl text-xl mb-2 md:text-xl  md:mx-2 sm:text-sm text-gray-200 dark:text-white hover:underline"
          >
            +971-50-694-3266
          </a>
        </div>
      </div>
    </nav>
  );
};

export default bar;
