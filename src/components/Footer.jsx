import Container from "@/components/Container";
import logo from "@/assets/footer_logo.png";

const Footer = () => {
  return (
    <section className="bg-primary-light py-2">
      <Container>
        <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row items-center justify-between pt-6">
          <div className="h-[46px]">
            <img src={logo} alt="logo" className="h-full" />
          </div>
          <div>
            <span className="text-[14px] md:text-[18px] text-[#FFFFFF] leading-[1.6px] font-bold cursor-pointer hover:underline">
              Contest Rules | Terms & Conditions | Privacy Policy
            </span>
          </div>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <div className="flex justify-center items-center h-[31px] w-[31px] bg-[#FFFFFF] rounded-full cursor-pointer flex-none">
              <img
                className="h-[17px] w-[17px]"
                src="https://v.fastcdn.co/u/6430ff65/47020280-0-twitter.svg"
                alt="twitter logo"
              />
            </div>
            <div className="flex justify-center items-center h-[31px] w-[31px] bg-[#FFFFFF] rounded-full cursor-pointer flex-none">
              <img
                className="h-[17px] w-[17px]"
                src="https://v.fastcdn.co/u/6430ff65/47019940-0-instagram.svg"
                alt="instagram logo"
              />
            </div>
            <div className="flex justify-center items-center h-[31px] w-[31px] bg-[#FFFFFF] rounded-full cursor-pointer flex-none">
              <img
                className="h-[17px] w-[17px]"
                src="https://v.fastcdn.co/u/6430ff65/47019880-0-linkedin.svg"
                alt="linkedin logo"
              />
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-[#FFFFFF] md:mt-0">
          Copyright &copy; 2023. All rights Reserved.
        </p>
      </Container>
    </section>
  );
};
export default Footer;
