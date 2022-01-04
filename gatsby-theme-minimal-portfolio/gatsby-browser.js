import React from 'react'
import { ConfigProvider } from './src/context/ConfigContext';
export const wrapRootElement = ({ element }) => (
  <ConfigProvider>{element}</ConfigProvider>
);