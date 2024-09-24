import React from "react";

const ProductCard = () => {
  return (
    <div className=" bg-slate-300 rounded-[8px] p-2 ">
      <img
        src="https://img.freepik.com/free-photo/wet-sphere-reflective-water-abstract-beauty-generated-by-ai_188544-19616.jpg"
        className=" h-[150px] w-full"
        alt=""
      />
      <p className=" text-[20px] font-semibold">Title</p>
      <p className=" text-[14px]">This is first product</p>
    </div>
  );
};

export default ProductCard;
