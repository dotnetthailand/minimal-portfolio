import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import Layout from "../layout/PageLayout";
import UserLinks from "../components/UserLinks/UserLinks";
import { onMobile } from "../themes/responsive";
import ConfigContext from "../context/ConfigContext";

export default function ProfilePage() {
  const config = useContext(ConfigContext)
  return (
    <Layout>
      <div className="container">
        <Helmet title={`Profile | ${config.siteTitle}`} />
        <h2>Profile</h2>
        <FlexContainer>
          <Column width="350px" style={{ marginRight: '30px' }}>
            <Avatar src={config.profile.avatar} />
            <Bio>
              <p>{config.profile.name}</p>
              <p>{config.profile.email}</p>
              <p>{config.profile.location}</p>
            </Bio>
          </Column>
          <Column>
            <p>{config.profile.description}</p>
            <UserLinks config={config} size="30px" spacing="7px" />
          </Column>

        </FlexContainer>
      </div>
    </Layout>
  );
}

const FlexContainer = styled.div`
  display: flex;

  ${onMobile} {
    flex-wrap: wrap;
  }

`;

const Bio = styled.div`
  p {
    margin: 5px 0px;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100%;
  padding: 20px;
`;

interface IColumnProp {
  width?: string
}

const Column = styled.div<IColumnProp>` 
  width: ${({ width }) => (width ? width : '100%')}; 
  ${onMobile} {
    width: 100%;
  };
`;
