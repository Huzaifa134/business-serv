'use client'
import React from "react";
import Image from "next/image";
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
  } from 'next-share'; 

const Footer= () => {
    return(
       
        <section className="relative bg-blueGray-200 pt-8 pb-6 bg-[#22D6FD]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
            <Image src="/Logo.png" alt="Logo" width={180} height={170} />
              {/* <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4> */}
              {/* <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
               Pacific Financial Hub  */}
              {/* </h5> */}
              <div className="mt-6 lg:mb-0 mb-6 mx-6 flex flex-row space-x-4">
            
                <FacebookShareButton  url={'http://localhost:3000'} > 
                 <FacebookIcon size={40} round /> </FacebookShareButton>
                 
                 <LinkedinShareButton   url={'http://localhost:3000'} > 
                     <LinkedinIcon size={40} round /> 
                 </LinkedinShareButton> 
                 <WhatsappShareButton 
       
        url={'http://localhost:3000'} > 
        <WhatsappIcon size={40} round /> 
      </WhatsappShareButton> 
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="my-6 border-blueGray-300"> */}
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
            
              </div>
            </div>
          </div>
        </div>
      </section>
    
    )
}
export default Footer;