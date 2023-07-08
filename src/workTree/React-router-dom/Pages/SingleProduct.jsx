import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../Data/data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, image } = product;
  
  return (
    <section className="section product">
      <h5>{name}</h5>
      <img src={image} alt={name} />
      <div>SingleProduct</div>
      <Link to="/products">back to Products</Link>
    </section>
  );
};

export default SingleProduct;
