import React from "react";

function Quote(props) {
  return (
    <div className="relative h-80 w-128 bg-yellow-200  border border-solid border-2 border-black rounded-2xl flex flex-col items-center">
      <div className="absolute pt-10 px-4">
        <p className="font-tangerine font-semibold text-3xl ">
         " {props.quote} "
        </p>
      </div>
      <div className="absolute bottom-20">
      <span className="font-quicksand text-lg ">{props.author}</span>
      </div>

      <div className="absolute bottom-2">
        <button className="border border-solid border-2 border-black rounded-lg h-12 w-36 font-semibold font-quicksand text-black text-lg hover:bg-black hover:text-yellow-200"
         onClick={props.onAdd}   
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
