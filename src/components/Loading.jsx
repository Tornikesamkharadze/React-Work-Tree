import React, { useEffect, useState } from "react";

const Loading = () => {
  const [x, setX] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setX(x + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [x]);
  return (
    <div>
      Loading...
      <h1>{x}</h1>
    </div>
  );
};

export default Loading;
