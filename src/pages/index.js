import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import { useStaticQuery, graphql } from 'gatsby'  
import SectionTitle from '../components/SectionTitle'
import {FeaturedGallery} from '@components/Gallery'
import styles from './index.module.scss'

import icon1 from '../images/magnifying-glass.svg'
import icon2 from '../images/tools.svg'
import icon3 from '../images/desktop.svg'

const query= graphql`
query {
  banner: file(relativePath: { eq: "39_Out_of_the_Blue_Wallpaper.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  allJavascriptFrontmatter{
    edges {
      node {
        frontmatter {
          staticData {
            featureds {
              id
              title
              src
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

const IndexPage = () =>  {
  const result = useStaticQuery(query);
  const headerImage = result.banner.childImageSharp.fluid;
  const featureds = result.allJavascriptFrontmatter.edges[0].node.frontmatter.staticData.featureds;



  return (
    <Layout headerImage={headerImage}>
    <SEO
      title="Developer - 3DArtist"
      keywords={[`artist`, `developer`, `engineer`, `3dartist`, `coding4rtist`]}
    />

    <div className={styles.container}>
      
      {/* <h1 className={styles.name}>
        {siteMetadata.title} | {siteMetadata.fullRole}
      </h1>
      */}
      <SectionTitle title="WELCOME TO MY WEBSITE" subtitle="Check out some of my latest works" id="main-content"/>
      <h3>Website update in progress</h3>

      {/* <p>{data}</p> */}

      <FeaturedGallery featureds={featureds}>
        {/* <Img fluid={file.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{position: 'relative', top: '0', width: '300px', height:'300px'}}  draggable={false}/> */}
      </FeaturedGallery>

      {/* <Gallery elements={[{file}]}> */}
      {/* <Img fluid={file.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{position: 'relative', top: '0', width: '300px', height:'300px'}}  draggable={false}/> */}
      {/* </Gallery> */}
      {/* <div>{greetings}</div> */}

      <div id={styles.process}>
        <SectionTitle title="Process / Approach" subtitle="I Believe that when you do things with passion magic happens!"/>
        <div className={styles.row}>
          <div className={styles.column}>
            <img src={icon1} alt="Discovery"/>
            <div>
              <h5>Discovery</h5>
              <p>I discover new techniques used by professionals and I try to learn and reuse them in new ideas.</p>
            </div>
          </div>
          <div className={styles.column}>
            <img src={icon2} alt="Design"/>
            <div>
              <h5>Design</h5>
              <p>I'm a minimalist who truly believes that less is more. I also love futuristic and abstract art.</p>
            </div>
          </div>
          <div className={styles.column}>
            <img src={icon3} alt="Development"/>
            <div>
              <h5>Development</h5>
              <p>It's the funny part, when everything beings to take shape, and still images come to life.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
      
  </Layout>
  )
}
 

export default IndexPage
