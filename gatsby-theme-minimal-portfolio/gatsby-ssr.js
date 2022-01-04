const React = require('react');
const IIFE = require('./src/utils/IIFE');

// https://stackoverflow.com/a/62187429/1872200
exports.onRenderBody = ({ setPreBodyComponents }) => {
  // Takes an array of components as its first argument which are added to the preBodyComponents array which is passed to the html.js component.
  setPreBodyComponents([
    <script key='themeOper' dangerouslySetInnerHTML={{ __html: `(${IIFE.themeOper.toString()})();`, }} />
  ]);
};