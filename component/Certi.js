import React from "react";

const Certi = () => {
  return (
    <div className=" flex flex-col  px-5 py-5  items-center">
      <div className=" font-poppins text-center  ">
        <h1 className="text-blue-500 xl:text-5xl  mt-10 capitalize font-bold font-poppins text-6xl text-center dark:text-white">Certifications</h1>
        <p className="xl:text-2xl 2xl:text-4xl text-black text-2xl text-center justify-center px-5 py-5">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt
          non! Veritatis, consectetur magni accusamus iure, <br /> reiciendis ad
          quidem minima nesciunt amet modi alias cum autem culpa molestias
          dolores sed.
        </p>
      </div>
    
        <div className="flex w-auto flex-row xl:justify-between  2xl:justify-between space-x-5 items-center justify-center px-5 py-5">
          <div className="mx-5 px-5">
            <img src="20.svg" alt="" />
          
          </div>
          <div className="mx-5 px-5">
            <img src="freelencer.svg" alt="" />
           
          </div>
          <div className="mx-5 px-5">
            <img src="App future.svg" alt="" />
            
          </div>
          <div className="mx-5">
            <img src="Good Films.svg" alt="" />
            
          </div>
          <div className="mx-5 px-5">
            <img src="clutech.svg" alt="" />
            
          </div>
        </div>
      </div>
 
  );
};

export default Certi;
