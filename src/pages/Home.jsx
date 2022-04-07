import React from "react";
import Announcement from "../component/Announcement";
import Categories from "../component/categories/Categories";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";
import Newsletter from "../component/newsletter/Newsletter";
import Products from "../component/products/Products";
import Slider from "../component/slider/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
