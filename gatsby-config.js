const dotenv = require('dotenv')

// if (process.env.NODE_ENV !== 'production') {
dotenv.config()
// }

module.exports = {
	siteMetadata: {
		title: `Coding4rtist Portfolio`,
		author: {
			name: `CodingArtist`,
			summary: `a Developer and 3D Artist from Italy`,
		},
		description: `I'm Coding4rtist, a Developer and 3D Artist`,
		siteUrl: `https://coding4rtist.github.io`,
		social: {
			twitter: `coding4rtist`,
		},
		bannerTitle: `CodingArtist`,
		bannerSubtitle: `3D Artist | Developer`,
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/favicon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		// 'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-styled-components',
			options: {
				// displayName: false,
				// disableVendorPrefixes: true
			},
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: `${process.env.CONTENTFUL_SPACEID}`,
				accessToken: `${process.env.CONTENTFUL_ACCESSTOKEN}`,
			},
		},
		// {
		//   resolve: "gatsby-plugin-google-analytics",
		//   options: {
		//     trackingId: "",
		//   },
		// },
	],
}
