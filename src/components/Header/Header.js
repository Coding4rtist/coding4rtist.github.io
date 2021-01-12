// import { Link } from "gatsby"
import PropTypes from 'prop-types'
import React from 'react'
import SmoothScrollbar from 'smooth-scrollbar';
import Img from 'gatsby-image'
import {motion} from 'framer-motion'

import Logo from '../Icons/coding4rtist-logo'
import styles from './Header.module.scss'

import ArrowDown from '../Icons/down-arrow'


import NavLinks from '../../data/nav-links'


// import {useGlobalStateContext} from '../../context/globalContext'

const Header = ({ siteData, headerImage = null, onCursor }) => {
  // const currentTheme = useGlobalStateContext();
  // console.log(currentTheme)
  
  const executeScroll = () => {
    if(SmoothScrollbar.getAll() !== null) {
      SmoothScrollbar.getAll()[0].scrollTo(0, window.innerHeight, 600)
    }
  }

  return (
    <header className={headerImage === null ? styles.header : styles.headerBanner} >
    <motion.div className={styles.headerContainer} animate={{y: 0, opacity: 1}} initial={{y: -72, opacity: 0}} transition={{duration: 1, ease: [0.6, 0.05, -0.01, 0.9]}}>
      <div className={styles.logoContainer}  onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}>
        <Logo fillColor={headerImage === null ? "#000" : "#fff"}/>
      </div>

      <NavLinks styleClass={headerImage === null ? styles.menu : styles.menuAlt} activeStyleClass={styles.active}/>
    </motion.div>

    {headerImage!==null && 
        <div>
          <h1 className={styles.title}>{siteData.fullName}</h1>
          <h3 className={styles.kicker}>{siteData.fullRole}</h3>
          <button className={styles.downArrow} onClick={executeScroll}>
            <ArrowDown/>
          </button>
        </div>
        
      }
    {headerImage!==null && <Img fluid={headerImage} objectFit="cover" objectPosition="50% 50%" style={{position: 'absolute', top: '0', width: '100%', height:'100%', zIndex:'-100'}}  draggable={false}/>}
  </header>
  )
}
  


Header.propTypes = {
  siteData: PropTypes.object,
  headerImage: PropTypes.object
}

export default Header
