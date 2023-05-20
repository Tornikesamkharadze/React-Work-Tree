import React, { useEffect, useRef } from "react";
import { useAppContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, location } = useAppContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { bottom, center } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    console.log(submenu);
  }, [location]);
  
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      submenu
    </aside>
  );
};

export default Submenu;
