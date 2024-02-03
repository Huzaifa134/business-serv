"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { checkout } from "../config/checkout";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navLink = [
    {
      name: "Home",
      link: "/",
      id: 0,
    },
    {
      name: "Services",
      link: "/services",
      id: 1,
    },
    {
      name: "Contact Us",
      link: "/Form",
      id: 2,
    },
    {
      name: "About Us",
      link: "/aboutus",
      id: 3,
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="flex justify-between px-32 pt-4 bg- items-center bg-[#22D6FD] lg:h-30">
        {/* Left Side */}
        <div>
          <Image src="/HeroAnime.gif" alt="Logo" width={200} height={100} />
          {/* <h1 className="text-3xl font-bold text-gray-600">Business</h1> */}
        </div>

        {/* Right Side */}
        <nav>
          <ul className="text-lg font-medium hidden md:flex gap-x-4 text-gray-600">
            {navLink.map((name) => (
              <li className="" key={name.id}>
                <Link
                  key={name.id}
                  href={name.link}
                  className={` ${
                    pathname === name.link
                      ? "underline text-teal-50"
                      : "bg-orange "
                  }`}
                >
                  {" "}
                  {name.name}{" "}
                </Link>
              </li>
            ))}
            {/* <li className="">
              <Link href={"/services"}> Services </Link>
            </li>
            <li>
              <Link href={"/Form"}> Contact Us </Link>
            </li> */}
            <li>
              <Link href={"/"}>
                <button
                  onClick={() => {
                    checkout({
                      lineItems: [
                        {
                          price: "price_1OYuklIuBZT1f6AcnxeEHZP8",
                          quantity: 1,
                        },
                      ],
                    });
                  }}
                >
                  Buy Now
                </button>
              </Link>
            </li>
          </ul>
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <ul className="text-lg font-medium gap-x-4 text-gray-600">
                    {navLink.map(({ link, name, id }) => (
                      <li className="py-2" key={id}>
                        <Link
                          key={name}
                          href={link}
                          className={` ${
                            pathname === link
                              ? "underline text-black  active:bg-cyan-100"
                              : "bg-orange "
                          } hover:bg-slate-600`}
                        >
                          {" "}
                          {name}{" "}
                        </Link>
                      </li>
                    ))}
                    {/* <li className="py-3 ">
                      <Link href={"/"}>Home </Link>
                    </li>
                    <li className="py-3">
                      <Link href={"/services"}>Services</Link>
                    </li>
                    <li className="py-3">
                      <Link href={"/Form"}>Contact</Link>
                    </li> */}
                    <li className="py-3">
                      <Link href={"/"}>
                        <button
                          onClick={() => {
                            checkout({
                              lineItems: [
                                {
                                  price: "price_1OYuklIuBZT1f6AcnxeEHZP8",
                                  quantity: 1,
                                },
                              ],
                            });
                          }}
                        >
                          Buy Now
                        </button>
                      </Link>
                    </li>
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
