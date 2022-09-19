const path = require('path')

exports.onCreateWebpackConfig = ({
	stage,
	rules,
	loaders,
	plugins,
	actions,
}) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, 'src', 'components'),
				'@styles': path.resolve(__dirname, 'src', 'styles'),
				'@context': path.resolve(__dirname, 'src', 'context'),
				'@hooks': path.resolve(__dirname, 'src', 'hooks'),
				'@data': path.resolve(__dirname, 'src', 'data'),
				'@images': path.resolve(__dirname, 'src', 'images'),
			},
		},
	})
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	const projectTemplate = path.resolve(`./src/templates/project-contentful.js`)
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allContentfulProject(sort: { fields: date, order: DESC }) {
					edges {
						node {
							slug
							title
						}
					}
				}
			}
		`).then(result => {
			if (result.errors) {
				throw result.errors
			}

			const projects = result.data.allContentfulProject.edges

			projects.forEach((project, index) => {
				const previous =
					index === projects.length - 1 ? null : projects[index + 1].node
				const next = index === 0 ? null : projects[index - 1].node

				createPage({
					path: project.node.slug,
					component: projectTemplate,
					context: {
						// Data passed to context is available in page queries as GraphQL variables.
						slug: project.node.slug,
						previous,
						next,
					},
				})
			})
			resolve()
		})
	})
}
