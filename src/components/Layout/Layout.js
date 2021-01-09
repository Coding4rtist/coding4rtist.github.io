/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from '@components/Header'
import Footer from '@components/Footer'
import Scrollbar from '@components/Scrollbar'
import styles from './Layout.module.scss'

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


const Layout = ({ children, headerImage }) => {
  const data = useStaticQuery(query);
  // console.log(data);

  return (
    <BreakpointProvider queries={queries}>
      <Scrollbar plugins={{
        overscroll: {
          effect: 'glow',
        },
      }}>
      <div className={styles.pageWrapper} style={{ height: '100vh' }}>
        <Header siteData={data.site.siteMetadata} headerImage={headerImage} />
        <div className={styles.contentContainer}>{children}</div>
        <Footer siteMetadata={data.site.siteMetadata} />
      </div>
      
      </Scrollbar>
      {/* <Cursor/> */}
    </BreakpointProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerImage: PropTypes.object
}

export default Layout
