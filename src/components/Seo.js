/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ description, title, children }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;
	const authorName = site.siteMetadata?.author.name || ``;
	const siteUrl = site.siteMetaData?.siteUrl;
	const ogImage = null;

	return (
		<>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width" />
			{/* <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title> */}
			<title>{defaultTitle || title}</title>
			<meta name="description" content={metaDescription} />
			{/* Basic OG tags for sharing your website's content on platforms like Facebook and LinkedIn  */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={siteUrl} />
			<meta property="og:image" content={ogImage} />

			{/* Basic Twitter Card tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={authorName} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={metaDescription} />
			{children}
		</>
	);
}

export default Seo;
