"use client";
import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";

// async function getData() {
//   const fetchData = await client.fetch(`*[_type=='term']`);

//   return fetchData;
// }

const TermsandCond = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(`*[_type=='term']`);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  // const data = await getData();
  return (
    <div className="flex flex-col mx-20 px-5">
      {data?.map((data: any, i: number) => (
        <article key={i} className=" items-center ">
          {/* <ul>
          <li className="mx-20 "> */}

          <div className="font-bold text-center md:text-xl max-[900px]:text-[20px] max-[700px] my-18">
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
};

export default TermsandCond;
