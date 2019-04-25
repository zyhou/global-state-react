import React, { createContext, useState } from "react";

export const AlertContext = createContext({});

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    text: "",
    type: "success",
    active: false
  });

  const resetAlert = () => {
    setAlert({
      text: "",
      type: "success",
      active: false
    });
  };

  const sendAlert = text => {
    setAlert({
      text,
      type: "success",
      active: true
    });
  };

  const sendError = text => {
    setAlert({
      text,
      type: "error",
      active: true
    });
  };

  return (
    <AlertContext.Provider value={{ alert, resetAlert, sendAlert, sendError }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider };
