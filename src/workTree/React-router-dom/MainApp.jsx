import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const MainApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route path="about" element={<div>about</div>} />
        <Route path="*" element={<div>error</div>} />
        <Route path="products" element={<div>products</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainApp;
