import Image from "next/image";
import React from "react";
import products from "../data/machines";
import Link from "next/link";

const Products = () => {
  return (
    <section id="product" className="px-5 py-10 bg-gray-100">
      <div className="my-3 text-center">
        <h2 className="sm:text-4xl text-2xl font-bold text-gray-900">
          Products
        </h2>
        <div className="h-1 w-24 bg-orange-600 rounded mt-1 mx-auto"></div>
      </div>
      <div className="sm:mx-[10%] sm:my-[5%] mx-2 my-2 grid sm:grid-cols-4 grid-cols-2 sm:gap-6 gap-4">
        {products.map((product, index) => (
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            key={index}
          >
            <div className="flex justify-center items-center h-3/5">
              <Image
                src={product.images}
                className="object-cover h-full w-full"
                alt={product.name}
                loading="lazy" // Added for performance improvement
              />
            </div>
            <div className="flex flex-col justify-between items-start p-4 h-2/5">
              <h3
                className="text-lg font-semibold text-gray-800 mb-2 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {product.name}
              </h3>
              <Link href={`/products/${product.slug}`}>
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-center rounded-md text-white py-2 px-4 mt-2 transform duration-300 hover:scale-105">
                  Get Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
