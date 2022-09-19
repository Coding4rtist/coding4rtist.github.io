import React, { useEffect, useState } from 'react'
// import Link from 'gatsby'
import { useLocation } from '@reach/router'

// Styled Components
import { Container, Flex } from '@styles/globalStyles'
import {
	HeaderNav,
	LogoContainer,
	MenuButtonContainer,
	NavSidebarBackground,
} from '@styles/headerStyles'

import Logo from './icons/coding4rtist-logo'
import NavLinks from '@data/nav-links'
import MenuToggle from '@components/header/menuToggle'

import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from '@context/globalContext'

import { useBreakpoint } from '@components/breakpoint.js'

const sidebar = {
	open: {
		// clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		// display: 'block',
		x: 0,
		transition: {
			duration: 0.4,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
	closed: {
		// display: 'none',
		// clipPath: "circle(30px at 40px 40px)",
		x: 768,
		transition: {
			delay: 0.2,
			type: 'spring',
			stiffness: 400,
			damping: 40,
			// when: "afterChildren"
		},
	},
}

const Header = ({ onCursor }) => {
	const dispatch = useGlobalDispatchContext()
	const { currentTheme } = useGlobalStateContext()

	const toggleTheme = () => {
		if (currentTheme === 'dark') {
			dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
		} else {
			dispatch({ type: 'TOGGLE_THEME', theme: 'dark' })
		}
	}

	useEffect(() => {
		window.localStorage.setItem('theme', currentTheme)
	}, [currentTheme])

	const breakpoints = useBreakpoint()

	const [isOpen, setOpen] = useState(false)

	const location = useLocation()
	useEffect(() => {
		setOpen(false)
	}, [location])

	return (
		<HeaderNav
			initial={{ y: -71, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 2, ease: [0.6, 0.04, -0.01, 0.9] }}
		>
			<Container>
				<Flex spaceBetween>
					<LogoContainer
						onClick={toggleTheme}
						onMouseEnter={() => onCursor('theme')}
						onMouseLeave={onCursor}
						style={{ padding: '15px 0 10px 0' }}
					>
						<Logo />
					</LogoContainer>

					{breakpoints.xs || breakpoints.sm ? (
						<MenuButtonContainer
							// className={styles.menuContainer}
							initial={false}
							animate={isOpen ? 'open' : 'closed'}
						>
							<NavSidebarBackground variants={sidebar} />
							<NavLinks onCursor={onCursor} />
							<MenuToggle toggle={() => setOpen(!isOpen)} onCursor={onCursor} />
						</MenuButtonContainer>
					) : (
						<NavLinks onCursor={onCursor} />
					)}
					{/* <NavLinks onCursor={onCursor} /> */}
					{/* <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu> */}
				</Flex>
			</Container>
		</HeaderNav>
	)
}

export default Header
