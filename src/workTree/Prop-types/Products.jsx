import React from "react";
import defaultImage from "../../assets/default-image.jpeg";
import PropTypes from "prop-types";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      single product
      <img src={url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>{price || 3.99}</p>
    </article>
  );
};

Product.prototype = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

/* Product.defaultProps = {
  image: defaultImage,
  name: "default name",
  price: 3.99,
};
 */
export default Product;
