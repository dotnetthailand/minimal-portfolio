import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "../themes/rootTheme.css";
import styled from 'styled-components';

export default function MainLayout({ children }: any) {

  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Container >
        {children}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0 20px;
`;