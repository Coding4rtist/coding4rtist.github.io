import styled, { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

// import FontNormal from './fonts/NeueHaasDisplayRoman.woff'
// import FontBold from './fonts/NeueHaasDisplayBold.woff'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    text-decoration: none;
    cursor: none;
		transition: all .3s cubic-bezier(.165,.84,.44,1);
		transition-property: background, color;
		user-select: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: 'Neue Haas Grotesk Display', 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    /* overflow-x: hidden; */
		overflow: hidden;
  }

	h1, h2, h3, h4, h5, p, span, label {
		/* user-select: none; */
		color: ${props => props.theme.text};
	}
`

export const Container = styled.div`
	flex-grow: 1;
	margin: 0 auto;
	padding: 0 32px;
	position: relative;
	width: auto;
	height: 100%;
	@media (min-width: 1024px) {
		max-width: 960px;
	}
	@media (min-width: 1216px) {
		max-width: 1152px;
	}
	@media (min-width: 1408px) {
		max-width: 1244px;
	}

	${props =>
		props.fluid &&
		css`
			padding: 0;
			margin: 0;
			max-width: 100%;
		`}

	${props =>
		props.flexEnd &&
		css`
			display: flex;
			align-items: flex-end;
		`}
`

export const Flex = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	${props =>
		props.direction &&
		css`
			flex-direction: ${props => props.direction};
		`}

	${props =>
		props.spaceBetween &&
		css`
			justify-content: space-between;
		`}

	${props =>
		props.flexEnd &&
		css`
			justify-content: flex-end;
		`}

	${props =>
		props.alignStart &&
		css`
			align-items: start;
		`}

  ${props =>
		props.alignTop &&
		css`
			align-items: top;
		`}

  ${props =>
		props.noHeight &&
		css`
			height: 0;
		`}
`

export const Cursor = styled.div`
	position: fixed;
	top: 400px;
	left: 400px;
	width: 8px;
	height: 8px;
	/* background: ${props => props.theme.text}; */
	border-radius: 100%;
	transform: translate(-50%, -50%);
	transition: all 0.1s ease-in-out;
	/* transition: all .2s ease,top .18s ease-out,left .18s ease-out; */
	transition-property: width, height, border;
	will-change: width, height, transform, border;
	pointer-events: none;
	z-index: 999;

	&.hovered,
	&.theme {
		width: 0px;
		height: 0px;
	}

	${props =>
		props.inner &&
		css`
			background: #fff;
			mix-blend-mode: difference;

			&.plus {
				&:before,
				&:after {
					position: absolute;
					left: 0px;
					top: -11px;
					content: ' ';
					height: 22px;
					width: 3px;
					/* background-color: ${props => props.theme.text};
					mix-blend-mode: none; */
					background: #fff;
					mix-blend-mode: hard-light;
				}
				&:before {
					transform: rotate(0deg);
				}
				&:after {
					transform: rotate(90deg);
				}
			}

			&.minus {
				&:before {
					position: absolute;
					left: 0px;
					top: -11px;
					content: ' ';
					height: 22px;
					width: 3px;
					/* background-color: ${props => props.theme.text};
					mix-blend-mode: none; */
					background: #fff;
					mix-blend-mode: difference;
				}
				&:before {
					transform: rotate(90deg);
				}
			}
		`}

	${props =>
		props.outer &&
		css`
			background: none;
			width: 32px;
			height: 32px;
			border: solid 2px ${props => props.theme.yellow};
			transition: all 0.2s ease, top 0s ease-out, left 0s ease-out;

			&.hovered {
				width: 50px;
				height: 50px;
				border: solid 4px ${props => props.theme.yellow};
			}

			&.theme {
				width: 50px;
				height: 50px;
				border: solid 4px ${props => props.theme.text};
			}
		`}
`

// export const CursorOuter = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 32px;
// 	height: 32px;
// 	border: solid 2px ${props => props.theme.yellow};
// 	/* background: ${props => props.theme.yellow}; */
// 	border-radius: 100%;
// 	transform: translate(-50%, -50%);
// 	/* transition: all .1s ease-in-out; */
// 	transition: all 0.2s ease, top 0s ease-out, left 0s ease-out;
// 	transition-property: width, height, border;
// 	will-change: width, height, transform, border;
// 	pointer-events: none;
// 	z-index: 999;

// 	&.hovered {
// 		width: 50px;
// 		height: 50px;
// 		border: solid 4px ${props => props.theme.yellow};
// 	}

// 	&.pointer {
// 		width: 50px;
// 		height: 50px;
// 		border: solid 4px ${props => props.theme.text};
// 	}
// `

export const ScrollbarContainer = styled.div`
	position: relative;

	&:hover .track {
		opacity: 0.75;
	}

	.wrapper {
		position: relative;
		height: 100%;
		overflow: hidden;
	}

	.inner {
		position: relative;
		height: 100%;
		box-sizing: border-box;
		overflow-y: scroll;
	}

	.track {
		position: absolute;
		top: 0;
		right: 3px;
		cursor: default;
		user-select: none;
		width: 6px;
		min-height: 30px;
		max-height: 100%;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 4px;
		opacity: 0;
		transition: opacity 0.25s ease-in;
		z-index: 100;
	}

	.track:hover {
		width: 10px;
		right: 1px;
	}
`

export const PageContent = styled.div`
	padding-top: 160px; /* old 68px */

	margin: 0 auto;
	max-width: 1920px;
	padding: 6.1rem calc(min(6vw, 115.2px) + 2rem); 0;
	display: flex;
  flex-direction: column;
	align-items: center;
`

export const SectionTitle = styled.div`
	text-align: center;
	/* position: relative; */
	display: flex;
	flex-direction: column;
	align-items: center;
	// padding-top: 10px;
	padding: 10px 10px;
	/* color: ${props => props.theme.text}; */

	h3 {
		/* font-size: 11px; */
		/* font-weight: 700; */
		line-height: 24px;
		text-transform: uppercase;
		letter-spacing: 1px;

		font-size: 1rem;
	}

	h1 {
		margin-top: 0;
		// opacity: 0;

		/* font-size: 32px; */
		/* font-weight: 300; */
		line-height: 48px;
		font-size: 3.5rem;

		span {
			display: block;
			width: 100%;
			height: 8px;
			margin-top: 16px;
			background: ${props => props.theme.yellow};
		}
	}

	@media (max-width: 1200px) {
		h3 {
			font-size: 0.86rem;
		}

		h1 {
			font-size: 2.5rem;
		}
	}
`
