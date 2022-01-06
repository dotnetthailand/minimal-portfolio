const config = require('./SiteConfig');

module.exports = {
  plugins: [
    {
      resolve: "@dotnetthailand/gatsby-theme-minimal-portfolio",
      options: {
        config: config
      },
    },
  ],
}
