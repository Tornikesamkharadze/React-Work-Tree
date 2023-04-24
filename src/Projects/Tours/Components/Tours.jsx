import React from "react";
import Tour from "./Tour";
const url = "https://course-api.com/react-tours-project";
const Tours = () => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        <Tour />;
      </div>
    </section>
  );
};

export default Tours;
