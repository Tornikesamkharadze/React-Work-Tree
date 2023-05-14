import React from "react";
import { useRef } from "react";

const MainUseRef = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refContainer.current);
    console.log(divContainer.current.textContent);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">submit</button>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default MainUseRef;
