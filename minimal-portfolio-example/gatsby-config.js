const config = require('./SiteConfig');

module.exports = {
  plugins: [
    {
      resolve: "@dotnet-thailand/gatsby-theme-minimal-portfolio",
      options: {
        config: config
      },
    },
  ],
}