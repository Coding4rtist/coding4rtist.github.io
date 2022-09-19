import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { isMobile } from 'react-device-detect'

// styled components
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@styles/globalStyles'

// Components
import { BreakpointProvider } from '@components/breakpoint'
import Header from '@components/header'
import Cursor from '@components/customCursor'
import CustomScrollbar from '@components/scrollbar'
import Transition from '@components/transition'

// Context
import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from '@context/globalContext'

// Hooks
import useWindowSize from '@hooks/useWindowSize'

const queries = {
	xs: '(max-width: 576px)',
	sm: '(max-width: 768px)',
	md: '(max-width: 1200px)',
	or: '(orientation: portrait)', // we can check orientation also
}

const Layout = ({ children, location }) => {
	const darkTheme = {
		background: '#151515',
		altBackground: '#202020',
		text: '#fff',
		yellow: '#FFD919',
		navlink: '#C4C4C4',
	}

	const lightTheme = {
		background: '#fafafa',
		altBackground: '#fff',
		text: '#000',
		yellow: '#FFD919',
		navlink: '#505050',
	}

	// console.log(location)

	// Context
	const globalStateContext = useGlobalStateContext()
	const dispatch = useGlobalDispatchContext()

	// Hooks
	const size = useWindowSize()

	// REF
	const container = useRef()

	const { currentTheme, cursorStyles } = globalStateContext
	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
		dispatch({ type: 'CURSOR_TYPE', cursorType })
	}

	return (
		<BreakpointProvider queries={queries}>
			<ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
				<GlobalStyle />

				{!isMobile && <Cursor />}
				<CustomScrollbar ref={container} style={{ height: '100vh' }}>
					<Header onCursor={onCursor} />
					<Transition location={location}>{children}</Transition>
				</CustomScrollbar>
			</ThemeProvider>
		</BreakpointProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
