import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	padding: 0;
	max-width: 1920px;
	width: 100%;
	/* padding: 2.1rem calc(min(6vw, 115.2px) + 2rem); */
`

export const QuoteSection = styled.div`
	width: 100%;
	text-align: center;
`

export const HorizontalLine = styled.div`
	/* width: 82%; */
	height: 4px;
	background: ${props => props.theme.text};
`

export const QuoteText = styled.h2`
	padding-top: 140px;
	padding-bottom: 140px;
	font-size: 45px;
	width: 745px;
	margin: auto;

	span {
		display: block;
		width: 100%;
		height: 8px;
		margin-top: 16px;
		background: ${props => props.theme.yellow};
	}

	@media (max-width: 1216px) {
		font-size: 34px;
		width: 555px;
	}
	@media (max-width: 768px) {
		font-size: 24px;
		/* width: 400px; */
		width: 70%;

		span {
			height: 3px;
		}
	}
`

export const EndSection = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 30px 0;

	div:nth-child(1) {
		/* text-align: left; */
	}

	div:nth-child(2) {
		text-align: center;
		align-items: center;
	}
	div:nth-child(3) {
		align-items: left;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		padding-bottom: 100px;

		div {
			text-align: center;
			width: 100%;
			margin-bottom: 20px;
		}

		div:nth-child(3) {
			align-items: center;
		}
	}
`

export const EndSectionRow = styled.div`
	width: 33.333%;
	display: flex;
	flex-direction: column;

	h4 {
		font-weight: 300;
		font-size: 24px;
		margin: 12px;
	}

	h5 {
		font-weight: 300;
		font-size: 20px;
		opacity: 52%;
		margin: 12px;
	}

	& > svg {
		margin-top: 24px;
		fill: ${props => props.theme.text};
	}
`

export const FooterSocialLinks = styled.ul`
	text-align: right;
	padding: 0;

	@media (max-width: 768px) {
		text-align: center;
	}
`

export const FooterSocialLink = styled.li`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: #ffffff30;
	list-style-type: none;

	margin-left: 10px;
	margin-right: 10px;
	margin-bottom: 10px;
	/* margin: 0px 10px; */
	width: 3em;
	height: 3em;
	border-radius: 100%;
	transition: all 0.2s ease;

	&:hover {
		/* transform: translateY(-5px); */
		box-shadow: 0px 25px 30px -20px black;

		svg {
			fill: ${props => props.theme.yellow};
		}
	}

	a {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	svg {
		width: 24px;
		height: 24px;
		fill: ${props => props.theme.text};
	}

	@media (max-width: 768px) {
		margin-left: 2px;
		margin-right: 2px;
	}
`
