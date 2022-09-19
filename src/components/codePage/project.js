import React from 'react'
import { navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import {
	Project,
	ProjectOverlay,
	ProjectTitle,
	ProjectDetails,
} from '@styles/codeStyles'

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

const ProjectComponent = ({ project, onCursor }) => {
	const destUrl = '/' + project.slug
	const dateString = new Date(project.date).toLocaleString('en-US', dateOptions)

	const clickOnProject = url => {
		console.log(`CLICK ${url}`)
		onCursor()
		navigate(url)
	}

	return (
		<Project
			layout={'position'}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			whileHover={{
				y: -5,
				transition: { duration: 0.3, ease: 'easeInOut' },
			}}
			onClick={() => clickOnProject(destUrl)}
			onMouseEnter={() => onCursor('plus')}
			onMouseLeave={onCursor}
		>
			<GatsbyImage
				image={project.thumbnail}
				alt=""
				style={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					// height: '450px',
					// paddingBottom: '56.25%',
				}}
			/>
			<ProjectOverlay>
				<ProjectTitle>{project.title}</ProjectTitle>
				<ProjectDetails>
					{project.subtitle}
					<br />
					<span>{dateString}</span>
				</ProjectDetails>
			</ProjectOverlay>
		</Project>
	)
}

export default ProjectComponent
