import axios from "axios";
import React, { useEffect } from "react";

const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const respons = await axios(url);
      const data = respons.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>First Request</div>;
};

export default FirstRequest;
