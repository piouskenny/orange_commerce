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
      <Hero setOpen={setOpen}  cart_item={cart_item} setCart_item={setCart_item}/>
      <Categories />
      <Cards  cart_item={cart_item} setCart_item={setCart_item} />
      <Nav />
      <Cart open={open} setOpen={setOpen} />
    </body>
  );
};

export default Home;
