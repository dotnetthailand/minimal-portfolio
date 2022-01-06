import React, { useContext } from "react"
import { Helmet } from "react-helmet";
import Layout from "../layout/PageLayout";

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} ${totalCount === 1 ? "activity" : "activities"} tagged with "${tag}"`
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Tags | ${tag}`} />
        <div>
          <h1>{tagHeader}</h1>
          <ul>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <li key={slug}>
                  <Link to={slug}>{title}</Link>
                </li>
              )
            })}
          </ul>
          {/* This links to a page that does not yet exist.  You'll come back to it!  */}
          <Link to="/tags">All tags</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
