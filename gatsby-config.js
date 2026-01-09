/**
 * @type {import('gatsby').GatsbyConfig}
 */

const dotenv = require('dotenv');

// if (process.env.NODE_ENV !== 'production') {
dotenv.config();
// }

module.exports = {
	siteMetadata: {
		title: `Coding4rtist Portfolio`,
		author: `CodingArtist`,
		description: `I'm Coding4rtist, a Developer and 3D Artist`,
		siteUrl: `https://www.coding4rtist.github.io`,
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				accessToken: `${process.env.CONTENTFUL_ACCESSTOKEN}`,
				spaceId: `${process.env.CONTENTFUL_SPACEID}`,
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-postcss',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: `Carlo Acanfora`,
				short_name: `CA`,
				start_url: `/`,
				background_color: `#0a0a0a`,
				theme_color: `#eab308`,
				display: `standalone`,
				icon: 'src/images/favicon.png',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};
