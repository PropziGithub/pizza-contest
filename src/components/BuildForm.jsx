import React, { useState } from "react";
import Button from "@/components/Button";
import two from "@/assets/two.gif";
import { SelectField } from "./Fields";

const BuildForm = () => {
  const [formData, setFormData] = useState({});
  console.log("BUILD DATA:", formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://8c40-45-215-255-48.in.ngrok.io", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.text();
      setFormData({});
    } catch (error) {
      event.target.reset();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
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
        <SelectField
          value={formData.crust || ""}
          onChange={handleChange}
          label="CRUST"
          name="crust"
          required
        >
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option value="Regular Curst">Regular Curst</option>
          <option value="Thin_Curst">Thin Curst</option>
          <option value="Ultra-thin Curst">Ultra-thin Curst</option>
          <option value="Thick Curst">Thick Curst</option>
          <option value="Whole Wheat Curst">Whole Wheat Curst</option>
          <option value="Cauliflower Curst">Cauliflower Curst</option>
        </SelectField>
        <SelectField
          value={formData.sauce || ""}
          onChange={handleChange}
          label="BASE SAUCE"
          name="sauce"
          required
        >
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option value="Toppers Tomato Sauce">Topper's Tomato Sauce</option>
          <option value="Garlic Butter Base">Garlic Butter Base</option>
          <option value="House Dip">House Dip</option>
          <option value="House Dip + Tomato mixed">
            House Dip + Tomato, mixed
          </option>
          <option value="Medium Buffalo Sauce Base">
            Medium Buffalo Sauce Base
          </option>
          <option value="Hot Buffalo Sauce Base">Hot Buffalo Sauce Base</option>
          <option value="Bold BBQ Sauce Base">Bold BBQ Sauce Base</option>
          <option value="Sweet & Spicy Thai Sauce">
            Sweet &amp; Spicy Thai Sauce
          </option>
        </SelectField>
        <SelectField
          value={formData.cheese || ""}
          onChange={handleChange}
          label="CHEESE TOPPINGS"
          name="cheese"
          required
        >
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option value="No Cheese">No Cheese</option>
          <option value="Mozzarella cheese">Mozzarella Cheese</option>
          <option value="Blend of Mozzarella and Cheddar Cheese">
            Blend of Mozzarella and Cheddar Cheese
          </option>
          <option value="Feta Cheese">Feta Cheese</option>
          <option value="Asiago Cheese">Asiago Cheese</option>
          <option value="Parmesan Cheese">Parmesan Cheese</option>
          <option value="Lactose Free Mozzarella">
            Lactose Free Mozzarella
          </option>
          <option value="Dairy Free Vegan Cheese">
            Dairy Free Vegan Cheese
          </option>
          <option value="Extra Cheese">Extra Cheese</option>
        </SelectField>
        <SelectField
          value={formData.meat || ""}
          onChange={handleChange}
          name="meat"
          label="MEAT TOPPINGS"
          required
        >
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option value="Pepperoni">Pepperoni</option>
          <option value="Turkey Pepperoni">Turkey Pepperoni</option>
          <option value="Roni Cups">Roni Cups</option>
          <option value="Bacon">Bacon</option>
          <option value="Ham">Ham</option>
          <option value="Chicken Strips">Chicken Strips</option>
          <option value="Shaved Beef Steak">Shaved Beef Steak</option>
          <option value="Boneless (Breaded) Chicken">
            Boneless (Breaded) Chicken
          </option>
          <option value="Italian Sausage">Italian Sausage</option>
          <option value="Ground Beef">Ground Beef</option>
        </SelectField>
        <SelectField
          value={formData.veggie || ""}
          onChange={handleChange}
          name="veggie"
          label="VEGGIE TOPPINGS"
          required
        >
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option value="Fresh Mushrooms">Fresh Mushrooms</option>
          <option value="Green Peppers">Green Peppers</option>
          <option value="Green Olives">Green Olives</option>
          <option value="Kalamata Olives">Kalamata Olives</option>
          <option value="Spanish White Onions">Spanish White Onions</option>
          <option value="Sweet Red Onions">Sweet Red Onions</option>
          <option value="Diced Tomatoes">Diced Tomatoes</option>
          <option value="Roasted Red Peppers">Roasted Red Peppers</option>
          <option value="Pineapple">Pineapple</option>
          <option value="Hot Peppers">Hot Peppers</option>
          <option value="Jalapeño Peppers">Jalapeño Peppers</option>
          <option value="Basil">Basil</option>
          <option value="Diced Pickles">Diced Pickles</option>
        </SelectField>
        <SelectField
          value={formData.seasoning || ""}
          onChange={handleChange}
          label="SEASONING"
          name="seasoning"
          required
        >
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option value="Montreal Steak Spice">Montreal Steak Spice</option>
          <option value="Garlic + Herb Seasoning">
            Garlic + Herb Seasoning
          </option>
          <option value="Italian Herbs">Italian Herbs</option>
          <option value="Chili Peppers">Chili Peppers</option>
          <option value="Parmesan Cheese">Parmesan Cheese</option>
        </SelectField>
        <SelectField
          value={formData.flavour || ""}
          onChange={handleChange}
          label="FLAVOUR SWIRLS"
          required
        >
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option value="Ranch Swirl">Ranch Swirl</option>
          <option value="Medium Buffalo Sauce Swirl">
            Medium Buffalo Sauce Swirl
          </option>
          <option value="Hot Buffalo Sauce Swirl">
            Hot Buffalo Sauce Swirl
          </option>
          <option value="Bold BBQ Sauce Swirl">Bold BBQ Sauce Swirl</option>
          <option value="Sweet & Spicy Thai Swirl">
            Sweet &amp; Spicy Thai Swirl
          </option>
        </SelectField>
        <SelectField
          value={formData.dip || ""}
          onChange={handleChange}
          label="CHOOSE YOUR DIP"
          required
        >
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option value="Topper’s Famous House Dip">
            Topper’s Famous House Dip
          </option>
          <option value="Ranch">Ranch</option>
          <option value="Caesar">Caesar</option>
          <option value="Tomato">Tomato</option>
          <option value="Sweet & Spicy Thai">Sweet &amp; Spicy Thai</option>
          <option value="Bold BBQ">Bold BBQ</option>
          <option value="Cheddar Chipotle">Cheddar Chipotle</option>
          <option value="Medium Hot Sauce">Medium Hot Sauce</option>
          <option value="Hot Sauce">Hot Sauce</option>
          <option value="Honey Garlic">Honey Garlic</option>
        </SelectField>
        <SelectField
          value={formData.instructions || ""}
          onChange={handleChange}
          label="SPECIAL INSTRUCTIONS"
          required
        >
          <option value="" disabled selected hidden>
            -- select one --
          </option>
          <option value="Light Sauce">Light Sauce</option>
          <option value="Extra Sauce">Extra Sauce</option>
          <option value="Lightly Baked">Lightly Baked</option>
          <option value="Well Done">Well Done</option>
          <option value="Brush the pizza crust with Garlic Butter">Brush the pizza crust with Garlic Butter</option>
          <option value="Brush the pizza crust with Olive Oil">Brush the pizza crust with Olive Oil</option>
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
