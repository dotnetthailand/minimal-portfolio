// https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/#composing-custom-usestaticquery-hooks
import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteTitle
            siteDescription
            pathPrefix
            siteUrl
            headlines
            siteDescription
            siteLogo
            dateFormat
            dateFromFormat
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

            userLinks {
              label
              url
              iconClassName
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
