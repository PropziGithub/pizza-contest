import React from "react";
import filter from "@/assets/filters.png";
import three from "@/assets/three.gif";

const InstagramFilters = () => {
  return (
    <div className="mt-20 w-[486px] bg-primary-medium rounded-[20px] border border-1 border-grey-light py-4 md:px-10">
      <div className="flex  justify-around items-center px-4 md:px-0">
        <div className="md:hidden flex justify-center items-center h-[47px] w-[47px] bg-primary-medium rounded-full flex-none ">
          <img src={three} alt="first step" className="h-[30px]   mx-auto" />
        </div>
        <div className="">
          <img src={filter} alt="instagram filters"/>
        </div>
      </div>
      <div className="text-[#FFFFFF] text-sm px-10 md:px-0">
        Use our Topper's Pizza Builder Instagram Filter to make your dream pizza
        and share it with your friends. You will get a chance to be featured in
        our page highlights for customers to view, like, and comment on your
        special recipe.
      </div>
    </div>
  );
};

export default InstagramFilters;
