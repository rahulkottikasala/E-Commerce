import React from "react";
import Announcement from "../component/Announcement";
import Categories from "../component/categories/Categories";
import Navbar from "../component/navbar/Navbar";
import Slider from "../component/slider/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
    </div>
  );
};

export default Home;
