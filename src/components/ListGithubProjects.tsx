import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import config from '../../data/SiteConfig';

const ListGithubProjects = (props: any) => {
  // const { children, ...restProps } = props;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    initData();
  }, []);
  
  const initData = async () => {
    const result = await axios.get(`https://api.github.com/users/${config.profile.github}/repos?sort=updated&per_page=3`);
    console.log(result.data);
    setRepos(result.data);
  }

  return (
    <Container>
      {repos.map((repo:any) => (
          <RepoItem><a href={repo.html_url} target="_blank">{repo.name}</a></RepoItem>
      ))}
    </Container>
  );
};

const RepoItem = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid var(--colors-border);
  margin-bottom: 10px;
  font-size: 1rem;
`;

const Container = styled.div`
  padding-bottom: 10px;
`

export default ListGithubProjects;