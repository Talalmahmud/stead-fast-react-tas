import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/product.json";
import categories from "../data/category.json";

const ProductShow = () => {
  const [productList, setProductList] = useState(products.categories);
  const [selectCategory, setSelectCategory] = useState(0);
  const [price, setPrice] = useState(2000);

  const filterProductPrice = useCallback(() => {
    let filterData = products.categories;

    if (selectCategory === 0) {
      filterData = products.categories.map((category) => ({
        ...category,
        products: category.products.filter(
          (product) => product?.price <= price
        ),
      }));
    } else {
      filterData = products.categories.filter(
        (category) => category?.id === selectCategory
      );

      filterData = filterData.map((category) => ({
        ...category,
        products: category.products.filter(
          (product) => product?.price <= price
        ),
      }));
    }

    setProductList(filterData);
  }, [price, selectCategory]);

  useEffect(() => {
    filterProductPrice();
  }, [filterProductPrice, selectCategory]);
  return (
    <div className=" flex flex-col gap-4 py-8">
      <p className=" text-sky-400 text-[24px] font-semibold text-center py-2">
        Popular Product
      </p>
      <div className=" flex gap-4 flex-col md:flex-row items-center">
        <div className=" w-full md:w-[200px] flex flex-col gap-1">
          <p>Select category</p>
          <select
            onChange={(e) => setSelectCategory(Number(e.target.value))}
            className=" border-[1px] border-gray-300 rounded-[4px]"
          >
            {categories?.categories?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className=" w-full md;w-[200px] flex flex-col gap-1">
          <p>Price</p>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className=" border-[1px] border-gray-300 rounded-[4px]"
            type="number"
          />
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {productList?.map((productItem) =>
          productItem?.products?.map((item, index) => (
            <ProductCard key={index} itemDetail={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductShow;
