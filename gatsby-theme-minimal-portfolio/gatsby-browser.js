import React from 'react'
import { ConfigProvider } from './src/context/ConfigContext';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';

export const wrapRootElement = ({ element }) => (
  <ConfigProvider>{element}</ConfigProvider>
);

export const onClientEntry = () => {
  console.log("We've started!")
  library.add(fab, fas);
}
