import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { graphql, Link as GatsbyLink } from "gatsby";
import Layout from "../layout";
import PageLayout from "../layout/PageLayout";
import PostListing from "../components/PostListing/PostListing";
import styled from "styled-components"
import Hero from "../components/Hero";
import { onMobile } from "../themes/responsive";
import ConfigContext from "../context/ConfigContext";

function PostListingPagination({ pageContext, data }) {
  const config = useContext(ConfigContext);
  function renderPaging() {
    const { currentPageNum, pageCount } = pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <PagingContainer>
        {!isFirstPage && <Link href={prevPage}>Previous</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              href={pageNum === 1 ? "/" : `/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link href={nextPage}>Next</Link>}
      </PagingContainer>
    );
  }

  const postEdges = data.allMarkdownRemark.edges;

  return (
    <PageLayout>
      <Header>Recent Activities</Header>
      <div className="listing-container">
        <div className="posts-container">
          <Helmet title={config.siteTitle} />
          <PostListing postEdges={postEdges} />
        </div>
        {renderPaging()}
      </div>
    </PageLayout>
  );
}

// It should use GatsbyLink due to better performance
const Link = styled.a`
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  :hover{
    cursor: pointer;
    background: var(--colors-hover-0);
  }
  i{
    color: var(--color-default);
    font-size: 1.2em;
  }
`;

const Header = styled.h2`
  ${onMobile} {
    margin-top: 80px;
    font-size: 1.2rem;
  }
`

const PagingContainer = styled.div`
  margin-top: 30px;
`;

export default PostListingPagination;

// Can't fix  warning The enum value "MarkdownRemarkFieldsEnum.fields___date" is deprecated. 
// Sorting on fields that need arguments to resolve is deprecated.
// GitHub issue https://github.com/gatsbyjs/gatsby/issues/31523

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            type
            link
            primaryArea
            additionalAreas
          }
        }
      }
    }
  }
`;
