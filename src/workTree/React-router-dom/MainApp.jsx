import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Error from "./Pages/Error";
import SingleProduct from "./Pages/SingleProduct";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Pages/ProtectedRoute";
import "./index.css";
import SharedLayout from "./Pages/SharedLayout";

const MainApp = () => {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user} >
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainApp;
