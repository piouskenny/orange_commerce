import React from "react";

const Hero = () => {
  return (
    <div className="w-full lg:h-[40vh] h-[28vh] flex justify-center content-center items-center brandBg rounded-2xl">
      <div className="text-center">
        <h1 className="text-white lg:text-5xl lg:font-bold text-3xl font-semibold ">
          Orange Commerce
        </h1>
        <p className="text-gray-100 lg:mt-4 mt-2 lg:text-xl text-md">
          Shop here and feel Orange
        </p>
      </div>
    </div>
  );
};

export default Hero;
