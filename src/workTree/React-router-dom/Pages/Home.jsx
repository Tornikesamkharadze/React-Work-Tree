import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="setion">
        <Outlet />
      </section>
    </>
  );
};

export default Home;
