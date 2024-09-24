import React from "react";

const HeroSection = () => {
  return (
    <div className=" relative w-full h-[300px] md:h-[350px] xl:h-[450px] ">
      <img
        src="https://img.freepik.com/free-photo/wet-sphere-reflective-water-abstract-beauty-generated-by-ai_188544-19616.jpg"
        className=" h-full w-full"
        alt=""
      />
      <p className=" absolute bottom-[30%] left-[20px] font-semibold text-[24px] text-white">
        Title
      </p>
    </div>
  );
};

export default HeroSection;
