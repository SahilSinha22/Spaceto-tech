import React from "react";

const Indus = () => {
  return (
    <div className="border border-box  flex flex-col gap-20 px-5 py-5">
      <div className=" font-poppins text-center">
        <h1 className="  text-blue-500 xl:text-5xl mt-10 capitalize font-bold font-poppins text-6xl text-center dark:text-white">
          Industries we serve
        </h1>
        <p className="xl:text-2xl 2xl:text-4xl text-black text-2xl text-center justify-center px-5 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt
          non! Veritatis, consectetur magni accusam <br />
          us iure, reiciendis ad quidem minima nesciunt amet modi alias cum
          autem culpa molestias dolores sed.
        </p>
      </div>
      <div className=" flex gap-2 xl:justify-around 2xl:justify-around  xl:pr-2 items-center   justify-between px-4 py-4 mx-4 my-4">
        <div className="relative  mx-4  px-4 border-blue-500">
        <div className="relative ">
          <img
            className=" h-auto w-auto rounded-t-lg  "
            src="elearning.svg"
            alt="product image"
          />
          <button className="cursor-pointer  2xl:w-10/12 xl:w-10/12 2xl:h-10/12  xl:h-20 absolute  sm:w-40 sm:h-10 -bottom-5 h-[95px] w-[340px] -right-8 text-2xl font-bold bg-blue-900  text-white">
            E-Learning
          </button>
        </div>
        </div>
        <div className="relative  mx-4  px-4 border-blue-500">
        <div className="relative ">
          <img
            className=" h-auto w-auto rounded-t-lg  "
            src="sports.svg"
            alt="product image"
          />
          <button className="cursor-pointer  2xl:w-10/12 xl:w-10/12 2xl:h-10/12  xl:h-20 absolute  sm:w-40 sm:h-10 -bottom-5 h-[95px] w-[340px] -right-8 text-2xl font-bold bg-blue-900  text-white">
            Sports Industry
          </button>
        </div>
        </div>
        <div className="relative  mx-4  px-4 border-blue-500">
        <div className="relative ">
          <img
            className=" h-auto w-auto rounded-t-lg  "
            src="food.svg"
            alt="product image"
          />
          <button className="cursor-pointer  2xl:w-10/12 xl:w-10/12 2xl:h-10/12  xl:h-20 absolute  sm:w-40 sm:h-10 -bottom-5 h-[95px] w-[340px] -right-8 text-2xl font-bold bg-blue-900  text-white">
            Food Industry
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Indus;
