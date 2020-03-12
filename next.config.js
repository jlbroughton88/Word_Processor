const withSass = require("@zeit/next-sass")

module.exports = withSass({
    target: "serverless",
    externals: [ 'react', 'react-dom' ],
    env: {
        DOMAIN: process.env.DOMAIN,
        CLIENT_ID: process.env.CLIENT_ID,
        REDIRECT_URI: process.env.REDIRECT_URI, 
        WP_HOST: process.env.WP_HOST, 
        WP_USERNAME: process.env.WP_USERNAME, 
        WP_PASSWORD: process.env.WP_PASSWORD, 
        WP_DATABASE: process.env.WP_DATABASE
    },
    exportPathMap: function() {
        return {
            "/": { page: "/" },
            "/profile": { page: "/" }
        }
    },
    webpack(config, options) {
        return config;
    }
});