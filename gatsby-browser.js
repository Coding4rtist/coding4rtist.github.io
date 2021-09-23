import '@styles/base.scss'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import {GlobalProvider} from './src/context/globalContext'
import Layout from '@components/Layout'
import scrollTo from 'gatsby-plugin-smoothscroll';

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // const { pathname } = location
  // list of routes for the scroll-to-top-hook
  // const scrollToTopRoutes = [`/privacy-policy`, `/page-2`]
  // if the new route is part of the list above, scroll to top (0, 0)
  // if (scrollToTopRoutes.indexOf(pathname) !== -1) {
  //   // window.scrollTo(0, 0)
  //   // console.log("AAA")
  // }
  // console.log("RESET SCROLL");
  scrollTo("nav")
  return false
}

export const wrapRootElement = ({element}) => {
  return (
    <GlobalProvider>{element}</GlobalProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
}
