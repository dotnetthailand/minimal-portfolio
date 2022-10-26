import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
import ToggleDarkMode from './ToggleDarkModeWrapper';
import CenterContainer from "../components/CenterContainer";
import logo from './logo.png';

const TopBar = (props: any) => {
  const { ...restProps } = props;

  return (
    <div {...restProps}>
      <Wrapper>
        <FlexContainer>
          <FlexItem>

            <Button href="/">Recent Activities</Button>
            <Button href="/projects">Projects</Button>
            <Button href="/profile">Profile</Button>
            <Button href="/contact">Contact</Button>

          </FlexItem>
          <FlexItem >
            <ToggleOffset>
              <ToggleDarkMode />
            </ToggleOffset>
          </FlexItem>
        </FlexContainer>
      </Wrapper>
    </div>
  );
};

const ToggleOffset = styled.div`
margin-top:4px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexItem = styled.div``;

const  Wrapper = styled.div`
  margin-top: 15px;
`;

const Button = styled.a`
  
  font-size: 0.85rem;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  color: var(--colors-text-2);
  :visited {
    color: var(--colors-text-2);
  }
  :hover{
    background: var(--colors-hover-0);
    color: var(--colors-text-0);
  }
  i{
    color: var(--colors-text-0);
    font-size: 1.2em;
  }
`;

export default TopBar;
