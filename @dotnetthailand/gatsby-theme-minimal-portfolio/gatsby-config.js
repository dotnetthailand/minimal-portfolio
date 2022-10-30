const urljoin = require("url-join");

// Make sure that pathPrefix is not empty
const validatedPathPrefix = (config) => config.pathPrefix === "" ? "/" : config.pathPrefix;

module.exports = ({ config }) => {
  // https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#sitemetadata
  const siteMetadata = {
    ...config,
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      title: config.siteTitle,
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      image_url: `${urljoin(config.siteUrl, config.pathPrefix)}/logos/logo-512.png`,
      description: config.siteDescription,
      copyright: config.copyright,
    },
  };

  return {
    pathPrefix: validatedPathPrefix(config),
    siteMetadata: siteMetadata,
    plugins: [
      "gatsby-plugin-typescript",
      "gatsby-plugin-styled-components",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-lodash",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "assets",
          path: `${__dirname}/static/`,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts",
          path: config.contentPath,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "data",
          path: config.dataPath,
        },
      },
      {
        resolve: `gatsby-transformer-yaml`,
      },
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-relative-images`,
            },
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 700,
              },
            },
            {
              resolve: "gatsby-remark-responsive-iframe",
            },
            "gatsby-remark-copy-linked-files",
            "gatsby-remark-autolink-headers",
            "gatsby-remark-prismjs",
            // {
            //   resolve: require.resolve('./plugins/gatsby-remark-purple-headers/index.js')
            // }
          ],
        },
      },
      {
        resolve: "gatsby-plugin-google-analytics",
        options: {
          trackingId: config.googleAnalyticsID,
        },
      },
      {
        resolve: "gatsby-plugin-nprogress",
        options: {
          color: config.themeColor,
        },
      },
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-catch-links",
      "gatsby-plugin-twitter",
      "gatsby-plugin-sitemap",
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: config.siteTitle,
          short_name: config.siteTitleShort,
          description: config.siteDescription,
          start_url: validatedPathPrefix(config),
          background_color: config.backgroundColor,
          theme_color: config.themeColor,
          display: "minimal-ui",
          icons: [
            {
              src: "/logos/logo-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/logos/logo-512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      },
      "gatsby-plugin-offline",
    ], // end plugins
  };

};
