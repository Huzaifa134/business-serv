import Image from "next/image";
import { posts } from "./list";
import Btn from "../Btn";
export default function Example() {
  return (
    <div className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-5xl  font-bold  text-center">
          Our Services
        </h1>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between border-[#27978c] border-2 rounded-md bg-white px-5"
            >
              <div className="relative mt-8 flex w-full items-center gap-x-4 justify-center">
                <Image
                  src={post.author.imageUrl}
                  alt="image"
                  className=" rounded-full bg-gray-50"
                  height={100}
                  width={100}
                />
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-center leading-6 text-gray-900 group-hover:text-[#27978c]">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5  text-sm leading-6 text-gray-600 mb-5">
                  {post.description}
                </p>
              </div>
              <div className="mb-10">
                <Btn text={"Buy Now"} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
