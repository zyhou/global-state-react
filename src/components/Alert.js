import React, { useContext } from "react";
import { AlertContext } from "../Provider";

const Alert = () => {
  const { alert, resetAlert } = useContext(AlertContext);

  const onClick = () => {
    resetAlert();
  };

  return (
    alert.active && (
      <div className="alert">
        <span className="closebtn" onClick={onClick}>
          &times;
        </span>
        {alert.text}
      </div>
    )
  );
};

export default Alert;
