import React from "react";

function Quote() {
  return (
    <div className="h-72 w-128 bg-yellow-200  border border-solid border-2 border-black rounded-2xl">
      <div className="py-16 px-20">
        <p className="font-tangerine font-semibold text-3xl ">
          Hello my name is Edwin Ochieng I go to JKUAT
        </p>
      </div>

      <div className="pt-8 px-60">
        <button className="border border-solid border-2 border-black rounded-lg h-12 w-36 font-semibold font-quicksand text-black text-lg hover:bg-black hover:text-yellow-200">
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
