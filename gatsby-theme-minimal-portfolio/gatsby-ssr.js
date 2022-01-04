import React from 'react';
import { themeOper } from './src/utils/IIFE';
import { ConfigProvider } from './src/context/ConfigContext';

// https://stackoverflow.com/a/62187429/1872200
export const onRenderBody = ({ setPreBodyComponents }) => {
  // Takes an array of components as its first argument which are added to the preBodyComponents array which is passed to the html.js component.
  setPreBodyComponents([
    <script key='themeOper' dangerouslySetInnerHTML={{ __html: `(${themeOper.toString()})();`, }} />
  ]);
};

export const wrapRootElement = ({ element }) => (
  <ConfigProvider>{element}</ConfigProvider>
);
