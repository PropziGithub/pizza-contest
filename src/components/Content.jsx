import React from "react";
import Container from "@/components/Container";
import pizza from "@/assets/pizza.gif";
import one from "@/assets/one.gif";
import two from "@/assets/two.gif";
import three from "@/assets/three.gif";
import StartForm from "./StartForm";
import BuildForm from "./BuildForm";
import InstagramFilters from "./InstagramFilter";

const Content = () => {
  return (
    <section>
      <div className="bg-primary-medium w-full py-10">
        <Container className="w-full flex justify-between">
          <div className="hidden md:block w-[277px] h-[277px]">
            <img src={pizza} alt="pizza" />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-[30px] md:text-[60px] font-bold text-[#FFFFFF] text-center">
              Design Our Next Recipe <br /> Pizza Contest!
            </h1>
            <span className="text-[18px] font-normal text-[#FFFFFF] text-center">
              Enter our “Design our next Recipe Pizza” Contest for a chance to
              have your Recipe Pizza featured on our Menu and win FREE pizza for
              a year!
            </span>
            <span className="text-[18px] font-normal text-[#FFFFFF] text-center">
              Are you a pizza lover? Do you have a unique pizza recipe you’d
              love the chance to share? Topper’s wants to hear from you! Tell us
              how you’d craft a crave-worthy pizza using the form below.
            </span>
          </div>
          <div className="hidden md:block w-[277px] h-[277px]">
            <img src={pizza} alt="pizza" />
          </div>
        </Container>
      </div>
      <section
        className={`bg-[url('assets/bg.svg')] w-[100%] h-full bg-no-repeat bg-cover py-10`}
      >
        <Container>
          <div className="flex justify-center">
            <div className="hidden md:flex  justify-center items-center h-[160px] w-[160px] bg-primary-medium rounded-full flex-none mr-20 mt-[60px]">
              <img src={one} alt="first step" className="h-[76px]"/>
          </div>
          <StartForm />
          </div>
          <div className="flex justify-center">
          <div className="hidden md:flex  justify-center items-center h-[160px] w-[160px] bg-primary-medium rounded-full flex-none mr-20 mt-[95px]">
              <img src={two} alt="first step" className="h-[76px]"/>
          </div>
          <BuildForm />
          </div>
          <div className="flex justify-center">
          <div className="hidden md:flex  justify-center items-center h-[160px] w-[160px] bg-primary-medium rounded-full flex-none mr-20 mt-[90px]">
              <img src={three} alt="first step" className="h-[76px]"/>
          </div>
          <InstagramFilters />
          </div>
        </Container>
      </section>
    </section>
  );
};
export default Content;
