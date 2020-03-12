import React from "react";
// import App from "next/app";
import EnvProvider from "./comps/contexts/envContext";
// import Router from "next/router";

import { Auth0Provider } from "use-auth0-hooks";

const App = props => {
  const { Component, pageProps } = props;

  return (
    <Auth0Provider
      domain={process.env.DOMAIN}
      clientId={process.env.CLIENT_ID}
      redirectUri={process.env.REDIRECT_URI}
    >
        <EnvProvider>
        <Component {...pageProps} />
        </EnvProvider>
    </Auth0Provider>
  );
};

export default App;
