import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../layout/PageLayout';

import styled from 'styled-components';
import ConfigContext from '../context/ConfigContext';
import { graphql, useStaticQuery } from 'gatsby';

const ProjectItem = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid var(--colors-border);
  border-radius: 7px;
  font-size: 1.2rem;
`;

type Project = {
  link: string;
  name: string;
  tags: string[];
}

const TagContainer = styled.div`
  margin-top: -5px;
`;

const Tag = styled.span`
  color: var(--colors-text-3);
  font-size: 0.9rem;
  margin-right: 20px;
`;

function ProjectPage() {
  const config = useContext(ConfigContext);

  const { allProjectsYaml: { nodes } } = useStaticQuery(
    graphql`
      query queryProjects {
        allProjectsYaml {
          nodes {
            name
            tags
            link
          }
        }
      }
    `
  );

  return (
    <Layout>
      <div className='container'>
        <Helmet title={`Projects | ${config.siteTitle}`} />
        <h2>Projects</h2>
        {nodes.map((project: Project) => (
          <ProjectItem><a href={project.link} target='_blank'>{project.name}</a>
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

export default ProjectPage;
