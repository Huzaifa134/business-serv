"use client";
import React from "react";
import Image from "next/image";
import header from "../../../public/header.jpg";
import Background from "../../../Background.png";
import About from "../about/About";
import Services from "./Services";
import Btn from "../Btn";
import GooeyButton from "@/components/gooeybutton";
import Typewriter from "typewriter-effect";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
     
 <div>
    <div className="bg-scroll flex justify-center items-center h-screen mb-0 "
    style={
      {
        backgroundImage:`url('/hero.jpg')`,
        height:"800px",
        backgroundPosition:"center",
        backgroundSize:"cover",

      }
    }> 
     {/* <h1>Home component</h1> */}
      <div className="flex items-center mt-45 w-full justify-center lg:gap-x-60  pt-100 md:gap-x-10 flex-row md:px-20 max-[717px]:gap-x-5 max-[717px]:flex-col ">
        <div className="mt-45 max-[717px]:my-5 max-[717px]:flex max-[717px]:flex-col max-[717px]:justify-center mx-11"> 
          <div className=" flex flex-col items-center  ">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Welcome to Pacific Financial Hub ",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "We are Business Management and Accounting Consultants",
                1000,
                "We can help your business grow ",
                1000,
                "Our Services includes Bookkeeping Cleanup",
                1000,
                "Our Services includes Cash Flow Optimisation",
                1000,
                "Our Services includes Efficiency Enhancement",
                1000,
                "Our Services includes Review and Management",
                1000,
                "We also help with your Business to take to banks",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2.5rem",
                display: "inline-block",
                color: "white",
                fontFamily: "monospace",
                fontStyle: "normal",
              }}
              repeat={Infinity}
            />

            
              <GooeyButton />
            
            </div>
            
          </div>
        </div>
        </div>
        <About />
        <div>
          <Services />
        </div>
      </div>
     
    
  )
            }
            
        {/* <div
          className="bg-cover bg-center w-[500px] h-[500px]"
          style={{ backgroundImage: `url(${header})` }}
        ></div> */}
    
  
    
  



export default Home
