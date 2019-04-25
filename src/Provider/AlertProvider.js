import React, { createContext, useState } from "react";

export const AlertContext = createContext({});

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    text: "",
    active: false
  });

  const sendAlert = text => {
    setAlert({
      text,
      active: true
    });
  };

  const resetAlert = () => {
    setAlert({
      text: "",
      active: false
    });
  };

  return (
    <AlertContext.Provider value={{ alert, sendAlert, resetAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider };
