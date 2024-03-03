import React from "react";
import Image from "next/image";
// import about from "../../../public/about.jpg";
import Logo from "../../../public/Logo.jpg";
import Link from "next/link";
import Btn from "../Btn";
import about from "../../../public/about.png";
const About = () => {
  return (
    <div className=" bg-[00eff3f8] mt-0" id="about">
      <div className="flex items-center w-full justify-center md:my-0 sm:my-10 max-[717px]:my-10 lg:gap-x-60 md:gap-x-10 flex-row md:px-20 max-[717px]:gap-x-5 max-[717px]:flex-col">
        <div className="relative mt-[20px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] max-[717px]:w-[300px] max-[717px]:h-[300px]">
          {/* <Image src={about} alt="Header Image" height="800" width="500" /> */}
          <Image src={about} alt="about us" height="800" width="500" />
        </div>
        <div className="my-10 lg:w-[500px] md:w-[300px] sm:w-[400px] max-[717px]:w-[400px] max-[717px]:my-5 max-[717px]:flex max-[717px]:flex-col max-[717px]:items-center">
          <h1 className="font-bold lg:text-2xl md:text-xl max-[717px]:text-[25px] max-[717px]:tracking-widest max-[717px]:text-center ">
            About Us
          </h1>
          <p className="lg:text-base md:text-sm sm:text-[15px] max-[717px]:text-center my-10">
            Our company is led by a team of Certified Public Accountants with
            nearly three decades of experience in key areas such as Accounting,
            Audit, Tax, and Management Consultancy. Learn more about our
            professional partnership and how it can benefit your business.
          </p>
          <div className="my-10">
            <Link href="/guide">
              <Btn text={"Go To Guide"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
