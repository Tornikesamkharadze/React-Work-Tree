import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();

  return (
    <section className="section product">
      <h4>{productId}</h4>
      <div>SingleProduct</div>
      <Link to="/products">Products</Link>
    </section>
  );
};

export default SingleProduct;
