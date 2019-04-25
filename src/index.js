import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./Provider";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ContextProvider>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </ContextProvider>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
