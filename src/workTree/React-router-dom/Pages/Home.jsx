import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <h1>home page</h1>
      <Link to="about" className="btn">
        about
      </Link>
    </section>
  );
};

export default Home;
