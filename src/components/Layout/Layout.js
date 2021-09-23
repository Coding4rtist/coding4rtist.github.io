/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/globalStyles'


import Transition from '../transition'

// import Header from '@components/Header'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
// import Scrollbar from '@components/Scrollbar'
// import { Scrollbars } from 'react-custom-scrollbars';
// import { Scrollbar } from "react-scrollbars-custom";
// import PerfectScrollbar from 'react-perfect-scrollbar'
// import Scrolly from 'scrolly/'
// import {StrollableContainer, Strollable, Stroller} from 'react-stroller';
// import GeminiScrollbar from 'react-gemini-scrollbar'
// import CustomScroller from 'react-custom-scroller';
import CustomScrollbar from "@components/Scrollbar"

import Cursor from '@components/CustomCursor'
import * as styles from './Layout.module.scss'

import { useGlobalDispatchContext, useGlobalStateContext } from '@components/../context/globalContext'
import { BreakpointProvider } from '../breakpoint'
import { isMobile } from 'react-device-detect';

import { motion, AnimatePresence } from 'framer-motion'

const queries = {
  xs: '(max-width: 576px)',
  sm: '(max-width: 768px)',
  md: '(max-width: 1200px)',
  or: '(orientation: portrait)', // we can check orientation also
}


const Layout = ({ children, location }) => {
  // const data = useStaticQuery(query);
  // console.log(data);
  // const location = window.location
  // console.log(props.location)
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
  }

  const [logoPosition, setLogoPosition] = useState({x: 0, y: 0})

  const darkTheme = {
    background: '#1F1F1F',
    backgroundAlt: '#151515',
    text: '#f4f4f4',
    left: `${logoPosition.x}px`,
    top: `${logoPosition.y}px`,
    isMobile: isMobile
  }

  const lightTheme = {
    background: '#f4f4f4',
    backgroundAlt: '#EBEBEB',
    text: '#2B2B2B',
    left: `${logoPosition.x}px`,
    top: `${logoPosition.y}px`,
    isMobile: isMobile
  }

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

  // React.useEffect(() => {
  //   console.log("mount")
  // }, [])
  return (
    <>
    <BreakpointProvider queries={queries} >
      <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle/>

        {isMobile ? 
        (
          <>
            <Nav onCursor={onCursor} forceDark={location.pathname === "/"}/>
            <Transition location={location}>
                {children}
            </Transition> 
            <Footer onCursor={onCursor}/>
          </>
        )
        :
        (
          <>
            <CustomScrollbar style={{height: '100vh'}}>
              <Nav onCursor={onCursor} forceDark={location.pathname === "/"}/>
              <Transition location={location}>
                  {children}
              </Transition> 
              <Footer onCursor={onCursor}/>
            </CustomScrollbar>    
            <Cursor/>
          </>
        )  
        }
        
      </ThemeProvider>
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
