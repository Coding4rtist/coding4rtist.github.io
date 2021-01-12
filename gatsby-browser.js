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

export const wrapRootElement = ({element}) => {
  return (
    <GlobalProvider>{element}</GlobalProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
}
