import React from 'react'
import SEO from '@components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion'

import { useGlobalStateContext, useGlobalDispatchContext, } from '@context/globalContext'
import scrollTo from 'gatsby-plugin-smoothscroll';

import SectionTitle from '@components/SectionTitle'
import {FeaturedGallery} from '@components/Gallery'
import ArrowDown from '@components/Icons/down-arrow'

import icon1 from '../images/magnifying-glass.svg'
import icon2 from '../images/tools.svg'
import icon3 from '../images/desktop.svg'

import * as styles from './index.module.scss'

const query = graphql`
query {
  site {
    siteMetadata {
      title
      fullName
      fullRole
    }
  }
  banner: file(relativePath: { eq: "39_Out_of_the_Blue_Wallpaper.jpg" }) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        placeholder: BLURRED
        formats: [AUTO, WEBP]
      )
    }
  }
  allContentfulProject(
    limit: 4,
    sort: {fields: [created_at], order: DESC},
    filter: {featured: {eq: true}}
  ) {
    edges {
      node {
        id
        slug
        title
        subtitle
        created_at
        thumbnail {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
  allContentfulArt(
    limit: 4,
    sort: {fields: [created_at], order: DESC},
    filter: {featured: {eq: true}}
  ) {
    edges {
      node {
        id
        title
        subtitle
        created_at
        thumbnail {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
}
`
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const titleVariant = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letterVariant = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ...transition },
  },
};



const IndexPage = props =>  {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const executeScroll = () => {
    scrollTo('#first-content')
  }

  const result = useStaticQuery(query);
  const siteData = result.site.siteMetadata
  const headerImage = getImage(result.banner);
  // console.log(headerImage)
  // const featureds = result.allJavascriptFrontmatter.edges[0].node.frontmatter.staticData.featureds;

  const featuredProj = result.allContentfulProject.edges;
  // console.log("PROJ", featuredProj);

  const featuredArt = result.allContentfulArt.edges;
  // console.log("ART", featuredArt);

  let featured = featuredProj.concat(featuredArt).slice(0, 7).map(el => el.node);
  featured.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
  // console.log("FEATURED", featured)
  // const featuredArt = 
  // const test = Date.parse('2021-05-01')
  
  // console.log(scale)



  return (
    // <Layout headerImage={headerImage} location={props.location}>
    <>
    <SEO
      title="Developer - 3DArtist"
      keywords={[`artist`, `developer`, `engineer`, `3dartist`, `coding4rtist`]}
    />

    <motion.header initial='initial' animate='animate' exit='exit' style={{height: '94vh'}}>
      {/* <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height:'100%', zIndex:'-100'}}></div> */}
      {/* <div className={styles.imageContainer}> */}
      <GatsbyImage image={headerImage} alt="" layout="fullWidth" objectFit="cover" objectPosition="50% 50%" style={{position: 'absolute', top: '0', left: '0', width: '100vw', height:'100vh', transform: `scale(${1})`}} draggable={false}/>
      {/* </div> */}
      
      <div className={styles.headerContent}>
        {/* <h1 className={styles.title}>{siteData.fullName}</h1> */}
        <motion.h1 variants={titleVariant}>
          {
            siteData.fullName.split('').map((char, i) => {
              return ( <motion.span key={i} variants={letterVariant} >{char}</motion.span>);
            })
          }
        </motion.h1>
        <motion.h3 className={styles.kicker} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0, transition: {delay: 1.2, ...transition}}}>{siteData.fullRole}</motion.h3>
        <button className={styles.downArrow} onClick={executeScroll} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}>
          <ArrowDown/>
        </button>
      </div>
    </motion.header>
        
      
    

    <section id="first-content" className="content-container">
      
      {/* <h1 className={styles.name}>
        {siteMetadata.title} | {siteMetadata.fullRole}
      </h1>
      */}
      <SectionTitle title="WELCOME TO MY WEBSITE" subtitle="Check out some of my latest works" id="main-content"/>
      <h3>Website update in progress</h3>

      {/* <p>{data}</p> */}

      <FeaturedGallery
        featured={featured}
        onCursor={onCursor}
        
      >
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
              <p>I love discovering new techniques/styles and I try to learn and reuse them in new ideas.</p>
            </div>
          </div>
          <div className={styles.column}>
            <img src={icon2} alt="Design"/>
            <div>
              <h5>Design</h5>
              <p>I'm a minimalist who truly believes that less is more. I also love futuristic and surreal art.</p>
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

    </section>
      
  </>

  )
}
 

export default IndexPage