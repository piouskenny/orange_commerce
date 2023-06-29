import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Cart from "../Cart/cart"; // Assuming the correct path to the Cart component

const Hero = ({open, setOpen}) => {

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="w-full lg:h-[40vh] h-[28vh] flex justify-center items-center brandBg rounded-2xl relative">
      <div>
        <div
          className="fixed top-4 right-4 z-10"
          onClick={handleClick}
          role="button"
        >
          <div className="flex justify-between space-x-4 font-bold rounded-md shadow-md lg:px-6 lg:py-2 px-4 py-1 bg-white bg-opacity-50 backdrop-blur-lg">
            <ShoppingCartIcon className="h-6 w-6 text-black" aria-hidden="true" />
            <span>0</span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-white lg:text-5xl lg:font-bold text-3xl font-semibold">
            Orange Commerce
          </h1>
          <p className="text-gray-100 lg:mt-4 mt-2 lg:text-xl text-md">
            Shop here and feel Orange
          </p>
        </div>
      </div>

      {open && <Cart open={open} setOpen={setOpen} />} 
    </div>
  );
};

export default Hero;
