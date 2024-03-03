"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";
import Link from "next/link";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

const Footer = () => {
  return (
    <section className="relative bg-blueGray-200 pt-8 pb-6 bg-[#22D6FD]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <Image src={Logo} alt="Logo" width={180} height={170} />
            {/* <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4> */}
            {/* <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
               Pacific Financial Hub  */}
            {/* </h5> */}
            <div className="mt-6 lg:mb-0 mb-6 mx-1 flex flex-row space-x-4">
              <div className="flex flex-wrap gap-4 mb-6 sm:mx">
                <div className=" h-14 w-14 py-3 px-3  rounded-full hover:bg-white">
                  <GrTwitter size={26} />
                </div>
                <div className=" h-14 w-14 py-3 px-3  rounded-full hover:bg-white">
                  <GrFacebookOption size={26} />
                </div>
                <div className="h-14 w-14 py-3 px-3  rounded-full hover:bg-white">
                  <GrLinkedinOption size={26} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/guide"
                    >
                      Guide
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/privacypolicy"
                    >
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/termsandcond"
                    >
                      Terms & Condition
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    ></a>
                  </li> */}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  <strong>Contact Us</strong>
                </span>
                <ul className="list-unstyled">
                  <li>toll free 1-866-218-5377</li>
                  <li>(281) 607-2030</li>
                  <li>
                    <span className="text-bold">
                      <strong>Address:</strong>
                    </span>{" "}
                    <br />
                    Pacific financial Hub Houston Texas
                  </li>
                  <li>
                    {" "}
                    <span>
                      <strong> Rep one phone:</strong>
                    </span>{" "}
                    <br /> 832-263-7572
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-blueGray-300"> */}
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
