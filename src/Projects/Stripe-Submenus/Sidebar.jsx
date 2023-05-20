import React from "react";
import sublinks from "./data";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <sidebar
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                {page}
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </sidebar>
  );
};

export default Sidebar;
