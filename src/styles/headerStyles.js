import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeaderNav = styled(motion.div)`
	/* height: 0; */
	width: 100%;
	position: fixed;
	/* top: 72px; */
	top: 0;
	right: 0;
	left: 0;
	z-index: 99;
	background: ${props => props.theme.background};
`

export const LogoContainer = styled.div`
	svg {
		path {
			fill: ${props => props.theme.text} !important;
		}
	}
`

export const Menu = styled.div`
	button {
		transform-origin: center;
		border: none;
		padding: 20px;
		background: none;
		outline: none;

		span {
			width: 36px;
			height: 8px;
			display: block;
			background: ${props => props.theme.text};
			margin: 8px;
		}
	}
`

export const Navigation = styled(motion.ul)`
	float: right;
	margin-top: 6px;
	z-index: 3;
	margin: 0;
	padding: 0;

	@media (max-width: 768px) {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

export const NavLink = styled(motion.li)`
	list-style: none;
	display: inline-block;
	margin-right: 30px;

	a {
		display: inline-block;
		/* letter-spacing: 1.75px; */
		color: ${props => props.theme.navlink};
		// text-transform: uppercase;
		/* font-weight: 700; */
		font-size: 16px;
		font-weight: bold;
		letter-spacing: 0.2px;
		/* font-size: 0.9rem; */
		// font-size: 17px;
		// margin-right: 30px;
		user-select: none;
		/* padding-bottom: 2px; */
	}

	a[aria-current] {
		color: ${props => props.theme.text};
		border-bottom: solid 3px #ffba00;
	}

	&:last-child {
		margin-right: 0px;
	}

	&:hover {
		a {
			color: ${props => props.theme.text};
		}
	}

	@media (max-width: 768px) {
		display: block;
		margin: 0;
		text-align: center;

		a {
			font-size: 2.5rem;
		}
	}
`

export const ToggleMenuButton = styled.div`
	outline: none;
	border: none;
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	position: absolute;
	// top: 18px;
	// left: 15px;
	/* /* width: 50px; */
	width: 40px;
	height: 40px;
	padding: 14px 0px 10px;
	display: flex;
	/* height: 100%; */
	/* margin-top: 0; */
	top: 0;
	/* border-radius: 50%; */
	/* background: transparent; */

	// position: absolute;
	/* top: 30px; */
	right: 0;
	/* top: 2px; */
	z-index: 3;

	svg {
		margin: auto;
	}
`

export const MenuButtonContainer = styled(motion.div)`
	margin: auto;
`

export const NavSidebarBackground = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	// bottom: 0;
	// width: 300px;
	width: 100vw;
	height: 100vh;
	// display: none;
	z-index: 2;
	background: ${props => props.theme.background};
	// background: #EBEBEB;
`

export const Path = styled(motion.path)`
	fill: transparent;
	stroke: ${props => props.theme.text};
	stroke-width: 3;
	/* stroke-linecap: round; */
`
