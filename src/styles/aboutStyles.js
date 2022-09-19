import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PersonalInfo = styled.div`
	/* display: grid; */
	width: 68.75%;
	margin: 35px auto;
	/* grid-auto-flow: row;
	grid-auto-columns: 1fr;
	grid-column-gap: 40px;
	grid-row-gap: 40px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr auto auto auto; */
	display: flex;
	flex-direction: row;
	align-items: center;

	@media (max-width: 1708px) {
		width: 85%;
	}
	@media (max-width: 1216px) {
		width: 100%;
		flex-direction: column;
	}
`

export const VideoContainer = styled.div`
	display: flex;
	/* justify-content: center; */
	justify-content: flex-end;
	padding-right: 125px;
	align-items: center;

	video {
		width: 375px;
		border-radius: 50%;
	}

	@media (max-width: 1216px) {
		padding-right: 0px;
		padding-bottom: 125px;
	}

	@media (max-width: 768px) {
		justify-content: center;
		padding-bottom: 50px;
		video {
			width: 100%;
		}
	}
`

export const TextContainer = styled.div`
	/* text-align: justify; */
	font-size: 18px;

	p {
		line-height: 1.3em;
		margin-block-start: 1.5em;
		margin-block-end: 1.5em;
	}
`

export const SocialContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
`

export const AboutSocialLinks = styled.ul`
	padding-bottom: 30px;
	width: 50vw;
	margin: 30px auto;
	display: flex;
	justify-content: center;
	text-align: center;

	@media (max-width: 768px) {
		width: 100%;
		display: inline-flex;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 0;
	}
`

export const AboutSocialLink = styled.li`
	margin-left: 1em;
	margin-right: 1em;
	width: 70px;
	list-style-type: none;

	&:hover {
		svg {
			fill: ${props => props.theme.yellow};
		}

		span {
			opacity: 1;
			transform: translateY(0);
		}
	}

	a {
		/* margin: auto !important;
		display: block;
		width: 30px;
		height: 30px; */
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		// margin: 6px;
	}

	svg {
		fill: ${props => props.theme.text};
		width: 30px;
		height: 30px;
		transition: all 0.2s cubic-bezier(0.75, 0, 0.08, 1);
	}

	span {
		display: block;
		font-size: 12px;
		font-weight: 700;
		// color: #707070;
		opacity: 0;
		margin-top: 12px;
		transform: translateY(10px);
		transition: 0.2s cubic-bezier(0.75, 0, 0.08, 1);
	}

	@media (max-width: 768px) {
		width: 55px;
		padding-bottom: 35px;
	}
`
