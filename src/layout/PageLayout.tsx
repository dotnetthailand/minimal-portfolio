import React, { useEffect } from "react";
import styled from 'styled-components';
import Layout from ".";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import CenterContainer from "../components/CenterContainer";

import GitHubCalendar from 'github-calendar';
import "github-calendar/dist/github-calendar-responsive.css"

const PageLayout = (props: any) => {
    const { children } = props;

    useEffect(()=> {
        GitHubCalendar(".calendar", "mildronize" );
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
                    <div>
                    <div className="calendar">
                        Loading the data just for you.
                    </div>
                    </div>
                </FlexContainer>
            </div>
            <Footer config={config} />
        </Layout>
    );
};


export const FlexContainer = styled.div`
  display: flex; /* or inline-flex */
`;

export const MainContainer = styled.div`
  width: 60%;
`;

export default PageLayout;