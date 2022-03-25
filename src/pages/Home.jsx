import React from "react";
import Announcement from "../component/Announcement";
import Navbar from "../component/navbar/Navbar";
import Slider from "../component/slider/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
    </div>
  );
};

export default Home;
