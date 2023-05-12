import React, { useEffect } from "react";

const Alert = ({ msg, type, showAlert }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      showAlert();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);
  
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
