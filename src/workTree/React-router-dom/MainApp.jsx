import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Error from "./Pages/Error";
import "./index.css";

const MainApp = () => {
  return (
    <BrowserRouter>
      <nav>navbar</nav>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer>footer</footer>
    </BrowserRouter>
  );
};

export default MainApp;
