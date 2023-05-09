import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
import "./index.css";

const MainColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState();

  const handleChange = (e) => setColor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={handleChange}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  );
};

export default MainColorGenerator;
