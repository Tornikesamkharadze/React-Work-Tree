import React from "react";

const Tour = ({ id, image, info, name, price, filterTour }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{info}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          <button></button>
        </p>
        <button className="delete-btn" onClick={() => filterTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
