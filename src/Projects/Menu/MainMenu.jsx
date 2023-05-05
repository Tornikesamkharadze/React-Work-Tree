import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
import "./index.css";

const MainMenu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default MainMenu;
