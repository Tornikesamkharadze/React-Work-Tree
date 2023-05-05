import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
import "./index.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MainMenu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
        </div>
        <Categories allCategories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default MainMenu;
