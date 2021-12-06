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
    const result = await axios.get(`https://api.github.com/users/${config.GitHub.username}/repos?sort=updated&per_page=3`);
    console.log(result.data);
    setRepos(result.data);
  }

  return (
    <>
      {repos.map((repo:any) => (
          <RepoItem><a href={repo.html_url} target="_blank">{repo.name}</a></RepoItem>
      ))}
    </>
  );
};

const RepoItem = styled.div`
  padding-bottom: 15px;
  font-size: 1rem;
`;

export default ListGithubProjects;