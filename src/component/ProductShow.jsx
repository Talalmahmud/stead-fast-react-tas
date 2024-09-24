import React from "react";
import ProductCard from "./ProductCard";

const ProductShow = () => {
  return (
    <div className=" flex flex-col gap-4">
      <p className=" text-sky-400 text-[24px] font-semibold text-center py-2">
        Popular Product
      </p>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard /> <ProductCard /> <ProductCard />
      </div>
    </div>
  );
};

export default ProductShow;
