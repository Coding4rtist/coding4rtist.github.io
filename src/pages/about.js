import React from 'react'
// import Layout from '@components/Layout'
import SEO from '@components/seo'
import SectionTitle from '@components/SectionTitle'
// import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from './about.module.scss'
import { graphql } from 'gatsby' 

// import avatar from '@images/avatar3.webp'
import avatarVideo from '@images/avatar_small.mp4'

import { useGlobalStateContext, useGlobalDispatchContext } from '@context/globalContext'

// import { SocialLink } from '../data/social-links'
import { AllSocials } from '@data/social-links'

// console.log(AllSocials)
// console.log(AllSocials.slice(0, 5))

const AboutPage = ({ data }) => {

  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    // <Layout location={location}>
    <>
      <SEO title="About" />
      <section className="content-container">
      {/* <img src={avatar} alt="avatar" style={{width: '300px', borderRadius: '50%', marginBottom: '50px'}} draggable={false}/> */}
      <video
        style={{width: '300px', borderRadius: '50%', marginBottom: '50px'}}
        draggable={false}
        // className={styles.videoPlayer}
        // ref={this.videoRef}
        // autoPlay
        // placeholder={this.props.placeHolder.src}
        src={avatarVideo}
        loop={true}
        controls={false}
        autoPlay={true}
        // onLoadedMetadata={e => {
        //   console.log("AAAAAAAAAAAAA", e.target)
        //   // this.setState({
        //   //   ratio: e.target.videoWidth / e.target.videoHeight
        //   // })
        //   e.target.play();
        // }}
      />
      {/* <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="" objectFit="cover" objectPosition="50% 50%" style={{width: '300px', borderRadius: '50%', marginBottom: '50px'}} draggable={false}/>  */}
  
      <SectionTitle title="ABOUT" subtitle="Who am I?" id="main-content"/>
      <div className="text-container">
        <p>Hi! I'm Carlo, a developer and 3D artist from Italy, commonly known as CodingArtist.</p>
        <p>Since my childhood I always enjoyed creating something from my hands. Then I discovered computer graphics, in particular 3D graphics. After that driven by curiosity, I did some research and discovered that behind videogames and apps there are only lines of words!</p>
        <p>Now I'm studying Computer Engineering and in my spare time, I create 3D renders, pc/android videogames, apps or other stuff like tools, mods and websites (like this).</p> 
      </div>
      <SectionTitle title="CURIOSITY" subtitle="Why Coding4rtist?"/>
      <div className="text-container">
        <p>The nickname "CodingArtist" (@coding4rtist) represents what I usually do in my spare time (games/apps development and 3D art) and my personality: half logical and analytical, half creative and passionate. Moreover, C.A. are also my initials.</p>
        <p>I've always had found very intriguing to take something abstract like an idea that was in my head and turn it into something real.</p>
        <p>I guess lately, art has become almost a necessity for me, it's a way to express what I am really feeling.</p>
      </div>
  
      <SectionTitle title="SOCIALS" subtitle="coding4rtist@gmail.com"/>
      <div className={styles.socialLinks}>
        {AllSocials.slice(0, 4).map((social, i) => {
            return (
              <div key={i} className={styles.socialItem}>
                <a href={social.url} aria-label={social.text} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}>
                  {social.icon}
                </a>
                <span>{social.text}</span>
              </div>
            );
          })
        }
      </div>
      <div className={styles.socialLinks}>
        {AllSocials.slice(4, 8).map((social, i) => {
            return (
              <div key={i} className={styles.socialItem}>
                <a href={social.url} aria-label={social.text} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}>
                  {social.icon}
                </a>
                <span>{social.text}</span>
              </div>
            );
          })
        }
      </div>
      {/* <div className={styles.socialLinks}>
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
      </div> */}
      </section>
    </>
  )
}



  

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