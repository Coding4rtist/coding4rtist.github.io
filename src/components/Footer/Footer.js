// import PropTypes from 'prop-types'
import React, {useEffect} from 'react'
import * as styles from './Footer.module.scss'
import Logo from '../Icons/coding4rtist-logo'

// import useElementPosition from '@hooks/useElementPosition'

import { MainSocials } from '@data/social-links'
import CodeIcon from '@components/Icons/code-icon'
import HeartIcon from '@components/Icons/heart-icon'

import { useGlobalStateContext/*, useGlobalDispatchContext*/} from '@context/globalContext'

const Footer = ({ onCursor }) => {
  // console.log(socials, Social)
  const {theme} = useGlobalStateContext()
  // useEffect(() => {
  //   window.localStorage.setItem('theme', theme)
  // }, [theme]);

  return (
    <footer className={styles.footer}>
      {/* <div> */}
  
        {/* <a
          href={siteMetadata.twitterHandle}
          className={styles.link}
          target="blank"
        >
          {siteMetadata.fullName}
        </a> */}
      {/* </div> */}
  
        <div className={styles.socialLinks}>
          {MainSocials.map((social, i) => {
            return (
              <div key={i} className="social-link" onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}>
                <a href={social.url} aria-label={social.text}>
                  {social.icon}
                </a>
              </div>
            );
          })}
          {/* <div onMouseEnter={() => onCursor('hovered')}>
            <MainSocialLink index={0} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} styleClass={styles.socialItem}/>
            <MainSocialLink index={1} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} styleClass={styles.socialItem}/>
            <MainSocialLink index={2} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} styleClass={styles.socialItem}/>
            <MainSocialLink index={3} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} styleClass={styles.socialItem}/>
            <MainSocialLink index={4} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} styleClass={styles.socialItem}/>
          </div> */}
      </div>
  
      <Logo className={styles.logo} fillColor={theme === "light" ? "#000" : "#fff"}/>
      <span><CodeIcon/> with <HeartIcon/> by CodingArtist</span>
      <span>Copyright © 2021. All Rights Reserved</span>
    </footer>
  )
}

Footer.propTypes = {
  // siteMetadata: PropTypes.object,
}

export default Footer
