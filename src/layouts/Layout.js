/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { isMobile } from 'react-device-detect';
import Cursor from '@components/Cursor';

// Components

const Layout = ({ children, location }) => {
	// const data = useStaticQuery(graphql`
	// 	query SiteTitleQuery {
	// 		site {
	// 			siteMetadata {
	// 				title
	// 			}
	// 		}
	// 	}
	// `);

	// Context
	// const globalStateContext = useGlobalStateContext();
	// const { currentTheme, cursorStyles } = globalStateContext;

	// const root = document.documentElement;
	// if (currentTheme === 'light') {
	// 	root.classList.remove('dark');
	// } else {
	// 	root.classList.add('dark');
	// }

	return (
		<>
			{children}
			{!isMobile && <Cursor />}
		</>
	);
};

export default Layout;
