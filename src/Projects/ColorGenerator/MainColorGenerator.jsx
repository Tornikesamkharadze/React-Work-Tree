import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
import "./index.css";

const MainColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleChange = (e) => setColor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
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
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default MainColorGenerator;
