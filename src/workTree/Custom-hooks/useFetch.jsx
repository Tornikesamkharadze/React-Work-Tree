import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducets = async () => {
    const respons = await fetch(url);
    const data = await respons.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducets();
  }, [url]);

  return { loading, products };
};

export default useFetch;
