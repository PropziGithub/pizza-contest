import one from "@/assets/one.gif";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { TextField } from "./Fields";
import { Link } from "react-router-dom";

const StartForm = () => {
  const dataStored = JSON.parse(localStorage.getItem("formData")) || {};
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState(dataStored);
  console.log("DATA:", formData);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      localStorage.setItem("formData", JSON.stringify(formData));
      const storageEvent = new StorageEvent("storage", {
        key: "formData",
      });

      window.dispatchEvent(storageEvent);
    } catch (error) {
      event.target.reset();
    }
  };
  const hasValues = Object.values(formData).every((value) => value === "");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      if (event.key === "formSubmitted") {
        setFormData({});
      }
    });
  }, [formData]);

  return (
    <div className="mt-10 w-[486px]  bg-primary-medium rounded-[20px] border border-1 border-grey-light">
      <div className="text-center bg-primary-dark rounded-t-[20px] py-4">
        <div className="flex justify-around items-center">
          <div className="md:hidden flex justify-center items-center h-[47px] w-[47px] bg-primary-medium rounded-full flex-none ">
            <img
              src={one}
              alt="first step"
              className="h-[30px] mr-3  mx-auto"
            />
          </div>
          <span className="text-[#FFFFFF] md:text-[30px] text-[18px] font-bold">
            Start Your Contest Entry
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1  gap-y-4 py-4 px-10 ">
        <TextField
          onChange={handleChange}
          value={formData.name || ""}
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name"
          required
        />
        <TextField
          onChange={handleChange}
          value={formData.email || ""}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          required
        />
        <TextField
          onChange={handleChange}
          value={formData.phone || ""}
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Phone Number"
          required
        />
        <div className="flex  py-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-gray-600"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className="ml-2 text-[12.4px] text-[#FFFFFF]">
            I consent to receive electronic messages (including emails,
            newsletters, and other communications) from Topper's Pizza
          </span>
        </div>
        <div>
          <Button
            type="submit"
            variant="solid"
            className="w-full"
            disabled={hasValues || !isChecked}
          >
            <span>Start Building Your Custom Pizza</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StartForm;
