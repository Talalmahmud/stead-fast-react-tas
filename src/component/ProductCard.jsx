import React from "react";

const ProductCard = ({ itemDetail }) => {
  return (
    <div className=" hover:bg-gray-400 cursor-pointer hover:-translate-y-1 bg-slate-300 rounded-[8px] p-2 ">
      <img
        src="https://img.freepik.com/free-photo/wet-sphere-reflective-water-abstract-beauty-generated-by-ai_188544-19616.jpg"
        className=" h-[150px] w-full"
        alt=""
      />
      <p className=" text-[20px] font-semibold">{itemDetail?.title}</p>
      <p className=" text-[14px]">
        Price: {itemDetail?.price} <span className=" text-green-700">BDT</span>
      </p>
      <p className=" text-[14px]">{itemDetail?.description?.slice(0, 40)}...</p>
    </div>
  );
};

export default ProductCard;
