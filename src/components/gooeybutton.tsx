const GooeyButton = (props:any) => (
  <>

    <button className=" w-75 relative inline-block p-4 px-6 mt-10 border-2 border-blue-300 rounded-lg overflow-hidden z-10 bg-gradient-to-br from-white via-blue-400 to-cyan-500 font-bold text-white hover:text-black hover:bg-transparent" >
    {props.text ? props.text : " Get Consultation "}

 
    
          
           
        
        </button>


  </>
)
export default GooeyButton;