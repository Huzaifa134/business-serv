import React from "react";

const Btn = (props: any) => {
  return (
    
<button className="button-33 bg-[#22D6FD] rounded-full shadow-md transform transition-transform duration-250 hover:shadow-lg hover:scale-105 hover:rotate-1 text-[15px] py-2 px-3" role="button">
{props.text ? props.text : "Learn More"}

</button>
  
  );
};

export default Btn;


/* CSS */
