import React from "react";

const Btn = (props: any) => {
  return (
    <button className="bg-sky-500 hover:bg-sky-700 py-3 px-5 rounded-xl  text-[#feffff] ">
      {props.text ? props.text : "Learn More"}
    </button>
  );
};

export default Btn;
