import React from "react";
import Navbar from "../Components/Navbar";
import StyledNavbar from "../Components/StyledNavbar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
