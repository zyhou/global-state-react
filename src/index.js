import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from "./Provider";

import SearchRestaurant from "./components/SearchRestaurant";
import Alert from "./components/Alert";

import "./styles.css";

const App = () => {
  return (
    <ContextProvider>
      <div className="app">
        <SearchRestaurant />
        <Alert />
      </div>
    </ContextProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
