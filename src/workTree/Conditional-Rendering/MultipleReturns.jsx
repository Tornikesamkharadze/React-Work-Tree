import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isUser, setIsUser] = useState("Cant find User");

  useEffect(() => {
    try {
      const getUser = async () => {
        const { data } = await axios(url);
        setIsUser(data);
        setIsloading(false);
      };
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return <div>{isUser.login}</div>;
};

export default MultipleReturns;
