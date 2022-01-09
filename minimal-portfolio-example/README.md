# minimal-portfolio-example
- Example project that uses minimal portfolio theme (consumer project)

## How to run this project locally
- Install `Yarn` and `Gatsby` as global tools.
  ```sh
  npm install -g yarn
  npm install -g gatsby-cli
  ```
- Optionally, fork the repository.
- Clone the repository to your local machine.
- CD to the root of the project folder where we have yarn workspaces file (config.json).
- Install all NPM packages:
  ```sh
  yarn
  ```
- Run the project with automatic enable hot-reload:
  ```sh
  yarn workspace minimal-portfolio-example start
  ```
- Open a browser and navigate to http://localhost:8000.

## Configuration
- Set configuration by editing the export object in `minimal-portfolio-example/SiteConfig.js`:
  ```js
  module.exports = {
    siteTitle: "Gatsby Advanced Starter", // Site title.
    siteTitleShort: "GA Starter", // Short site title for home screen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "GatsbyJS Advanced Starter", // Alternative site title for SEO.
    siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://gatsby-advanced-starter-demo.netlify.com", // Domain of your website without pathPrefix.
    pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
    siteDescription: "A GatsbyJS starter with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    siteRssTitle: "Gatsby Advanced Starter RSS feed", // Title of the RSS feed
    siteFBAppID: "1825356251115265", // FB Application ID for using app insights
    googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
    disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY", // Date format for display.
    postsPerPage: 4, // Amount of posts displayed per listing page. Set to zero to disable paging. See the "Pagination" section.
    userName: "Advanced User", // Username to display in the author segment.
    userEmail: "AdvancedUser@example.com", // Email used for RSS feed's author segment
    userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "North Pole, Earth", // User location to display in the author segment.
    userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
    userDescription:
      "", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "GitHub",
        url: "https://github.com/Vagr9K/gatsby-advanced-starter",
        iconClassName: "fa fa-github",
      },
      {
        label: "Twitter",
        url: "https://twitter.com/Vagr9K",
        iconClassName: "fa fa-twitter",
      },
      {
        label: "Email",
        url: "mailto:vagr9k@gmail.com",
        iconClassName: "fa fa-envelope",
      },
    ],
    copyright: "Copyright © 2019. Advanced User", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#c62828", // Used for setting manifest and progress theme colors.
    backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  };

## Pagination

By default the starter will show 4 posts per page. The landing page is the first page located on `/` (controlled by the `Listing` component).

You can control the amount of posts via `SiteConfig` by setting the `postsPerPage: ${NUMBER}`.

NOTE: You can also disable the pagination by setting the `postsPerPage: 0`. In this case the landing page will be controlled by the `Landing` component.


## TODO
- [ ] Migrate to TS
[ ] Set up JS Lint to remove unused variables 
[ ] Fix error when clicking tag


space to select
# https://www.npmjs.com/settings/dotnetthailand/packages
