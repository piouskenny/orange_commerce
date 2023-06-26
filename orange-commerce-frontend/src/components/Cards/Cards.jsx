import React from "react";
import SingleCards from "./SingleCards";
import Categories from "./Categories/Categories";
const CardContent = [
  {
    title: "Blue Nike Show",
    Category: "Shoe",
    Image: "",
    Description: "Lorem Ipsoum tresus Mandes",
  },
  {
    title: "White Addidas Jogger",
    Category: "Cloth",
    Image: "",
    Description: "Lorem Ipsoum tresus Mandes",
  },
  {
    title: "CK Blue business",
    Category: "Wristwatch",
    Image: "",
    Description: "Lorem Ipsoum tresus Mandes",
  },
  {
    title: "Gucci Bag",
    Category: "Bag",
    Image: "",
    Description: "Lorem Ipsoum tresus Mandes",
  },
];

const Cards = () => {
  return (
    <div>
      {CardContent.map((content) => (
        <SingleCards
          Image={content.Image}
          title={content.title}
          Category={content.Category}
          Description={content.Description}
        />
      ))}
    </div>
  );
};

export default Cards;
