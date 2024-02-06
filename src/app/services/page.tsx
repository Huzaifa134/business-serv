import Image from "next/image";
import { posts } from "./list";
import Btn from "../Btn";
import imageLoader from "@/loader";
import Link from "next/link";
import { client } from "@/lib/SanityClient";
// import { useEffect } from "react";
// *[_type=='email_enter']
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

async function getData() {
  const fetchData = await client.fetch(`*[_type=='service']`);

  return fetchData;
}

export default async function Example() {
  const data = await getData();
  const builder = imageUrlBuilder(client);
  console.log(builder.image(data[0].icon).url());
  // data.map((data: any, i: number) => console.log(data[i].title));
  // const data =  [data1];

  console.log("data from services page", data);
  // console.log(data[0].description);

  return (
    <div className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl  font-bold  text-center">Our Services</h1>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data?.map((data: any, i: number) => (
            // console.log("console ", data[i].title);

            <article
              key={i}
              className="flex max-w-xl flex-col items-start border-2 rounded-md bg-white px-5"
            >
              <div className="w-full flex flex-row justify-center items-center mt-4 ">
                <div className="relative h-150 w-150 rounded-full bg-slate-100 p-8 flex border-2 items-center outline-offset-2 shadow-xl gap-x-4 justify-center hover:border-double hover:border-cyan-300 hover:shadow-inner ">
                  <Image
                    // loader={imageLoader}
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
                    {data?.title}
                  </a>
                </h3>
                <div className="mt-5  text-sm leading-6 text-gray-600 mb-5">
                  <PortableText value={data?.description} />
                </div>
              </div>
              <div className="mb-10">
                {/* <Link href="/buynow"> */}
                <Btn text={"Learn More"} />
                {/* </Link> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
