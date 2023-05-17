import React from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { AppProvider } from "./context";
import "./index.css";

const MainSidebar = () => {
  return (
    <>
      <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
      </AppProvider>
    </>
  );
};

export default MainSidebar;
