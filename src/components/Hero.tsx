import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import UserLinks from "../components/UserLinks/UserLinks";
import "../themes/font-awesome-all-5.2.0.css";
import config from "../../data/SiteConfig";

const Hero = (props: any) => {
  const { ...restProps } = props;

  return (
    <Container {...restProps}>
      <div className="header-main">
        <h1>{config.siteTitle}</h1>

        <span className="attr">Web designer</span>
        <span className="dot">•</span>
        <span className="attr">Architect</span>
        <span className="dot">•</span>
        <span className="attr">Mechanic</span>
        <UserLinks config={config} labeled />
        <p>
          <Button href="http://bit.ly/mildthada-notion-cv" target="_blank">Recent Activites</Button>
          <Button href="https://github.com/mildronize" target="_blank">Recent Contribution</Button>
          <Button href="https://github.com/mildronize" target="_blank">Project</Button>
          <Button href="https://github.com/mildronize" target="_blank">About</Button>
          <Button href="https://github.com/mildronize" target="_blank">Contact</Button>
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  /* margin-top: 150px; */
  margin-bottom: 100px;

  h1{
    margin-bottom: 0;
    font-family: var(--font-family-inter);
    font-size: 1.6rem;

    ${breakpoint('tablet')`
      font-size: 3.5rem;
    `}

  }

  .attr {
      font-family: 'Anonymous Pro', monospace;
      background-color: #C3F8FF;
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

const Button = styled.a`
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  :hover{
    background: var(--colors-hover-0);
  }
  i{
    color: var(--color-default);
    font-size: 1.2em;
  }
`;

const Subtitle = styled.span`
  color: var(--colors-text-2);
`;

export default Hero;