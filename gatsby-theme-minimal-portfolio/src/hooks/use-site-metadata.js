// https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/#composing-custom-usestaticquery-hooks
import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteTitle
            pathPrefix
            siteUrl
            headlines
            siteDescription
            siteLogo
            dateFormat
            dateFromFormat
            siteTitleAlt
            siteFBAppID
            
            profile {
              name
              email
              location
              github
              twitter
              avatar
              description
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}