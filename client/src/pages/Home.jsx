import React from "react";
import CurrentProducts from "../components/CurrentProducts";
import Navbar from "../components/Navbar";
import Display from "../components/Display";
import Publication from "../components/Publication";
import Switch from "../components/Switch";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Publication />
      <Navbar />
      <Switch />
      <Display />
      <CurrentProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
