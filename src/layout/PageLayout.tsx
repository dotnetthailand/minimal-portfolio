import React, { useEffect } from "react";
import styled from 'styled-components';
import Layout from ".";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import CenterContainer from "../components/CenterContainer";
import ListGithubProjects from "../components/ListGithubProjects";
import GitHubCalendar from 'github-calendar';
import "../themes/github-calendar-responsive.css";

const PageLayout = (props: any) => {
    const { children } = props;

    useEffect(() => {
        GitHubCalendar(".calendar", config.GitHub.username, { responsive: true });
    }, []);

    return (
        <Layout>
            <TopBar />
            <Hero />
            <div>
                <FlexContainer>
                    <MainContainer>
                        {children}
                    </MainContainer>
                    <GitHubCalendarContainer>
                      <div className="calendar" />
                      <Title>Recent Contribution Open Source Projects</Title>
                      <ListGithubProjects />
                      <MoreButton href={`https://github.com/${config.GitHub.username}?tab=repositories`} target="_blank">More projects</MoreButton>
                    </GitHubCalendarContainer>
                </FlexContainer>
            </div>
            <Footer config={config} />
        </Layout>
    );
};


export const FlexContainer = styled.div`
  display: flex; /* or inline-flex */
  justify-content: space-around;
`;

export const Title = styled.h4`
  font-size: 1.2rem;
`;

export const MoreButton= styled.a`
  padding-top: 20px;
  font-size: 0.9rem;
  text-decoration: underline;
  color: var(--colors-text-3);

  &:visited{
    color: var(--colors-text-3);
  }
`;


export const GitHubCalendarContainer = styled.div`

  .calendar{
    width: 500px;
    .graph-before-activity-overview{
    padding: 13px;
    }
    .contrib-number{
      font-size: 18px;
      color: inherit;
    }
    .float-right.color-fg-muted{
      font-size: 10px; 
      padding-bottom: 10px;
    }
  }

`;


export const MainContainer = styled.div`
  width: 50%;
`;

export default PageLayout;