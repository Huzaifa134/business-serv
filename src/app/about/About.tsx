import React from "react";
import Image from "next/image";
import about from "../../../public/about.png";
import Btn from "../Btn";
const About = () => {
  return (
    <div className= " bg-slate-100  mt-0" >
    <div className="flex items-center w-full justify-center md:my-0 sm:my-10 max-[717px]:my-10 lg:gap-x-60 md:gap-x-10 flex-row md:px-20 max-[717px]:gap-x-5 max-[717px]:flex-col" >
      <div className="relative  lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] max-[717px]:w-[300px] max-[717px]:h-[300px]">
        <Image src={about} alt="Header Image" />
      </div>
      <div className="my-0 lg:w-[500px] md:w-[300px] sm:w-[400px] max-[717px]:w-[400px] max-[717px]:my-5 max-[717px]:flex max-[717px]:flex-col max-[717px]:items-center">
        <h1 className="font-bold lg:text-3xl md:text-3xl max-[717px]:text-[25px] max-[717px]:tracking-widest max-[717px]:text-center ">
          About Us
        </h1>
        <p className="lg:text-base md:text-sm sm:text-[15px] max-[717px]:text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ex neque
          nemo, ipsa voluptates blanditiis nam delectus, harum nobis velit optio
          aliquam, maxime autem? Vitae unde necessitatibus vero nobis minima
          officiis, iure quisquam
        </p>
        <div className="my-10">
          <Btn text={"Learn More"} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
