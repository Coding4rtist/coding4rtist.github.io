import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import SectionTitle from '@components/SectionTitle'
import Img from "gatsby-image"
import styles from './about.module.scss'
import { graphql } from 'gatsby' 

import { SocialLink } from '../data/social-links'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />

    <Img fluid={data.file.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{width: '300px', borderRadius: '50%', marginBottom: '50px'}} draggable={false}/> 

    <SectionTitle title="ABOUT" subtitle="Who am I?" id="main-content"/>
    <div className="text-container">
      <p>Hi! I'm Carlo, a developer and 3D artist from Italy, commonly known as CodingArtist.</p>
      <p>Since my childhood I always enjoyed creating something from my hands. Then I discovered computer graphics, in particular 3D graphics. After that driven by curiosity, I did some research and discovered that behind videogames or apps there are only lines of words!</p>
      <p>Now I'm studying Computer Engineering and in my spare time, I create 3D renders, pc/android videogames, apps or other stuff like tools, mods and websites (like this).</p> 
    </div>
    <SectionTitle title="CURIOSITY" subtitle="Why Coding4rtist?"/>
    <div className="text-container">
      <p>The nickname "CodingArtist" (@coding4rtist) represents what I usually do in my spare time (games/apps development and 3d render) and my personality: half logical and analytical, half creative and passionate. Moreover, C.A. are also my initials.</p>
      <p>I've always had found very intriguing to take something abstract like an idea that was in my head and turn it into something real.</p>
      <p>I guess lately, art has become almost a necessity for me, it's a way to express what I am really feeling.</p>
    </div>

    <SectionTitle title="SOCIALS" subtitle="coding4rtist@gmail.com"/>
    <div className={styles.socialLinks}>
      <SocialLink index={0} styleClass={styles.socialItem}/>
      <SocialLink index={1} styleClass={styles.socialItem}/>
      <SocialLink index={2} styleClass={styles.socialItem}/>
      <SocialLink index={3} styleClass={styles.socialItem}/>
    </div>
    <div className={styles.socialLinks}>
      <SocialLink index={4} styleClass={styles.socialItem}/>
      <SocialLink index={5} styleClass={styles.socialItem}/>
      <SocialLink index={6} styleClass={styles.socialItem}/>
      <SocialLink index={7} styleClass={styles.socialItem}/>
    </div>
  </Layout>
)

export default AboutPage


export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`