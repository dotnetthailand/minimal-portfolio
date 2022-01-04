import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from 'styled-components';
import "./UserLinks.css";

import '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

function UserLinks({ config, size = '32px', spacing = '5px' }) {
  function getLinkElements() {
    const { userLinks } = config;

    return userLinks.map((link) => (
      <SocialLink href={link.url} key={link.label}>
        <FontAwesomeIcon icon={link.iconClassName} />
      </SocialLink>
    ));
  }

  const { userLinks } = config;
  if (!userLinks) {
    return null;
  }
  return <Container size={size} spacing={spacing}>{getLinkElements()}</Container>;
}

export default UserLinks;

const Container = styled.div`
  font-size: ${props => props.size};
  a, a:visited{
    color: var(--colors-text-3);
  }
  a:hover{
    color: var(--colors-text-0);
  }

  i {
    margin-right: ${props => props.spacing};
  }
`;

const SocialLink = styled.a`
  margin: 0 7px;
`;