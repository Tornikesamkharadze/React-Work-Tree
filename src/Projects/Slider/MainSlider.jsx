import React, { useEffect, useState } from "react";
import "./index.css";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import data from "./data";

const MainSlider = () => {
  const [people, setPleople] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex(index + 1);
  const prevSlide = () => setIndex(index - 1);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index > lastIndex) setIndex(0);
    if (index < 0) setIndex(lastIndex);
  }, [index]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index - 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [index]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) position = "activeSlide";
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button onClick={nextSlide} className="prev">
          <FiChevronLeft />
        </button>
        <button onClick={prevSlide} className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default MainSlider;
