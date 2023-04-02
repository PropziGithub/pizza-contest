import React from "react";
import "@/styles/tailwind.css";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";


function App() {
  return (
    <>
      <Header />
      <main>
        <Content />
        <Footer/>
      </main>
    </>
  );
}

export default App;
