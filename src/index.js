import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from "./Provider";

import SelectList from "./components/SelectList";

import "./styles.css";

const App = () => {
  return (
    <ContextProvider>
      <div className="app">
        I'm looking for a
        <SelectList
          items={["chinese", "italian", "french", "german"]}
          value="chinese"
        />
        restaurant in
        <SelectList
          items={["Berlin", "New York", "Paris", "London"]}
          value="Berlin"
        />
        <button type="submit">Find a Restaurant</button>
      </div>
    </ContextProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
