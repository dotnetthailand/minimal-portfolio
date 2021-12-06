import React, { useEffect } from "react";
import styled from 'styled-components';
import Layout from ".";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import CenterContainer from "../components/CenterContainer";

import GitHubCalendar from 'github-calendar';
import "../themes/github-calendar-responsive.css";

const PageLayout = (props: any) => {
    const { children } = props;

    useEffect(() => {
        GitHubCalendar(".calendar", "mildronize", { responsive: true });
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

export const GitHubCalendarContainer = styled.div`

  .calendar{
    width: 600px;
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
  /* width: 100%; */
`;

export default PageLayout;