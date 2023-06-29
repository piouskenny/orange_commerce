import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Cards from "../../components/Cards/Cards";
import Nav from "../../components/Nav/nav";
import Cart from "../../components/Cart/cart";

const Home = () => {
  const [open, setOpen] = useState(false); // Initialize the open state
  const [cart_item, setCart_item] = useState(0);
  
  return (
    <body>
      <Hero setOpen={setOpen} /> {/* Pass setOpen function to Hero component */}
      <Categories />
      <Cards />
      <Nav />
      <Cart open={open} setOpen={setOpen} />{" "}
      {/* Pass open state and setOpen function to Cart component */}
    </body>
  );
};

export default Home;
