import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

// Banner
export const Banner = styled.div`
	background: ${props => props.theme.background};
	height: 100vh;
	width: 100%;
	position: relative;
	/* margin-bottom: 16px; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
`

export const BannerImage = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;

	img {
		object-fit: cover;
	}
`

export const BannerContainer = styled.div`
	height: 100%;
	max-width: 1220px;
	margin: auto;
	padding: 0 1.66667rem 0 1.66667rem;
	display: flex;
	align-items: flex-end;

	.title-container {
		display: flex;
		flex-direction: row;
		word-wrap: break-word;
		position: relative;
		/* width: calc(100% / 12 ) */

		padding-bottom: 10rem;
	}
`

export const BannerHeadline = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex: 1 1 0%;
	text-align: center;
	justify-content: center;
	position: relative;

	h1 {
		font-size: 5rem;
		color: #fff;
		pointer-events: none;
		margin: 0;
	}

	h2 {
		font-size: 2rem;
		letter-spacing: 0.15rem;
		color: #eaeaea;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
			width: 100%;
		}

		h2 {
			font-size: 1rem;
		}
	}
`

export const BannerTitle = styled(motion.h1)`
	/* position: absolute; */
	/* bottom: 150px; */
	/* left: 18px; */
	/* left: 23%; */
	pointer-events: none;
	padding-bottom: 9rem;

	span {
		color: #fff;
	}
`

export const Headline = styled(motion.span)`
	display: block;
	font-size: 4rem;
	font-weight: bold;
	line-height: 1.36;
	letter-spacing: 0.2rem;

	&.subtitle {
		font-size: 2rem;
		letter-spacing: 0.15rem;
		color: #eaeaea;
	}

	@media (max-width: 768px) {
		font-size: 2rem;
		/* width: 400px; */
		width: 100%;

		&.subtitle {
			font-size: 1rem;
			letter-spacing: 0.15rem;
			color: #eaeaea;
		}
	}
`

export const DownArrowContainer = styled(motion.button)`
	/* position: absolute; */
	/* bottom: 20px;
	left: 50%; */
	/* margin-left: -26px; */
	/* min-width: 100%;
	padding-bottom: 20px;
	justify-content: center; */
	background: transparent;
	border: none;
	flex-grow: 0;
	z-index: 1;
	margin-bottom: 20px;

	&:focus {
		outline: 0;
	}
`

// Featured

export const FeaturedProjects = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
`

export const LeftProjectWrap = styled.li`
	/* display: grid;
	grid-template-rows: 0.3fr 1fr auto 1fr;
	grid-column: 4/12;
	width: 60%;
	margin: auto; */
	/* display: flex;
	flex-direction: ${props => (props.invert ? 'row-reverse' : 'row')};
	justify-content: flex-start;
	width: 60%;
	margin: auto;
	padding: 55px 0; */

	align-items: stretch;
	display: flex;
	flex-direction: ${props => (props.invert ? 'row-reverse' : 'row')};
	padding: 5rem 0;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

export const LeftProjectInfo = styled.div`
	/* display: grid;
	grid-template-rows: 0.3fr 1fr auto 1fr;
	grid-column: 4/12;
	width: 60%;
	margin: auto; */
	/* display: flex;
	flex-direction: column;
	justify-content: center; */

	align-items: ${props => (props.invert ? 'flex-end' : 'flex-start')};
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	flex-shrink: 1;
	justify-content: center;
	/* margin-left: 5rem; */

	h1 {
		font-size: 44px;
		margin: 0.3em 150px 0.3em 0;
		@media (max-width: 1216px) {
			font-size: 28px;
		}
	}

	h3 {
		font-size: 20px;
		font-weight: 300;
		opacity: 0.6;
		margin: 0;
		@media (max-width: 1216px) {
			font-size: 16px;
		}
	}

	h2 {
		font-size: 30px;
		font-weight: 300;
		margin: 0.3em 0;
		@media (max-width: 1216px) {
			font-size: 20px;
		}
	}

	${props =>
		props.invert
			? css`
					text-align: right;
					/* margin-left: 3rem; */
					margin-right: 5rem;
					@media (max-width: 1216px) {
						margin-right: 3rem;
					}
					@media (max-width: 768px) {
						margin: 2.5rem 0 0;
					}

					h1 {
						margin: 0.3em 0 0.3em 150px;
					}
			  `
			: css`
					margin-left: 5rem;
					/* margin-right: 3rem; */
					@media (max-width: 1216px) {
						margin-left: 3rem;
					}
					@media (max-width: 768px) {
						margin: 2.5rem 0 0;
					}

					h1 {
						margin: 0.3em 150px 0.3em 0;
					}
			  `}
`

export const LeftProjectHeadline = styled.div`
	/* grid-column: 6/10;
	grid-row: 1/3;
	align-self: end;
	margin-top: 0; */
`

export const LeftLineContainer = styled.div`
	/* grid-column: 6/10;
	grid-row: 3/4;
	height: 60px; */
	height: 30px;
	display: flex;
	flex-direction: ${props => (props.invert ? 'row-reverse' : 'row')};
	align-items: center;

	/* display: flex;
    flex-direction: row;
    position: relative; */
	/* flex-grow: 1; */
	width: 100%;

	div {
		width: 100%;
		height: 3px;
		/* width: 0%; */
		/* margin-right: 50px; */
		border-radius: 50px;
		background-color: ${props => props.theme.text};
		order: -1;
		transition: 1s ease-in-out;

		${props =>
			props.invert
				? css`
						margin-left: 50px;
				  `
				: css`
						margin-right: 50px;
				  `}
	}

	h4 {
		font-size: 1.2em;
	}
`

export const LeftProjectImage = styled.div`
	/* grid-row: 2/5;
	grid-column: 1/5;
	align-items: center; */
	/* margin-right: 85px; */

	flex-basis: 60%; // Era 70
	flex-grow: 1;
	flex-shrink: 1;
	min-width: 0;
	position: relative;

	/* ${props =>
		props.invert
			? css`
					margin-left: 85px;
			  `
			: css`
					margin-right: 85px;
			  `} */
`

export const LeftProjectText = styled.div`
	/* grid-column: 6/9;
	display: inline;
	grid-row: 4/5; */
	text-align: justify;
`
