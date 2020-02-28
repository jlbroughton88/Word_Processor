import App from "next/app";
// import Router from "next/router";

import { Auth0Provider } from "use-auth0-hooks";

export default class Root extends App {
    render() {

        const { Component, pageProps } = this.props;

        return (
            <Auth0Provider
                domain={process.env.DOMAIN}
                clientId={process.env.CLIENT_ID}
                redirectUri={process.env.REDIRECT_URI}
            >
                <Component {...pageProps}/>
            </Auth0Provider>
        )
    }
}