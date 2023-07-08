import React from "react";

const Dashboard = ({ user }) => {
  return <h1>Hello, {user?.name}</h1>;
};

export default Dashboard;
