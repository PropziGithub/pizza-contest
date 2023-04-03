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
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option>Regular Curst</option>
          <option>Thin Curst</option>
          <option>Ultra-thin Curst</option>
          <option>Thick Curst</option>
          <option>Whole Wheat Curst</option>
          <option>Cauliflower Curst</option>
        </SelectField>
        <SelectField label="BASE SAUCE" required>
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option>Topper's Tomato Sauce</option>
          <option>Garlic Butter Base</option>
          <option>House Dip</option>
          <option>House Dip + Tomato, mixed</option>
          <option>Medium Buffalo Sauce Base</option>
          <option>Hot Buffalo Sauce Base</option>
          <option>Bold BBQ Sauce Base</option>
          <option>Sweet &amp; Spicy Thai Sauce</option>
        </SelectField>
        <SelectField label="CHEESE TOPPINGS" required>
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option>No Cheese</option>
          <option>Mozzarella Cheese</option>
          <option>Blend of Mozzarella and Cheddar Cheese</option>
          <option>Feta Cheese</option>
          <option>Asiago Cheese</option>
          <option>Parmesan Cheese</option>
          <option>Lactose Free Mozzarella</option>
          <option>Dairy Free Vegan Cheese</option>
          <option>Extra Cheese</option>
        </SelectField>
        <SelectField label="MEAT TOPPINGS" required>
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option>Pepperoni</option>
          <option>Turkey Pepperoni</option>
          <option>Roni Cups</option>
          <option>Bacon</option>
          <option>Ham</option>
          <option>Chicken Strips</option>
          <option>Shaved Beef Steak</option>
          <option>Boneless (Breaded) Chicken</option>
          <option>Italian Sausage</option>
          <option>Ground Beef</option>
        </SelectField>
        <SelectField label="VEGGIE TOPPINGS" required>
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option>Fresh Mushrooms</option>
          <option>Green Peppers</option>
          <option>Green Olives</option>
          <option>Kalamata Olives</option>
          <option>Spanish White Onions</option>
          <option>Sweet Red Onions</option>
          <option>Diced Tomatoes</option>
          <option>Roasted Red Peppers</option>
          <option>Pineapple</option>
          <option>Hot Peppers</option>
          <option>Jalapeño Peppers</option>
          <option>Basil</option>
          <option>Diced Pickles</option>
        </SelectField>
        <SelectField label="SEASONING" required>
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option>Montreal Steak Spice</option>
          <option>Garlic + Herb Seasoning</option>
          <option>Italian Herbs</option>
          <option>Chili Peppers</option>
          <option>Parmesan Cheese</option>
        </SelectField>
        <SelectField label="FLAVOUR SWIRLS" required>
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option>Ranch Swirl</option>
          <option>Medium Buffalo Sauce Swirl</option>
          <option>Hot Buffalo Sauce Swirl</option>
          <option>Bold BBQ Sauce Swirl</option>
          <option>Sweet &amp; Spicy Thai Swirl</option>
        </SelectField>
        <SelectField label="CHOOSE YOUR DIP" required>
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option>Topper’s Famous House Dip</option>
          <option>Ranch</option>
          <option>Caesar</option>
          <option>Tomato</option>
          <option>Sweet &amp; Spicy Thai</option>
          <option>Bold BBQ</option>
          <option>Cheddar Chipotle</option>
          <option>Medium Hot Sauce</option>
          <option>Hot Sauce</option>
          <option>Honey Garlic</option>
        </SelectField>
        <SelectField label="SPECIAL INSTRUCTIONS" required>
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option>Light Sauce</option>
          <option>Extra Sauce</option>
          <option>Lightly Baked</option>
          <option>Well Done</option>
          <option>Brush the pizza crust with Garlic Butter</option>
          <option>Brush the pizza crust with Olive Oil</option>
        </SelectField>
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
