import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const ProjectHeader = styled.div`
	display: flex;
	flex-direction: column;
`

export const ProjectTitleContainer = styled.div``

export const ProjectDetailsContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
	margin-bottom: 90px;

	div {
		width: 33%;

		h3 {
			font-size: 22px;
			margin-bottom: 0.6em;
		}

		h4 {
			font-size: 18px;
			font-weight: 400;
			margin: 0;
		}
	}
`

export const ProjectTitle = styled.h1`
	font-size: 105px;
	font-weight: 800;
	margin: 10px 0;
	width: fit-content;
	border-bottom: 8px solid ${props => props.theme.yellow};
`

export const SectionTitle = styled.h2`
	font-size: 75px;
	font-weight: 800;
`
