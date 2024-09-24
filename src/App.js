import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import ProductShow from "./component/ProductShow";

const App = () => {
  return (
    <div className=" w-full">
      <div className=" w-[336px] sm:w-[420px] md:w-[720px] xl:w-[1100px] mx-auto">
        <Navbar />
        <HeroSection />
        <ProductShow />
      </div>
    </div>
  );
};

export default App;
