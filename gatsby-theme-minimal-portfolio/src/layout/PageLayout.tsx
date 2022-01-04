import React from 'react';
import styled from 'styled-components';
import Layout from '.';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer/Footer';
import config from '../../data/SiteConfig';
import ListGithubProjects from '../components/ListGithubProjects';
import { onTablet, } from '../themes/responsive';
import GitHubCalendar from '../components/GithubCalendar';

const PageLayout = (props: any) => {
  const { children } = props;

  return (
    <Layout>
      <TopBar />
      <Hero />
      <div>
        <FlexContainer>
          <MainColumn>
            {children}
          </MainColumn>
          <div>
            <GitHubCalendar />
            <Title>Recent Contribution Open Source Projects</Title>
            <ListGithubProjects />
            <MoreButton href={`https://github.com/${config.profile.github}?tab=repositories`} target="_blank">More projects</MoreButton>
          </div>
        </FlexContainer>
      </div>
      <Footer config={config} />
    </Layout>
  );
};

export const MainColumn = styled.div`
  width: 50%;

  ${onTablet} {
    width: 100%;
  }
`;

export const FlexContainer = styled.div`
  display: flex; /* or inline-flex */
  justify-content: space-around;

  ${onTablet} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h4`
  font-size: 1.2rem;
`;

export const MoreButton = styled.a`
  padding-top: 20px;
  font-size: 0.9rem;
  text-decoration: underline;
  color: var(--colors-text-3);

  &:visited{
    color: var(--colors-text-3);
  }
`;

export default PageLayout;