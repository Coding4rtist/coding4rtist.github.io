import '@styles/fonts.css'
import React from 'react'
import { GlobalProvider } from '@context/globalContext'
import Layout from '@components/layout'
import scrollTo from 'gatsby-plugin-smoothscroll'

export const wrapRootElement = ({ element }) => {
	return <GlobalProvider>{element}</GlobalProvider>
}

export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>
}

export const shouldUpdateScroll = ({
	routerProps: { location },
	getSavedScrollPosition,
}) => {
	// const { pathname } = location
	// list of routes for the scroll-to-top-hook
	// const scrollToTopRoutes = [`/`, `/art`]
	// // if the new route is part of the list above, scroll to top (0, 0)
	// if (scrollToTopRoutes.indexOf(pathname) !== -1) {
	// 	window.scrollTo(0, 0)
	// }
	scrollTo('main')

	// const element = document.querySelector('main')

	// if (element) {
	// 	element.scrollIntoView({
	// 		// behavior: 'smooth',
	// 		block: 'start',
	// 	})
	// }

	return false
}
