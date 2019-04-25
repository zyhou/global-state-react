import React from "react";

import { AlertProvider } from "./AlertProvider";
import { LoginProvider } from "./LoginProvider";

const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );

const ContextProvider = children => (
  <ProviderComposer contexts={[<AlertProvider />, <LoginProvider />]}>
    {children}
  </ProviderComposer>
);

export { ContextProvider };
