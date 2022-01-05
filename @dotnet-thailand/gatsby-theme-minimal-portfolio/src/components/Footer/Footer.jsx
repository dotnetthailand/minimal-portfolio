import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterContainer = styled.div`
    margin-top: 8rem;
    margin-bottom: 4rem;
    font-size: 0.9rem;
`;

export default function Footer({ config }) {
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <FooterContainer>
      <center>
        <div className="footer-copyright">{copyright}</div>
      </center>
    </FooterContainer>
  );
}