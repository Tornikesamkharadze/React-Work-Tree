import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";

import "./index.css";

const MainApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainApp;
