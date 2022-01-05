// https://www.gatsbyjs.com/blog/2019-01-31-using-react-context-api-with-gatsby/
import React, { ReactNode } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import ISiteConfig from './ISiteConfig';

const ConfigContext = React.createContext<ISiteConfig>({} as ISiteConfig)

// https://stackoverflow.com/questions/53688899/typescript-and-react-children-type
type Props = {
  children: ReactNode;
}

export function ConfigProvider({ children }: Props) {
  const config = useSiteMetadata();

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );

}

export default ConfigContext;