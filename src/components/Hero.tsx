import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { onMobile } from "../themes/responsive";
import UserLinks from "../components/UserLinks/UserLinks";
import "../themes/font-awesome-all-5.2.0.css";
import config from "../../data/SiteConfig";

console.log(onMobile);

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
          <Button href="/">Recent Activites</Button>
          <Button href="/projects">Projects</Button>
          <Button href="/profile">Profile</Button>
          <Button href="/contact">Contact</Button>
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
    font-size: 3.5rem;
   

    ${onMobile} {
      font-size: 2rem;
    }

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