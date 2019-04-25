import React from "react";

import { AlertProvider } from "./AlertProvider";
import { LanguageProvider } from "./LanguageProvider";

const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );

const ContextProvider = ({ children }) => (
  <ProviderComposer contexts={[<AlertProvider />, <LanguageProvider />]}>
    {children}
  </ProviderComposer>
);

export { ContextProvider };
