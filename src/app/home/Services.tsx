import Image from "next/image";
import tax from "../../../public/tax.svg";
import account from "../../../public/account.svg";
import graph from "../../../public/graph.svg";
const posts = [
  {
    id: 1,
    title: "ACCOUNTIN",
    href: "/services",
    description:
      "Review accountant/s/bookeeper/s entries to ensure accuracy of the General Ledger Perform review of account on computer spreadsheets and/or database Manage accounting operations, reporting and reconciliations.",
    author: {
      imageUrl: account,
    },
  },
  {
    id: 2,
    title: "TAX AND AUDIT",
    href: "/services",
    description:
      "Complete/process monthly, quarterly and annual bank reconciliation and financial reports to verify practice of due diligence Perform field audit on wide variety of clientele Complete regulatory, pre-implementation and risk-based audits to achieve business objective.",
    author: {
      imageUrl: tax,
    },
  },
  {
    id: 3,
    title: "/services",
    href: "#",
    description:
      "Thorough review of financial statements and tax audits Prepare monthly and annual expense forecasts, including any unecessary recommended action required to manage costs to achieve budget Reduce time and costs and increased efficiency by introducing new accounting procedures as required",
    category: { title: "Marketing", href: "#" },
    author: {
      imageUrl: graph,
    },
  },
  // More posts...
];

export default function Example() {
  return (
    <div className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-5xl  font-bold text-center">
          Our Services
        </h1>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
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
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 mb-5">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
