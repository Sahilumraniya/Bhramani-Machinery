import Image from "next/image";
import React from "react";
import products from "../data/machines";
import Link from "next/link";

const Products = () => {
  return (
    <div id="product" className="px-[5%] py-[1%]">
      <div className="my-3">
        <samp className="sm:text-4xl text-2xl font-semibold rounded-sm text-white">
          Product
          <div className="h-1 w-20 bg-orange-600 rounded mt-1"></div>
        </samp>
      </div>
      <div className="sm:mx-[10%] sm:my-[5%] mx-[2%] my-[2%] grid sm:grid-cols-4 grid-cols-2 sm:gap-4 gap-2">
        {products.map((product, index) => {
          return (
            <>
              <div className="bg-white rounded-md overflow-hidden min-h" key={index}>
                <div className="flex justify-center items-center">
                  <Image
                    src={product.images}
                    className="object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex justify-between items-center space-x-2 sm:mx-2 sm:my-2 mx-1 my-1">
                  <h3 className="sm:text-[1.1rem] text-xs font-semibold">
                    {product.name}
                  </h3>
                  <Link href={`/products/${product.slug}`}>
                    <button className="bg-blue-600 hover:bg-blue-800 text-center rounded-md text-white">
                      Get Details
                    </button>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
