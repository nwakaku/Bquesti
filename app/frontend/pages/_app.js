import * as React from "react";
import NextHead from "next/head";
import "../styles/globals.css";
import DynamicWagmi from "../dynamicWagmi/index.tsx";

import { useIsMounted } from "../hooks";

const App = ({ Component, pageProps }) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <DynamicWagmi>
      <Component {...pageProps} />
    </DynamicWagmi>
  );
};

export default App;
