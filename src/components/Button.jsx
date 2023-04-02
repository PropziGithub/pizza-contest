import React  from "react";

const Button = ({children}) => {
  return (
    <button
      type="submit"
      className="bg-button-light hover:bg-[#245815] duration-500 ease-in-out text-[#FFFFFF] inline-flex justify-center rounded-[3px] md:px-10 px-4 font-bold md:text-[18px] text-[11px]  leading-[27.57px] font-Montserrat outline-2 outline-offset-2 w-full  py-3"
    >
      {children}
    </button>
  );
};

export default Button;