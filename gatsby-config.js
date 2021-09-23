const dotenv = require('dotenv');

// if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
// }

module.exports = {
  siteMetadata: {
    siteUrl: "https://coding4rtist.github.io",
    title: "Coding4rtist Portfolio",
    description: `I'm Coding4rtist, a Developer and 3D Artist`,
    author: `@coding4rtist`,
    fullName: `CodingArtist`,
    fullRole: `3D Artist | Developer`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACEID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESSTOKEN}`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,

  ],
};
