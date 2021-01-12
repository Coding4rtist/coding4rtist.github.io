import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@components/Layout'
import SEO from '@components/seo'
// import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'  

const NotFoundPage = ({headerImage, location}) => (
  <Layout headerImage={headerImage} location={location}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)


NotFoundPage.propTypes = {
  headerImage: PropTypes.object,
}

export default () => (
  <StaticQuery
    query={graphql`
    query {
      file(relativePath: { eq: "banner3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    `}
    render={data => (
      <NotFoundPage
        headerImage={data.file}
        
      />
    )}
  />
)