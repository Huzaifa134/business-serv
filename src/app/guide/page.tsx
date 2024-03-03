"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
async function getData() {
  const fetchData = await client.fetch(`*[_type=='aboutus']`);

  return fetchData;
}

export default async function getStaticProps() {
  const data = await getData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const result = await client.fetch(`*[_type=='aboutus']`);
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="flex flex-col mx-20 px-5">
      {data?.map((data: any, i: number) => (
        <article key={i} className=" items-center pb-14">
          {/* <ul>
          <li className="mx-20 "> */}

          <div className="font-bold text-center md:text-xl max-[900px]:text-[20px] max-[700px] my-18 p-10">
            {" "}
            {data?.title}{" "}
          </div>
          <div>
            <PortableText value={data?.content} />
            {/* <p> {data?.content}</p> */}
          </div>
        </article>
      ))}
    </div>
  );
}
