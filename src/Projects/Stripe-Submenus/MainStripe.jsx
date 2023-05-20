import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Submenu from "./Submenu";
import { AppProvider } from "./context";
import "./index.css";

const MainStripe = () => {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </AppProvider>
    </>
  );
};

export default MainStripe;
