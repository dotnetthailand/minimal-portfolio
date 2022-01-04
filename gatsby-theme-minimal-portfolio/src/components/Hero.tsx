import React from "react";
import styled from 'styled-components';
import { onMobile } from "../themes/responsive";
import config from "../../data/SiteConfig";

const { headlines } = config;
const headlinesWithDot = headlines.slice(0, headlines.length - 1);

const Hero = (props: any) => {
  const { ...restProps } = props;

  return (
    <Container {...restProps}>
      <div className="header-main">
        <h1>{config.siteTitle}</h1>

        {headlinesWithDot.map(headline => ( 
          <>
            <span className="attr">{headline}</span>
            <span className="dot">•</span>
          </>
        ))}
        <span className="attr">{headlines.slice(-1)}</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 100px;

  h1{
    margin-bottom: 0;
    font-family: var(--font-family-inter);
    font-size: 3.5rem;
   

    ${onMobile} {
      font-size: 2rem;
    }

  }

  .attr {
      font-family: 'Anonymous Pro', monospace;
      background-color: var(--header-bg-highlight);
      font-size:1.2rem;
      margin: 0 .5rem 0 .5rem;
    }

    .attr:hover {
      background-color: transparent;
  }

  .header-main {
    padding: 0;
    text-align: center;
    
  }
`;

export default Hero;