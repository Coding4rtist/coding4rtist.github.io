import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Projects = styled(motion.ul)`
	display: grid;
	grid-auto-flow: row;
	grid-auto-columns: 1fr;
	grid-column-gap: 40px;
	grid-row-gap: 40px;
	grid-template-columns: 1fr 1fr;
`

export const Project = styled(motion.li)`
	display: inline-block;
	position: relative;
	/* text-align: center; */
	list-style-type: none;
	float: left;
	margin-bottom: 0px;
	/* transition: all 300ms ease-out;

	&:hover {
		transform: translate(0px, -5px);
	} */
`

export const ProjectOverlay = styled.div`
	position: relative;
	opacity: 0;
	background-image: radial-gradient(
		rgba(0, 0, 0, 0.2) 60%,
		rgba(0, 0, 0, 0.7) 130%
	);
	padding: 40px;
	color: #fff;
	transition: opacity 200ms ease;

	&:hover {
		opacity: 1;
	}
`

export const ProjectTitle = styled.div`
	position: relative;
	left: 0%;
	top: auto;
	right: 0%;
	bottom: 0%;
	width: 100%;
	font-family: Rmneue, sans-serif;
	color: #fff;
	font-size: 2.3vw;
	line-height: 2.8vw;
	font-weight: 300;
	letter-spacing: -0.08vw;
`

export const ProjectDetails = styled.div`
	position: relative;
	padding-top: 300px;
	font-size: 1.5vw;
	line-height: 2vw;
	font-weight: 300;
	letter-spacing: -0.02vw;

	span {
		font-size: 1.2vw;
		letter-spacing: -0.05vw;
		opacity: 0.52;
		color: #fff;
	}
`
export const FilterButton = styled.button`
	margin-right: 2em;
	min-width: 5rem;
	padding: 0.5rem 1rem;
	border: none;
	background: white;
	color: rgb(65, 98, 168);
	border-radius: 1rem;
	border: 2px solid rgb(65, 98, 168);
	font-weight: bold;

	${props =>
		props.active &&
		css`
			background: rgb(65, 98, 168);
			color: white;
		`}
`
