import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import "../themes/rootTheme.css";
import styled from 'styled-components';
import ConfigContext from "../context/ConfigContext";

export default function MainLayout({ children }: any) {

  const { siteDescription } = useContext(ConfigContext);

  return (
    <>
      <Helmet>
        <meta name="description" content={siteDescription} />
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