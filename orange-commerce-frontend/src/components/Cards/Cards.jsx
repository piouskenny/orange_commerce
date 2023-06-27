import React from "react";
import SingleCards from "./SingleCards";

const CardContent = [
  {
    title: "Blue Nike Show",
    Category: "Shoe",
    Image: "",
    Price: "$800",
    Description: "Lorem Ipsoum tresus Mandes",
  },
  {
    title: "White Addidas Jogger",
    Category: "Cloth",
    Image: "",
    Price: "$300",
    Description: "Lorem Ipsoum tresus Mandes",
  },
  {
    title: "CK Blue business",
    Category: "Wristwatch",
    Image: "",
    Price: "$600",
    Description: "Lorem Ipsoum tresus Mandes",
  },
  {
    title: "Gucci Bag",
    Category: "Bag",
    Image: "",
    Price: "$1000",
    Description: "Lorem Ipsoum tresus Mandes",
  },
];

const Cards = () => {
  return (
    <>
      <div className="lg:flex justify-center items-center content-center mt-10 lg:space-y-0 space-y-5 lg:gap-4">
        {CardContent.map((content) => (
          <SingleCards
            Image={content.Image}
            title={content.title}
            Category={content.Category}
            Price={content.Price}
            Description={content.Description}
          />
        ))}
      </div>

      <div className="lg:flex justify-center items-center content-center mt-10 lg:space-y-0 space-y-5 lg:gap-4 pb-40">
        {CardContent.map((content) => (
          <SingleCards
            Image={content.Image}
            title={content.title}
            Category={content.Category}
            Price={content.Price}
            Description={content.Description}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
