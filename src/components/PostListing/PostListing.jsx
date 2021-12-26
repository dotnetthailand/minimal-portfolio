import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
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
    // const link = postEdge.node.frontmatter.link ;
    postList.push({
      path: postEdge.node.frontmatter.link ? postEdge.node.frontmatter.link: postEdge.node.fields.slug,
      title: postEdge.node.frontmatter.title,
      activity: postEdge.node.frontmatter.activity,
      type: postEdge.node.frontmatter.type,
      link: postEdge.node.frontmatter.link,
      primaryArea: postEdge.node.frontmatter.primaryArea,
      additionalArea:  postEdge.node.frontmatter.additionalArea,
      date: postEdge.node.fields.date?postEdge.node.fields.date: "2021-01-01",
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });


  return (
    <TableContainer>
      <div className="table">
       <FlexContainer>
          <div className="column">
            <Title>Date</Title> 
          </div>
          <div className="column">
            <Title>Title</Title>
          </div>
          <div className="column">
            <Title>Activity</Title>
          </div>
          <div className="column">
            <Title>Type</Title>
          </div>
          <div className="column">
            <Title>Primary Contribution Area</Title>
          </div>
          <div className="column">
            <Title>Additional Contribution Area</Title>
          </div>
        </FlexContainer>
      {
        /* Your post list here. */
        postList.map((post) => (
          <PostItem>
            <Link to={post.path} key={post.title} >
              {/* <a className="post-item-link"> */}
              <FlexContainer>
                <div className="column">
                  <PostDate >
                    {format(parseISO(post.date), "yyyy MMM, d")}
                  </PostDate>
                </div>
                <div className="column">
                  {post.title} 
                </div>
                
                <div className="column">
                  {post.activity} 
                </div>
                <div className="column">
                  {post.type} 
                </div>
                <div className="column">
                  {post.primaryArea} 
                </div>
                <div className="column">
                  {post.additionalArea} 
                </div>
              </FlexContainer>
              {/* </a> */}
            </Link>
          </PostItem>
        ))
      }
      </div>
    </TableContainer>
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

const TableContainer = styled.div`
  .table .column{
    // 6 Columns table
    width: 16.6% 
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

// const div = styled.div`
//   padding-left: 10px;
//   width: 100%;

//   ${breakpoint('tablet')`
//     width: ${({ width }) => (width ? width : 0)};
//   `}
// `;

export default PostListing;
