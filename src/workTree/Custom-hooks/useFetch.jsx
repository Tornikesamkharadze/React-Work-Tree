import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducets = useCallback(async () => {
    const respons = await fetch(url);
    const data = await respons.json();
    setProducts(data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducets();
  }, [url, getProducets]);

  return { loading, products };
};

export default useFetch;
