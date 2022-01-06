import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../layout/PageLayout';
// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import { Link, graphql } from 'gatsby'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {

  return (
    <Layout>
      <div className='about-container'>
        <Helmet title={title} />
        <div>
          <h1>Tags</h1>
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
};

export default TagsPage

export const pageQuery = graphql`
  query {

    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
