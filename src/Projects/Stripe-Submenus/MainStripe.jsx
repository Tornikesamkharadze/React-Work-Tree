import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Submenu from "./Submenu";

const MainStripe = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
};

export default MainStripe;
