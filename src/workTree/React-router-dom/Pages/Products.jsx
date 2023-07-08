import React from "react";
import products from "../Data/data";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section className="setion">
      <h4>products</h4>
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <img src={product.image} />
              <Link to={`/products/${product.id}`}>See product</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
