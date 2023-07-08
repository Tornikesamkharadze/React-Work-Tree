import React from "react";
import { Outlet } from "react-router-dom";

const SharedLayoutProduct = () => {
  return (
    <>
      <h1>products</h1>
      <Outlet />
    </>
  );
};

export default SharedLayoutProduct;
