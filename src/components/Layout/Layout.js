/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from 'framer-motion'
import Transition from '../transition'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Scrollbar from '@components/Scrollbar'
import Cursor from '@components/CustomCursor'
import styles from './Layout.module.scss'

import {useGlobalDispatchContext, useGlobalStateContext} from '@components/../context/globalContext'
import {BreakpointProvider} from '../breakpoint'

const queries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 720px)',
  md: '(max-width: 1024px)',
  or: '(orientation: portrait)', // we can check orientation also
}

const query= graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        fullName
        fullRole
      }
    }
  }
`


const duration = 0.3

const variants = {
  initial: {
    // y: '100vh',
    opacity: 0,
  },
  enter: {
    // zIndex: 1,
    // y: 0,
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    // zIndex: 0,
    // y: '-100vh',
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children, location }) => {
  const data = useStaticQuery(query);
  // console.log(data);
  // const location = window.location
  // console.log(props.location)
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
  }

  React.useEffect(() => {
    console.log("mount")
  }, [])

  return (
    <>
    <BreakpointProvider queries={queries} >
      <Scrollbar plugins={{overscroll: {effect: 'glow',}}}>
        <Transition location={location}> 
          <div className={styles.pageWrapper} style={{ height: '100vh' }} >
            <Header siteData={data.site.siteMetadata} onCursor={onCursor}/>
            <main className={styles.contentContainer} key={"container-" + location.pathname}>{children}</main>
            <Footer siteMetadata={data.site.siteMetadata} />
          </div>
        </Transition> 
      </Scrollbar>
      <Cursor/>
    </BreakpointProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerImage: PropTypes.object,
  location: PropTypes.object
}

export default Layout
