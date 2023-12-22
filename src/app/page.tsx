import Image from "next/image";
import Navbar from "../app/Navbar";
import HomePage from "../app/home/Home";

export default function Home() {
  return (
    <>
      {/* <h1>Business Website</h1> */}
      <Navbar />
      <HomePage />
    </>
  );
}
