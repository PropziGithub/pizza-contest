import two from "@/assets/two.gif";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { SelectField } from "./Fields";

const BuildForm = () => {
  const [formData, setFormData] = useState({});
  const [startFormData, setStartFormData] = useState(
    JSON.parse(localStorage.getItem("formData"))
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newPayload = {
        ...startFormData,
        metaData: formData,
      };

      const response = await fetch("https://78ea-41-216-95-227.in.ngrok.io", {
        method: "POST",
        body: JSON.stringify(newPayload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.text();
      setFormData({});
      localStorage.setItem("formData", null);
    } catch (error) {
      event.target.reset();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      console.log(event);
      setStartFormData(JSON.parse(localStorage.getItem("formData")));
    });
  }, [formData]);

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
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1  gap-y-4 py-4 px-10 "
      >
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
          <Button
            type="submit"
            variant="solid"
            className="w-full"
            disabled={startFormData ? false : true}
          >
            <span>Enter the Contest</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BuildForm;
