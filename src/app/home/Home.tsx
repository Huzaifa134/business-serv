import React from "react";
import Image from "next/image";
import header from "../../../public/header.jpg";
import Background from "../../../Background.png"
import About from "../about/About";
const Home = () => {
  
  return (
    <div>
    <div className="bg-scroll flex justify-center items-end h-screen mb-0 "
    style={
      {
        backgroundImage:`url('/Background.png')`,
        height:"700px",
      }
    }>
      {/* <h1>Home component</h1> */}
      <div className="flex items-center w-full justify-center lg:gap-x-60 mt-100 md:gap-x-10 flex-row md:px-20 max-[717px]:gap-x-5 max-[717px]:flex-col ">
        <div className="my-0 max-[717px]:my-5 max-[717px]:flex max-[717px]:flex-col max-[717px]:justify-content">
          <h1 className="font-bold lg:text-3xl md:text-3xl max-[717px]:text-[60px] max-[717px]:tracking-widest max-[717px]:text-center ">
            Business Consultant 
          </h1>
          <p className="lg:text-base md:text-sm sm:text-[15px] max-[717px]:text-center">
            Grow your business
          </p>
          <div className="  ">
            <button className="bg-sky-500 hover:bg-sky-700 py-3 px-5 rounded-xl my-10 text-[#feffff] ">
              Save changes
            </button>
          </div>
        </div>
        </div>
        {/* <div
          className="bg-cover bg-center w-[500px] h-[500px]"
          style={{ backgroundImage: `url(${header})` }}
        ></div> */}
      
      </div>
  
      <About />
    </div>
  
      
  );
};

export default Home;
