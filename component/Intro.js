"use client";
import React from "react";

const intro = () => {
  return (
    <div className=""
    style={{
      backgroundImage: `url("image.svg")`,
    }}>
    <div
      className="flex sm:pr-4 xl:pr-20 bg-gradient-to-l  from-blue-600  flex-col  xl:h-auto xl:h-45 sm:flex-col  lg:flex-row justify-around item-center w-full  "
    
    >
      
      <div className="   my-auto xl:my-auto sm:my-auto xl:mx-4 space-y-5 mx-19 text-center items-center  ">
        <div className="xl:text-3xl md:text-3xl  2xl:text-5xl sm:m-0  font-extrabold  text-xl text-center items-center mx-5">
          <p className="  sm:m-0 mx-2 my-2  text-white  dark:text-gray-400 px-5 py-2 max-w-150 max-h-11 font-poppins  text-center  ">
            Unlock your Business
          </p>
          <p className="sm:m-0 mx-2 my-2 text-white space-y-2 dark:text-gray-400 px-5 py-4 max-w-150 max-h-11 font-poppins text-center  ">
            Potential to the Fullest{" "}
          </p>
          <p className="sm:m-0 mx-2 my-2 mb-4 text-white space-y-2 dark:text-gray-400 px-5 py-5 max-w-150 max-h-11 font-poppins text-center  ">
            {" "}
            with Spacetotech
          </p>
        </div>
        <div className=" md:text-3xl my-5 text-sm ml-1  text-white dark:text-gray-400 px-2  font-poppins  text-center">
          <p className="text-sm md:text-2xl mt-2 text-white dark:text-gray-400 px-2   font-poppins  text-center">
            Spacetotech is turning ideas into reality for a decade now.Partner
            with us{" "}
          </p>
          <p className="text-sm md:text-2xl  text-white dark:text-gray-400 px-2  font-poppins  text-center">
            {" "}
            drive digitization to your businesswith innovation and technology
          </p>
        </div>
      </div>

      <div className=" ml-2 xl:h-auto sm:ml-2  lg:mx-7  2xl:mr-4 xl:mr-4 xl:pr-4  sm:mr-2 md:mr-4 w-auto h-auto md:ml-4 sm:w-auto  mx-auto text-center items-center  mr-10 md:h-[751px] flex md:w-[652px] flex-col border gap-4 space-y-4 rounded-lg px-4 py-4 bg-white  my-8 ">
        <h1 className=" mt-4 md:text-4xl text-2xl xl:text-4xl drop-shadow-xl  font-semibold font-poppins text-blue-700 text-center">
          Let's Get to Know you
        </h1>

        <form action="get">
          <div className="space-y-3 px-4 py-2 mx-4 my-2 underline underline-offset-4  ">
            <div className="   ">
              <input
                type="Name"
                className="peer h-full w-full md:text-xl text-sm border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500 "
                placeholder="Name"
              />
            </div>

            <div className="relative mt-3">
              <input
                type="email"
                className=" mt-3 peer h-full md:text-xl w-full text-sm border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500  "
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className=" mt-2 flex flex-row peer py-3 pe-0 ps-8  w-full bg-transparent border-t-transparent border-x-transparent">
            <select
              id="question"
              className=" peer h-full  text-sm md:text-xl border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
            >
              <option
                className="peer  text-sm md:text-xl border-gray-500 bg-transparent pt-4 pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
                selected
              >
                +91
              </option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
              <option value="option4">option4</option>
              <option value="option5">option5</option>
            </select>
            <input
              type="text"
              id="phone-input"
              className="peer  mt-0 h-full md:text-xl px-4 mx-5 w-full my-3 text-sm border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Contact"
              required
            />
          </div>
          <select
            id="question"
            className="peer  my-3 mx-2 w-full md:text-xl  text-sm border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-poppins font-normal text-gray-500 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
          >
            <option className="mt-3 peer h-full md:text-xl w-full text-sm border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-poppins font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500" selected>When do you want to launch a solution?</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
            <option value="option5">option5</option>
          </select>
          <input
            type="About"
            id="About"
            name="About"
            placeholder="About Project"
            className=" peer my-3 mx-5 md:text-xl w-full text-sm border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-poppins font-normal text-gray-500 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
          />

          <div className="flex justify-start px-6  ">
            <button
              type="submit"
              className=" text-sm md:text-xl w-auto h-auto rounded-lg md:w-[200px] md:h-[61.83px] mt-3 bg-blue-600 text-white py-3 px-6
                    -md cursor-pointer transition-colors text-center 
                    duration-300 hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
   
  );
};

export default intro;
