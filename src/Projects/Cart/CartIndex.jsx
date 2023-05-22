import React from "react";
import MainCart from "./MainCart";
import { AppProvider } from "./context";
import "./index.css";
const CartIndex = () => {
  return (
    <AppProvider>
      <MainCart />
    </AppProvider>
  );
};

export default CartIndex;
