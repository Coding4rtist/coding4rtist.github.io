/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import React from 'react';
import { GlobalProvider } from './src/context/globalContext';

import './src/styles/global.css';
import './src/styles/embla.css';

export const wrapRootElement = ({ element }) => {
	return <GlobalProvider>{element}</GlobalProvider>;
};
