

yarn workspace minimal-portfolio-example add gatsby@^3.4.0 react@^17.0.1 react-dom@^17.0.1 @dotnet-thailand/gatsby-theme-minimal-portfolio@*

yarn workspaces info
```json
{
  "@dotnet-thailand/gatsby-theme-minimal-portfolio": {
    "location": "gatsby-theme-minimal-portfolio",
    "workspaceDependencies": [],
    "mismatchedWorkspaceDependencies": []
  },
  "minimal-portfolio-example": {
    "location": "minimal-portfolio-example",
    "workspaceDependencies": [
      "@dotnet-thailand/gatsby-theme-minimal-portfolio"
    ],
    "mismatchedWorkspaceDependencies": []
  }
}
```

yarn workspace minimal-portfolio-example start


https://www.gatsbyjs.com/docs/custom-html/

> Customizing html.js is a workaround solution for when the use of the appropriate APIs is not available in gatsby-ssr.js. Consider using onRenderBody or onPreRenderHTML instead of the method above. As a further consideration, customizing html.js is not supported within a Gatsby Theme. Use the API methods mentioned instead.

