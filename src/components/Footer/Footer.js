import PropTypes from 'prop-types'
import React from 'react'
import styles from './Footer.module.scss'
import Logo from '../Icons/coding4rtist-logo'

import { MainSocialLink } from '../../data/social-links'
import CodeIcon from '@components/Icons/code-icon'
import HeartIcon from '@components/Icons/heart-icon'

const Footer = ({ siteMetadata }) => (
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
        <div>
          <MainSocialLink index={0} styleClass={styles.socialItem}/>
          <MainSocialLink index={1} styleClass={styles.socialItem}/>
          <MainSocialLink index={2} styleClass={styles.socialItem}/>
          <MainSocialLink index={3} styleClass={styles.socialItem}/>
          <MainSocialLink index={4} styleClass={styles.socialItem}/>
        </div>
    </div>

    <Logo fillColor="#2B2B2B"/>
    <span><CodeIcon/> with <HeartIcon/> by CodingArtist</span>
    <span>Copyright © 2021. All Rights Reserved</span>
  </footer>
)

Footer.propTypes = {
  siteMetadata: PropTypes.object,
}

export default Footer
