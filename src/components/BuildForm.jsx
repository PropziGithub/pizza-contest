import two from "@/assets/two.gif";
import Button from "@/components/Button";
import { useEffect, useRef, useState } from "react";
import { SelectField } from "./Fields";
import Spinner from "./Spinner";

const BuildForm = () => {
  const [about_recipe, setRecipe] = useState('');
  const [formData, setFormData] = useState({about_recipe});
  const [startFormData, setStartFormData] = useState(
    JSON.parse(localStorage.getItem("formData"))
  );
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const [val1, val2, val3, val4, val5, val6, val7, val8, val9] =
        Object.entries(formData).map(([key, valArray]) => {
          if (typeof valArray === "string") {
            return  {
              [key]: valArray,
            };
          }
          const d = valArray.map(({ value }) => {
            return value;
          });
          return {
            [key]: d,
          };
        });
      const newFormData = {
        ...val1,
        ...val2,
        ...val3,
        ...val4,
        ...val5,
        ...val6,
        ...val7,
        ...val8,
        ...val9,
      };

      const newPayload = {
        ...startFormData,
        metaData: newFormData,
      };

      const response = await fetch("https://auto.topperscontest.ca/", {
        method: "POST",
        body: JSON.stringify(newPayload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.text();
      setFormData({});
      localStorage.setItem("formData", null);
      const storageEvent = new StorageEvent("storage", {
        key: "formSubmitted",
      });
      window.dispatchEvent(storageEvent);
      setSuccess(true);
    } catch (error) {
      event.target.reset();
      setSuccess(false);
    }
  };

  const handleRecipeChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange = (options, action) => {
    setFormData((pre) => ({
      ...pre,
      [action.name]: options,
    }));
  };

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      if (event.key === "formSubmitted") {
      }
      setStartFormData(JSON.parse(localStorage.getItem("formData")));
      formRef?.current?.scrollIntoView({ behavior: "smooth" });
    });
  }, [formData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [success]);
  const crust = [
    { value: "Regular Curst", label: "Regular Curs" },
    { value: "Thin Curst", label: "Thin Curs" },
    { value: "Ultra-thin Curst", label: "Ultra-thin Curs" },
    { value: "Thick Curst", label: "Thick Curs" },
    { value: "Whole Wheat Curst", label: "Whole Wheat Curs" },
    { value: "Cauliflower Curst", label: "Cauliflower Curs" },
  ];
  const sauce = [
    { value: "Toppers Tomato Sauce", label: "Topper's Tomato Sauce" },
    { value: "Garlic Butter Base", label: "Garlic Butter Base" },
    { value: "House Dip", label: "House Dip" },
    { value: "House Dip + Tomato mixed", label: "House Dip + Tomato, mixed" },
    { value: "Medium Buffalo Sauce Base", label: "Medium Buffalo Sauce Base" },
    { value: "Hot Buffalo Sauce Base", label: "Hot Buffalo Sauce Base" },
    { value: "Bold BBQ Sauce Base", label: "Bold BBQ Sauce Base" },
    { value: "Sweet & Spicy Thai Sauce", label: "Sweet & Spicy Thai Sauce" },
  ];

  const cheese = [
    { value: "No Cheese", label: "No Cheese" },
    { value: "Mozzarella cheese", label: "Mozzarella Cheese" },
    {
      value: "Blend of Mozzarella and Cheddar Cheese",
      label: "Blend of Mozzarella and Cheddar Cheese",
    },
    { value: "Feta Cheese", label: "Feta Cheese" },
    { value: "Asiago Cheese", label: "Asiago Cheese" },
    { value: "Parmesan Cheese", label: "Parmesan Cheese" },
    { value: "Lactose Free Mozzarella", label: "Lactose Free Mozzarella" },
    { value: "Dairy Free Vegan Cheese", label: "Dairy Free Vegan Cheese" },
    { value: "Extra Cheese", label: "Extra Cheese" },
  ];

  const meat = [
    { value: "Pepperoni", label: "Pepperoni" },
    { value: "Turkey Pepperoni", label: "Turkey Pepperoni" },
    { value: "Roni Cups", label: "Roni Cups" },
    { value: "Bacon", label: "Bacon" },
    { value: "Ham", label: "Ham" },
    { value: "Chicken Strips", label: "Chicken Strips" },
    { value: "Shaved Beef Steak", label: "Shaved Beef Steak" },
    {
      value: "Boneless (Breaded) Chicken",
      label: " Boneless (Breaded) Chicken",
    },
    { value: "Italian Sausage", label: "Italian Sausage" },
    { value: "Ground Beef", label: "Ground Beef" },
  ];

  const veggie = [
    { value: "Fresh Mushrooms", label: "Fresh Mushrooms" },
    { value: "Green Peppers", label: "Green Peppers" },
    { value: "Green Olives", label: "Green Olives" },
    { value: "Kalamata Olives", label: "Kalamata Olives" },
    { value: "Spanish White Onions", label: "Spanish White Onions" },
    { value: "Sweet Red Onions", label: "Sweet Red Onions" },
    { value: "Diced Tomatoes", label: "Diced Tomatoes" },
    { value: "Roasted Red Peppers", label: "Roasted Red Peppers" },
    { value: "Pineapple", label: "Pineapple" },
    { value: "Hot Peppers", label: "Hot Peppers" },
    { value: "Jalapeño Peppers", label: "Jalapeño Peppers" },
    { value: "Basil", label: "Basil" },
    { value: "Diced Pickles", label: "Diced Pickles" },
  ];

  const seasoning = [
    { value: "Montreal Steak Spice", label: "Montreal Steak Spice" },
    { value: "Garlic + Herb Seasoning", label: "Garlic + Herb Seasoning" },
    { value: "Italian Herbs", label: "Italian Herbs" },
    { value: "Chili Peppers", label: "Chili Peppers" },
    { value: "Parmesan Cheese", label: "Parmesan Cheese" },
  ];

  const flavour = [
    { value: "Ranch Swirl", label: "Ranch Swirl" },
    {
      value: "Medium Buffalo Sauce Swirl",
      label: "Medium Buffalo Sauce Swirl",
    },
    { value: "Hot Buffalo Sauce Swirl", label: "Hot Buffalo Sauce Swirl" },
    { value: "Bold BBQ Sauce Swirl", label: "Bold BBQ Sauce Swirl" },
    {
      value: "Sweet & Spicy Thai Swirl",
      label: "Sweet & Spicy Thai Swirl",
    },
  ];

  const dip = [
    { value: "Topper’s Famous House Dip", label: "Topper’s Famous House Dip" },
    { value: "Ranch", label: "Ranch" },
    { value: "Caesar", label: "Caesar" },
    { value: "Tomato", label: "Tomato" },
    { value: "Sweet & Spicy Thai", label: "Sweet & Spicy Thai" },
    { value: "Bold BBQ", label: "Bold BBQ" },
    { value: "Cheddar Chipotle", label: "Cheddar Chipotle" },
    { value: "Medium Hot Sauce", label: "Medium Hot Sauce" },
    { value: "Hot Sauce", label: "Hot Sauce" },
    { value: "Honey Garlic", label: "Honey Garlic" },
  ];

  const instructions = [
    { value: "Light Sauce", label: "Light Sauce" },
    { value: "Extra Sauce", label: "Extra Sauce" },
    { value: "Lightly Baked", label: "Lightly Baked" },
    { value: "Well Done", label: "Well Done" },
    {
      value: "Brush the pizza crust with Garlic Butter",
      label: "Brush the pizza crust with Garlic Butter",
    },
    {
      value: "Brush the pizza crust with Olive Oil",
      label: "Brush the pizza crust with Olive Oil",
    },
  ];
  return (
    <div
      ref={formRef}
      className="mt-20 w-[486px] bg-primary-medium rounded-[20px] border border-1 border-grey-light"
    >
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
          options={crust}
          required
        />
        <SelectField
          value={formData.sauce || ""}
          onChange={handleChange}
          label="BASE SAUCE"
          name="sauce"
          options={sauce}
          required
        />
        <SelectField
          value={formData.cheese || ""}
          onChange={handleChange}
          label="CHEESE TOPPINGS"
          name="cheese"
          options={cheese}
          required
        />
        <SelectField
          value={formData.meat || ""}
          onChange={handleChange}
          name="meat"
          label="MEAT TOPPINGS"
          options={meat}
          required
        />
        <SelectField
          value={formData.veggie || ""}
          onChange={handleChange}
          name="veggie"
          label="VEGGIE TOPPINGS"
          options={veggie}
          required
        />
        <SelectField
          value={formData.seasoning || ""}
          onChange={handleChange}
          label="SEASONING"
          name="seasoning"
          options={seasoning}
          required
        />
        <SelectField
          value={formData.flavour || ""}
          onChange={handleChange}
          label="FLAVOUR SWIRLS"
          name="flavour"
          options={flavour}
          required
        />
        <SelectField
          value={formData.dip || ""}
          onChange={handleChange}
          label="CHOOSE YOUR DIP"
          name="dip"
          options={dip}
          required
        />
        <SelectField
          value={formData.instructions || ""}
          onChange={handleChange}
          label="SPECIAL INSTRUCTIONS"
          name="instructions"
          options={instructions}
          required
        />
        <span className="text-[.8rem] text-[#FFFFFF]">
          Tell us about your Recipe! Whether you have a special way of creating
          with the options selected above, or if you’ve imagined something
          different, please use the text box below to tell us more about how you
          craft your pizza.
        </span>
        <textarea
          value={formData.about_recipe || ""}
          onChange={handleRecipeChange}
          name="about_recipe"
          cols="20"
          rows="5"
          className="resize-none block w-full appearance-none rounded-[3px] border 
            border-grey-light bg-[#FFFFFF] placeholder:text-[#000000] py-[calc(theme(spacing.2)-1px)]
            px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-main_primary
            focus:outline-none focus:ring-main_primary sm:text-sm"
        ></textarea>
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
            {success ? (
              <Spinner width={20} height={20} color={"#FFFFFF"} />
            ) : (
              <span>Enter the Contest</span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BuildForm;
