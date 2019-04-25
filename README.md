# Global state with React


[![Edit global-state-in-react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/zyhou/global-state-react/tree/master/?fontsize=14)

```js
const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );

const ContextProvider = ({ children }) => (
  <ProviderComposer contexts={[<AlertProvider />, <RestaurantProvider />]}>
    {children}
  </ProviderComposer>
);
```
[Look in ContextProvider.js](https://github.com/zyhou/global-state-react/blob/master/src/Provider/ContextProvider.js)
