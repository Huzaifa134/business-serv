import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
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
            <li>
              <Link href={"/"}> Home </Link>
            </li>
            <li>
              <Link href={"/services"}> Services </Link>
            </li>
            <li>
              <Link href={"/Form"}> Contact Us </Link>
            </li>
            <li>
              <Link href={"/"}> Buy Now  </Link>
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
                    <li className="py-3">
                      <Link href={"/"}>Home </Link>
                    </li>
                    <li className="py-3">
                      <Link href={"/"}>Services</Link>
                    </li>
                    <li className="py-3">
                      <Link href={"/"}>Contact</Link>
                    </li>
                    <li className="py-3">
                      <Link href={"/"}>Buy Now</Link>
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
