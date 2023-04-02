import React from "react";
import  Container  from "@/components/Container";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <Container className="flex justify-center items-center px-4 py-6">
        <Logo className="h-10 w-auto" />
      </Container>
    </section>
  );
};
export default Header;
