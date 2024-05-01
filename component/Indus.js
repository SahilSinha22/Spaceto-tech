import React from "react";

const Indus = () => {
  return (
    <div className="border border-box  flex flex-col gap-20 px-5 py-5">
      <div className=" font-poppins text-center">
        <h1 className="  text-blue-500 md:text-6xl xl:text-5xl mt-10 capitalize font-bold font-poppins text-3xl text-center dark:text-white">
          Industries we serve
        </h1>
        <p className="xl:text-2xl 2xl:text-4xl text-black text-xl text-center justify-center px-5 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt
          non! Veritatis, consectetur magni accusam <br />
          us iure, reiciendis ad quidem minima nesciunt amet modi alias cum
          autem culpa molestias dolores sed.
        </p>
      </div>
      <div className=" flex gap-2 xl:justify-around 2xl:justify-around  xl:pr-2 items-center   justify-between px-2 py-2 mx-2 my-2">
        <div className="relative  mx-4  px-4 border-blue-500">
          <div className="relative ">
            <img
              className="  sm:h-auto w-auto rounded-t-lg  "
              src="elearning.svg"
              alt="product image"
            />
            <button className="cursor-pointer w-auto  ml-5  h-auto 2xl:w-10/12 xl:w-10/12 2xl:h-10/12  xl:h-20 absolute  sm:w-40 sm:h-10 -bottom-2 lg:-bottom-5 lg:h-[95px] lg:w-[340px] -right-8 md:text-xl text-sm font-bold bg-blue-900  text-white">
              E-Learning
            </button>
          </div>
        </div>
        <div className="relative  lg:mx-4  lg:px-4 border-blue-500">
          <div className="relative ">
            <img
              className=" sm:h-auto w-auto rounded-t-lg  "
              src="sports.svg"
              alt="product image"
            />
            <button className="cursor-pointer w-auto h-auto 2xl:w-10/12 xl:w-10/12 2xl:h-10/12  xl:h-20 absolute  sm:w-40 sm:h-10 -bottom-2 lg:-bottom-5 lg:h-[95px] lg:w-[340px] -right-8  md:text-xl text-xs sm:text-sm font-bold bg-blue-900  text-white">
              Sports Industry
            </button>
          </div>
        </div>
        <div className="relative  mx-4  px-4 border-blue-500">
          <div className="relative ">
            <img
              className=" sm:h-auto w-auto rounded-t-lg  "
              src="food.svg"
              alt="product image"
            />
            <button className="cursor-pointer ml-2 w-auto  h-auto 2xl:w-10/12 xl:w-10/12 2xl:h-10/12  xl:h-20 absolute  sm:w-40 sm:h-10 -bottom-2 lg:-bottom-5 lg:h-[95px] lg:w-[340px] -right-8  md:text-xl text-sm font-bold bg-blue-900  text-white">
              Food Industry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indus;
