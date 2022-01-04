// https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/#composing-custom-usestaticquery-hooks
import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteTitle
            siteUrl
            headlines
          }
        }
      }
    `
  )
  return site.siteMetadata
}