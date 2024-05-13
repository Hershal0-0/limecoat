import React from "react";
import { productInfo } from "@/src/utils/data";
import Image from "next/image";

const Products = () => {
  return (
    <div>
      <div className="mt-10 ">
        <div className="relative flex flex-col items-center justify-center group text-[2.5rem] font-[200] mb-10">
          <h1 className="transition-all duration-500 group-hover:scale-105 ">
            Product Catalog
          </h1>
          <div className="absolute bottom-0 w-10 h-1 transition-all duration-500 origin-left transform bg-black group-hover:bg-blue-400 group-hover:w-[7rem] "></div>
        </div>
        <div className="flex items-center justify-center w-full ">
          <div className="flex flex-wrap justify-center gap-2 mt-5 max-w-fit ">
            {productInfo.map((product, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col  md:flex-row h-50 group borderBlack1 mx-2 mb-10"
                >
                  <div className="relative flex-1  w-[20rem] sm:w-[30rem] borderBlack1 ">
                    <Image
                      priority
                      src={product.img}
                      alt=""
                      className="mx-auto h-[30rem]  borderBlack1 "
                    />
                    <div className="absolute w-full h-40 text-white/70 transition-transform duration-500 origin-bottom transform scale-y-0 bg-black/20 text-[2rem] bottom-20 group-hover:scale-y-100">
                      {product.desc}
                    </div>
                    <div className="flex items-center justify-center h-20 bg-blue-200 shadow-2xl shadow-blue-200  text-[2rem] font-light">
                      {product.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="relative group ">
          <div className="flex flex-col justify-center items-center mt-10 text-[2.5rem] font-[200]">
            <h1 className="transition-all duration-500 group-hover:scale-105">
              Get A Free Quote
            </h1>
            <div className="relative bottom-0 w-10 h-1 transition-all duration-500 origin-left transform bg-black group-hover:bg-blue-400 group-hover:w-[7rem] "></div>
          </div>
          <h1 className="flex items-center justify-center mt-3 text-lg text-center sm:px-[10vw] md:px-[20vw] lg:px-[30vw]">
            This is a Paragraph. Click on "Edit Text" or double click on the
            text box to start editing the content. This is a Paragraph. Click on
            "Edit Text" or double click on the text box to start editing the
            content.
          </h1>
          <div className="p-8 bg-white rounded ">
            <form
              action="#"
              method="post"
              className="flex flex-col justify-center gap-4 sm:items-end sm:flex-row "
            >
              <div className="mb-4 ">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="product"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Product
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  placeholder="Product Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className=" mb-4 bg-[#996AA2] h-10 w-[7rem] text-white px-4 py-2 rounded hover:bg-[#620674] transition duration-300 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
