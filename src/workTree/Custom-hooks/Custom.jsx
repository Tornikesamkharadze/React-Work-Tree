import React from "react";
import useFetch from "./useFetch";

const url = "https://course-api.com/javascript-store-products";
const Custom = () => {
  const { loading, products } = useFetch(url);
  console.log(loading, products);
  return <h1>{`${loading ? "Loading..." : "Data"}`}</h1>;
};

export default Custom;
