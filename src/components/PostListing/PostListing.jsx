import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { parseISO, format } from "date-fns";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    const tags = [];
    if (postEdge.node.frontmatter.tags) {
      postEdge.node.frontmatter.tags.forEach((tag) => {
        tags.push(tag);
      });
    }
    postList.push({
      path: postEdge.node.fields.slug,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date?postEdge.node.fields.date: "2021-01-01",
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });


  return (
    <div>
       <FlexContainer>
          <FlexItem width="100px">
            <Title>Date</Title> 
          </FlexItem>
          <FlexItem >
            <Title>Title</Title>
          </FlexItem>
        </FlexContainer>
      {
        /* Your post list here. */
        postList.map((post) => (
          <PostItem>
            <Link to={post.path} key={post.title} >
              {/* <a className="post-item-link"> */}
              <FlexContainer>
                <FlexItem width="100px">
                  <PostDate >
                    {format(parseISO(post.date), "yyyy MMM, d")}
                  </PostDate>
                </FlexItem>
                <FlexItem >
                  {post.title} 

                </FlexItem>
              </FlexContainer>
              {/* </a> */}
            </Link>
          </PostItem>
        ))
      }
    </div>
  );
}

const PostDate = styled.time`
  color: var(--colors-text-3);
  font-weight: 400;
  font-size: 0.8rem;
`;

const Title = styled.h4`
  font-size: 0.9rem;
  padding: 20px 5px 0px 5px;
`;


const PostItem = styled.div`

  a, a:visited{
    display: inline-block;
    color: var(--text-heading);
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.5;
    text-decoration: none;
    width:100%;
    padding: 20px 5px 20px 5px;
    border-radius: 10px;
  }

  a:hover{
    background: var(--colors-hover-0);
  }

h4{
  margin:0;
  padding:0;
}
`;


const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${breakpoint('tablet')`
    flex-wrap: nowrap;
  `}
`;

const FlexItem = styled.div`
  min-width: 100%;

  ${breakpoint('tablet')`
    min-width: ${({ width }) => (width ? width : 0)};
  `}
`;

export default PostListing;
