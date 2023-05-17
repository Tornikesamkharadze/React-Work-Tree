import React, { useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="hello world">{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppContext };
