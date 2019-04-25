import React from "react";

import { AlertProvider } from "./AlertProvider";
import { LanguageProvider } from "./LanguageProvider";
import { RestaurantProvider } from "./RestaurantProvider";

const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );

const ContextProvider = ({ children }) => (
  <ProviderComposer
    contexts={[<AlertProvider />, <LanguageProvider />, <RestaurantProvider />]}
  >
    {children}
  </ProviderComposer>
);

export { ContextProvider };
