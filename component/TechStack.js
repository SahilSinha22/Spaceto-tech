import React from "react";

const TechStack = () => {
  return (
    <div
      className="  items-center py-0 h-75"
      style={{
        backgroundImage: `url("tech.svg")`,

        
      }}
    >
      
      <div className=" relative xl:text-4xl 2xl:text-4xl text-2xl text-start ml-5  pt-5 text-white   ">
        
        <h1 className="font-bold   ml-10 text-4xl   ">TECHNOLOGY STACK</h1>
      </div>
      <div className="  xl: xl:justify-around xl:w-auto  2xl:justify-between flex md:justify-start lg:flex-row flex-row   sm:flex-col justify-between   my-65">
        <div className=" ml-0 xl:w-auto  mx-10 py-10 pl-10 font-poppins ">
          <div className=" xl:w-auto    xl:text-xl  xl:my-2 2xl:w-100  my-2 sm:w-96  hover:text-white ">
            <a
              href="#"
              className=" flex md:justify-start flex-row  items-center  bg-blue-800  shadow md:flex-row md:max-w-xl hover:bg-gray-400 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className=" mx-5 md: object-cover rounded-t-lg md:w-auto "
                src="15.svg"
                alt=""
              />
              <div className=" justify-between md:w-auto py-2 leading-normal">
                <h4 className="xl:text-xl 2xl:text-4xl  hover:text-white  md:w-auto mx-4  mb-2 text-3xl font-bold tracking-tight text-white  dark:text-white">
                  Mobile App <br /> Development
                </h4>
              </div>
            </a>
          </div>
          <div className=" mt-10 sm:w-96 hover:text-white ">
            <a
              href="#"
              className="flex  flex-row items-center  bg-blue-800  shadow md:flex-row md:max-w-xl hover:bg-gray-400 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className=" mx-5 object-cover py-2 rounded-t-lg "
                src="16.svg"
                alt=""
              />
              <div className=" justify-between py-2 leading-normal">
                <h4 className="xl:text-xl 2xl:text-2xl hover:text-white mx-4 px-4 mb-2 text-3xl font-bold tracking-tight text-white  dark:text-white">
                  Web <br /> Development
                </h4>
              </div>
            </a>
          </div>
          <div className=" mt-10 w-96 sm:w-96 xl:text-xl 2xl:w-100 hover:text-white ">
            <a
              href="#"
              className="flex  flex-row items-between py-2  h-85 bg-blue-800  shadow md:flex-row md:max-w-xl hover:bg-gray-400 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className=" mx-2 object-cover py-2 rounded-t-lg "
                src="17.svg"
                alt=""
              />
              <div className=" text-end py-2 leading-normal">
                <h4 className="xl:text-xl 2xl:text-2xl hover:text-white mx-4 px-4 mb-2 text-3xl font-bold tracking-tight text-white  dark:text-white">
                  UI/UX DESIGN
                </h4>
              </div>
            </a>
          </div>
        </div>

        <div className="  xl:w-auto sm:w-auto xl:mr-4 2xl:w-auto 2xl:mr-0  py-2 my-12 rounded-xl  items-start bg-blue-800 sm:ml-2 sm:mr-2 w-full mx-10 h-55  text-start  text-white ">
          
          <div className=" mx-4  my-9">

            <p className=" xl:text-lg 2xl:text-2xl my-10 text-xl px-4 mx-4 sm:mx-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sunt <br /> ipsum iure assumenda rem modi maxime
              aperiam minus quaerat. Laborum <br />
              fugit error qui tenetur repudiandae nemo quibusdam soluta sit
              quam!{" "}
            </p>
            <div className="flex xl:text-2xl 2xl:text-4xl flex-row justify-start   items-center">
              <div className="applelogo h-34  px-2 py-4 mx-4">
                <img className="  " src="apple.svg" alt="" />
                <span className="ml-4">iOS</span>
              </div>
              <div className="android px-4 py-4 mx-4">
                <img src="Android.svg" alt="" />
                <span>Android</span>
              </div>
              <div className="flutter px-4 py-4 mx-4">
                <img src="Flutter.svg" alt="" />
                <span>Flutter</span>
              </div>
              <div className="reactNaive px-4 py-4 mx-4">
                <img src="React.svg" alt="" />
                <span>React Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
