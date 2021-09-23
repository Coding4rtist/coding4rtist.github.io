import React from 'react'
// import PropTypes from 'prop-types'
import Layout from '@components/Layout'
import SEO from '@components/seo'
// import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby'
import { /*GatsbyImage, */getImage } from "gatsby-plugin-image"

const query = graphql`
query {
  banner: file(relativePath: { eq: "banner3.jpg" }) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        placeholder: BLURRED
        formats: [AUTO, WEBP]
      )
    }
  }
}
`

const NotFoundPage = ({location}) => {
  const result = useStaticQuery(query);
  const headerImage = getImage(result.banner);

  return (
    // <Layout headerImage={headerImage} location={location}>
    <>
      <SEO title="404: Not found" />
      <section className="content-container">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
      </>
    // </Layout>
  )
}




// NotFoundPage.propTypes = {
//   headerImage: PropTypes.object,
// }

// export default () => (
//   <StaticQuery
//     query={graphql`
//     query {
//       file(relativePath: { eq: "banner3.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//     `}
//     render={data => (
//       <NotFoundPage
//         headerImage={data.file}
        
//       />
//     )}
//   />
// )

export default NotFoundPage;