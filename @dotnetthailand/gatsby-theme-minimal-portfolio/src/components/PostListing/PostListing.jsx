import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { parseISO, format } from "date-fns";
import ConfigContext from "../../context/ConfigContext";

export default function PostListing({ postEdges }) {
  const config = useContext(ConfigContext);

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
      path: postEdge.node.fields.slug,
      activity: postEdge.node.frontmatter.activity,
      type: postEdge.node.frontmatter.type,
      link: postEdge.node.frontmatter.link,

      primaryArea: postEdge.node.frontmatter.primaryArea,
      additionalAreas: postEdge.node.frontmatter.additionalAreas ?? [],
      date: postEdge.node.fields.date,
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
            <Title>Activity/Title</Title>
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
              <Link to={post.path} key={post.activity} >
                <FlexContainer>
                  <div className="column">
                    <PostDate >
                      {format(parseISO(post.date), config.dateFormat)}
                    </PostDate>
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
                    {post.additionalAreas.map(a => <span>{a} </span>)}
                  </div>
                </FlexContainer>
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
  word-break: break-word;
`;
