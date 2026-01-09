/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

import React from 'react';
import { GlobalProvider } from './src/context/globalContext';

export const wrapRootElement = ({ element }) => {
	return <GlobalProvider>{element}</GlobalProvider>;
};

import './src/styles/global.css';
