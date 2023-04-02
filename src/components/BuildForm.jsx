import React from "react";
import Button from "@/components/Button";
import two from "@/assets/two.gif";
import { SelectField } from "./Fields";

const BuildForm = () => {
  return (
    <div className="mt-20 w-[486px] bg-primary-medium rounded-[20px] border border-1 border-grey-light">
      <div className="text-center bg-primary-dark rounded-t-[20px] py-4">
        <div className="flex justify-around items-center">
          <div className="md:hidden flex justify-center items-center h-[47px] w-[47px] bg-primary-medium rounded-full flex-none ">
            <img src={two} alt="first step" className="h-[30px]  mx-auto" />
          </div>
          <span className="text-[#FFFFFF] md:text-[30px] text-[18px] font-bold">
            Build Your Signature Pizza!
          </span>
        </div>
      </div>
      <form action="#" className="grid grid-cols-1  gap-y-4 py-4 px-10 ">
        <SelectField label="CRUST" required>
          <option value="" hidden>
            -- select one --
          </option>
          <option>option 1</option>
          <option>option 2</option>
        </SelectField>
        <SelectField label="BASE SAUCE" required>
          <option value="" hidden>
            -- select one --
          </option>
          <option>option 1</option>
          <option>option 2</option>
        </SelectField>
        <SelectField label="CHEESE TOPPINGS" required>
          <option value="" hidden>
            -- select one --
          </option>
          <option>option 1</option>
          <option>option 2</option>
        </SelectField>
        <SelectField label="MEAT TOPPINGS" required>
          <option value="" hidden>
            -- select one --
          </option>
          <option>option 1</option>
          <option>option 2</option>
        </SelectField>
        <SelectField label="MEAT TOPPINGS" required>
          <option value="" hidden>
            -- select one --
          </option>
          <option>option 1</option>
          <option>option 2</option>
        </SelectField>
        <SelectField label="SEASONING" required>
          <option value="" hidden>
            -- select one --
          </option>
          <option>option 1</option>
          <option>option 2</option>
        </SelectField>
        <SelectField label="FLAVOUR SWIRLS" required>
          <option value="" hidden>
            -- select one --
          </option>
          <option>option 1</option>
          <option>option 2</option>
        </SelectField>
        <span className="block text-sm font-semibold text-[#FFFFFF]">
          SPECIAL INSTRUCTIONS
        </span>
        <textarea
          className="resize-none appearance-none rounded-[3px] border border-grey-light bg-[#FFFFFF] placeholder:text-[#000000] py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-main_primary focus:outline-none focus:ring-main_primary sm:text-sm"
          id=""
          cols="20"
          rows="5"
        ></textarea>
        <span className="text-center text-[#FFFFFF] md:text-[12.4px] text-[11px]">
          *We recommend a maximum of 10 toppings total*
        </span>
        <div>
          <Button type="submit" variant="solid" className="w-full">
            <span>Enter the Contest</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BuildForm;
