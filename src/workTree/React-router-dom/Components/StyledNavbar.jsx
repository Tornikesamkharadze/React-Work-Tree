import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  /* დიფოლტად NavLink ი ისედაც ადებს კლასნეიმს active-ს მარა 
  მეორენაირადაც შეგვიძლია გავაკეთოთ თუ აქტიური რა მოხდეს თუ არა რა
  რიგირც მაქვს ჰოუმის ლინკზე მაგალითად */
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ IsActive }) => (IsActive ? "link active" : "link")}
      >
        home
      </NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/products">products</NavLink>
    </nav>
  );
};
/* 173 */
export default StyledNavbar;
z