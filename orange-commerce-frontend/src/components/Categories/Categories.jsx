import React from "react";

const Categories_content = [
  {
    title: "Shoe",
  },

  {
    title: "T-Shirt",
  },
  {
    title: "wrist-watch",
  },
  {
    title: "Bags",
  },
  {
    title: "Gown",
  },
];
const Categories = () => {
  return (
    <>
      <h1 className="font-semibold text-gray-800 text-2xl pt-6 pl-4 lg:pl-10">Categories</h1>
      <div className="flex lg:space-x-10 space-x-4 items-center justify-center mt-6 overflow-x-auto mx-4 pb-6">
        {Categories_content.map((content) => (
          <div className="shadow-md px-4 py-1 text-gray-800 bg-white rounded-md flex-shrink-0 font-semibold cursor-pointer">
            {content.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
