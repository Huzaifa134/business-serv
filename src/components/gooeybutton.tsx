const GooeyButton = () => {
    return (
      <>
       
    <button className="relative inline-block p-4 border-2 border-gray-300 rounded-lg overflow-hidden z-10 bg-white font-bold text-blue-500 transition-all duration-1200 ease-linear cursor-pointer hover:text-white hover:bg-blue-500 hover:border-blue-500">
      <span className="button-content">Click me</span>
      <div className="absolute after-gradient-spin right-[-112px] bottom-[-38px] w-24 h-24 animate-spin duration-1800"></div>
    </button>
  );

</>
    )
       }
export default GooeyButton;