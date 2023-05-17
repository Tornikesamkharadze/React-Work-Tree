import React from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import "./index.css"

const MainSidebar = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};

export default MainSidebar;
