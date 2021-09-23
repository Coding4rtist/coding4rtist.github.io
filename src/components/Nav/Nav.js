// import { Link } from "gatsby"
// import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import Logo from '../Icons/coding4rtist-logo'
import * as styles from './Nav.module.scss'

import { useLocation } from '@reach/router'
import NavLinks from '@data/nav-links'
import { MenuToggle } from './MenuToggle'

import { useGlobalStateContext, useGlobalDispatchContext} from '@context/globalContext'
// import useElementPosition from '@hooks/useElementPosition'
import { useBreakpoint } from '@components/breakpoint.js'

const sidebar = {
  open: {
    // clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    // display: 'block',
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  },
  closed: {
    // display: 'none',
    // clipPath: "circle(30px at 40px 40px)",
    x: 768,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
      // when: "afterChildren"
    }
  }
};


const Nav = ({ onCursor, forceDark = false }) => {
  const dispatch = useGlobalDispatchContext()
  const {currentTheme} = useGlobalStateContext()

  const [isOpen, setOpen] = useState(false);

  // console.log(currentTheme)
  const theme = forceDark ? "dark" : currentTheme
  console.log(theme)
  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme]);


  const location = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [location]);

  // const logo = useRef(null)
  // const position = useElementPosition(logo)

  const breakpoints = useBreakpoint();

  const toggleTheme  = () => {
    console.log(currentTheme)
    if (currentTheme === 'dark') {
      dispatch({type: 'TOGGLE_THEME', theme: 'light'})
    } else {
      dispatch({type: 'TOGGLE_THEME', theme: 'dark'})
    }
  }

  // const [isOpen, toggleOpen] = useCycle(false, true);
  
  

  const logoHover = () => {
    console.log("WEWE")
    onCursor('locked')
    // onCursor('locked')
    // setLogoPosition({x: position.x, y: position.y + 72});
  }

 
  return (
    <nav className={styles.nav} >
    <motion.div className={styles.headerContainer} animate={{y: 0, opacity: 1}} initial={{y: -72, opacity: 0}} transition={{duration: 1, ease: [0.6, 0.05, -0.01, 0.9]}}>
      <div className={styles.logoContainer} /*ref={logo} */onMouseEnter={logoHover} onMouseLeave={onCursor} onClick={toggleTheme}>
        <Logo fillColor={theme === "light" ? "#000" : "#fff"}/>
      </div>

      {breakpoints.xs || breakpoints.sm ?
        (<motion.div
          // className={styles.menuContainer}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.footer className={styles.navBackground} variants={sidebar}/>
          <NavLinks onCursor={onCursor}/>
          <MenuToggle toggle={() => setOpen(!isOpen)} onCursor={onCursor} fillColor={theme === "light" ? "#000" : "#fff"}/>
        </motion.div>)
        :
        (<NavLinks onCursor={onCursor}/>)
      }
      
    </motion.div>
  </nav>
  )
}
  


// Nav.propTypes = {
//   onCursor: PropTypes.object
// }

export default Nav