import React from "react";
import styled from 'styled-components';
import Layout from ".";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import CenterContainer from "../components/CenterContainer";

const PageLayout = (props: any) => {
    const { children } = props;

    return (
        <Layout>
            <TopBar />
            <Hero />
            <CenterContainer>
                <FlexContainer>
                    <MainContainer>
                    {children}
                    </MainContainer>
                    <div>
                        side bar
                    </div>
                </FlexContainer>
            </CenterContainer>
            <Footer config={config} />
        </Layout>
    );
};


export const FlexContainer = styled.div`
  display: flex; /* or inline-flex */
`;

export const MainContainer = styled.div`
  width: 70%;
`;

export default PageLayout;