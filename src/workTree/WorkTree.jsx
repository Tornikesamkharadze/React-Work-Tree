import React, { useEffect, useState } from "react";

const WorkTree = () => {
  const [size, setSize] = useState();

  const sizeHandler = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", sizeHandler);
  /*   return () => {
      window.removeEventListener("resize", sizeHandler);
    }; */
  }, []);

  return <div>{size}</div>;
};

export default WorkTree;
