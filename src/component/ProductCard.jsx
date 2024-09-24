import React from "react";

const ProductCard = ({ itemDetail }) => {
  return (
    <div className=" bg-slate-300 rounded-[8px] p-2 ">
      <img
        src="https://img.freepik.com/free-photo/wet-sphere-reflective-water-abstract-beauty-generated-by-ai_188544-19616.jpg"
        className=" h-[150px] w-full"
        alt=""
      />
      <p className=" text-[20px] font-semibold">{itemDetail?.title}</p>
      <p>{itemDetail?.price}</p>
      <p className=" text-[14px]">{itemDetail?.description?.slice(0, 40)}...</p>
    </div>
  );
};

export default ProductCard;
