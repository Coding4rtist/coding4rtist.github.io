import React from 'react'

import {
	ProjectHeader,
	ProjectTitleContainer,
	ProjectDetailsContainer,
	ProjectTitle,
} from '@styles/projectTemplateStyles'

const ProjectHeaderComponent = ({ post }) => {
	return (
		<ProjectHeader>
			<ProjectTitleContainer>
				<ProjectTitle>{post.title}</ProjectTitle>
			</ProjectTitleContainer>
			<ProjectDetailsContainer>
				<div>
					<h3>Date</h3>
					<h4>{post.date}</h4>
				</div>
				<div>
					<h3>Type</h3>
					<h4>{post.subtitle}</h4>
				</div>
				<div>
					<h3>Status</h3>
					<h4>{post.status.title}</h4>
				</div>
			</ProjectDetailsContainer>
		</ProjectHeader>
	)
}

export default ProjectHeaderComponent
