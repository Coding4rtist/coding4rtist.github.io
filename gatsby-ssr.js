import React from 'react'
import { GlobalProvider } from '@context/globalContext'
import Layout from '@components/layout'

export const wrapRootElement = ({ element }) => {
	return <GlobalProvider>{element}</GlobalProvider>
}

export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>
}
