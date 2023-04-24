import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isUser, setIsUser] = useState("Cant find User");
  const [ticktock, setTickTock] = useState(1);

  useEffect(() => {
    if (ticktock > 60) setTickTock(1);
    const intervalId = setInterval(() => {
      setTickTock((prevState) => (prevState += 1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [ticktock]);

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

  return (
    <div>
      {isUser.login}
      <br />
      {ticktock}
    </div>
  );
};

export default MultipleReturns;
