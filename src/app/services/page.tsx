"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Btn from "../Btn";
import { client } from "@/lib/SanityClient";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

export default function Example() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(`*[_type=='service']`);
        setServices(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const builder = imageUrlBuilder(client);

  return (
    <div className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl  font-bold  text-center">Our Services</h1>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((data: any, i: number) => (
            <article
              key={i}
              className="flex max-w-xl flex-col items-start border-2 rounded-md bg-white px-5"
            >
              <div className="w-full flex flex-row justify-center items-center mt-4 ">
                <div className="relative h-150 w-150 rounded-full bg-slate-100 p-8 flex border-2 items-center outline-offset-2 shadow-xl gap-x-4 justify-center hover:border-double hover:border-cyan-300 hover:shadow-inner ">
                  <Image
                    src={builder.image(data.icon).url()}
                    alt="image"
                    style={{ color: "blueviolet" }}
                    className="bg-slate-100"
                    height={100}
                    width={90}
                  />
                </div>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-center leading-6 text-gray-900 group-hover:text-[#27978c]">
                  <a>
                    <span className="absolute inset-0" />
                    {data.title}
                  </a>
                </h3>
                <div className="mt-5  text-sm leading-6 text-gray-600 mb-5">
                  <PortableText value={data.description} />
                </div>
              </div>
              <div className="mb-10">
                <Btn text={"Learn More"} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
