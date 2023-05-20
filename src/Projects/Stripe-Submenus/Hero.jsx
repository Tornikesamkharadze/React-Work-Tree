import React from "react";
import { useAppContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useAppContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Manage Any Content Anywhere</h1>
          <p>
            Strapi is the leading open-source headless CMS. It’s 100% JavaScript
            and fully customizable.
          </p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
