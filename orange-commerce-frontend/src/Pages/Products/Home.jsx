import React from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Cards from "../../components/Cards/Cards";
import Nav from "../../components/Nav/nav";

const Home = () => {
  return (
    <body>
      <Hero />
      <Categories />
      <Cards />
      <Nav/>
    </body>
  );
};

export default Home;
