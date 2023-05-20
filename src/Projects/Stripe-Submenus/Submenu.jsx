import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useAppContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { bottom, center } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length === 4) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
