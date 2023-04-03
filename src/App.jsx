import React from "react";
import "@/styles/tailwind.css";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import { Routes, Route } from "react-router-dom";
import Rules from "@/components/Rules";

function Index() {
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



function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/rules" element={<Rules />} />
      <Route
        path="*"
        element={
          <div>
            <h1 className="font-bold">Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}
export default App;