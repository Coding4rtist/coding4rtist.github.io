import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import SectionTitle from '@components/SectionTitle'
import { useStaticQuery, graphql } from "gatsby"
import {ArtGallery} from '@components/Gallery'
// import styles from './art.module.scss'
// import Artworks from '../../data/artworks'



const query= graphql`
query {
  allJavascriptFrontmatter{
    edges {
      node {
        frontmatter {
          staticData {
            artworks {
              id
              title
              src
              isVideo
              isShown
              description
              createdAt
              thumbnail {
                childImageSharp {
                  fluid (maxHeight: 500, quality: 90){
                    aspectRatio
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

/* eslint-disable jsx-a11y/accessible-emoji */
const ArtPage = () => {
  const result = useStaticQuery(query);
  const artworks = result.allJavascriptFrontmatter.edges[0].node.frontmatter.staticData.artworks;

  return (
    <Layout>
      <SEO title="Art" />
      <SectionTitle title="My Artworks" subtitle="Where the world of fantasy meets reality" id="main-content"/>

      <ArtGallery artworks={artworks}>
        {/* <Img fluid={file.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{position: 'relative', top: '0', width: '300px', height:'300px'}}  draggable={false}/> */}
      </ArtGallery>

    </Layout>
  )
}
  

/* eslint-enable jsx-a11y/accessible-emoji */

export default ArtPage
