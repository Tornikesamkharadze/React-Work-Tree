import React from "react";
import Quiestions from "./Quiestions";
import data from "./data";
import "./index.css"
const MainAccording = () => {
  return (
    <main>
      <div className="container">
        <h3>questions and answers aboout login</h3>
        <section className="info">
          {data.map((question) => {
            return <Quiestions key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default MainAccording;
