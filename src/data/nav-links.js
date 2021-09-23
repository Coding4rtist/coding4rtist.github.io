import React from 'react'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from "gatsby"
// import { motion } from 'framer-motion'
// import * as styles from './Navigation.module.scss'

import { Navigation, NavLink } from "@styles/globalStyles"

const navVariant = {
  open: {
    display: 'block',
    transition: { /*delay: 1,*/staggerChildren: 0.07, delayChildren: 0.2, when: "beforeChildren" }
  },
  closed: {
    display: 'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" }
  }
};

const linkVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      // y: { stiffness: 1000, velocity: -100 }
      ease: [0.6, 0.05, -0.01, 0.9],
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      // y: { stiffness: 1000 }
      ease: [0.6, 0.05, -0.01, 0.9],
    }
  }
};

const data = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },
  {
    id: 2,
    text: "Code",
    url: "/code"
  },
  {
    id: 3,
    text: "Art",
    url: "/art"
  },
  {
    id: 4,
    text: "About me",
    url: "/about"
  },
  {
    id: 5,
    text: "Contact",
    url: "/contact"
  },
]



export default({onCursor}) => {
  const tempLinks = data.map(link => {
    return (
      <NavLink
        // className={styles.link}
        variants={linkVariant}
        key={link.id}
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.95 }}
      >
        <Link
           to={link.url} 
          // activeClassName={activeStyleClass}
          // onClick={onClick}
          onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} 
        >{link.text}</Link>
      </NavLink>
    )
  })

  return(
    <Navigation variants={navVariant}>
      {tempLinks}
    </Navigation>
  )
}