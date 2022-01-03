import React from "react";
import { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../layout/PageLayout";
import config from "../../data/SiteConfig";
import projects from "../../data/Projects";
import styled from 'styled-components';

function AboutPage(props: PageProps) {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <h2>Projects</h2>
        {projects.map((project: any) => (
          <ProjectItem><a href={project.link} target="_blank">{project.name}</a>
            <TagContainer>
              {project.tags.map((tag: any) => (
                <Tag>#{tag} </Tag>
              ))}
            </TagContainer>
          </ProjectItem>
        ))}
      </div>
    </Layout>
  );
}
const ProjectItem = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid var(--colors-border);
  border-radius: 7px;
  font-size: 1.2rem;
`;


const TagContainer = styled.div`
  margin-top: -5px;
  /* margin-bottom:20px; */
`;

const Tag = styled.span`
  color: var(--colors-text-3);
  font-size: 0.9rem;
  margin-right: 20px;
`;

export default AboutPage;
