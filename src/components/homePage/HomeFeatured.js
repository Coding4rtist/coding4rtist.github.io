import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {
	Banner,
	BannerImage,
	BannerContainer,
	BannerTitle,
	Headline,
	DownArrowContainer,
	FeaturedProjects,
	LeftProjectWrap,
	LeftProjectHeadline,
	LeftLineContainer,
	LeftProjectImage,
	LeftProjectInfo,
	LeftProjectText,
} from '@styles/homeStyles'
import { Container, Flex, PageContent } from '@styles/globalStyles'

import DownArrow from '@components/icons/down-arrow'

import SectionTitle from '@components/sectionTitle'

const parentVariant = {
	initial: { y: 300 },
	animate: {
		y: 0,
		transition: {
			staggerChildren: 0.2,
		},
	},
}

const childVariant = {
	initial: { y: 300 },
	animate: {
		y: 0,
		transition: {
			duration: 1,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
}

const HomeFeatured = ({ onCursor }) => {
	const query = graphql`
		query {
			allContentfulProject(
				limit: 4
				sort: { fields: [date], order: DESC }
				filter: { featured: { eq: true } }
			) {
				edges {
					node {
						id
						slug
						title
						subtitle
						date
						thumbnail {
							gatsbyImageData(
								width: 1200
								layout: CONSTRAINED
								placeholder: TRACED_SVG
								formats: [AUTO, WEBP]
							)
						}
					}
				}
			}
			allContentfulArt(
				limit: 4
				sort: { fields: [date], order: DESC }
				filter: { featured: { eq: true } }
			) {
				edges {
					node {
						id
						title
						subtitle
						date
						thumbnail {
							gatsbyImageData(
								width: 1200
								layout: CONSTRAINED
								placeholder: TRACED_SVG
								formats: [AUTO, WEBP]
							)
						}
					}
				}
			}
		}
	`

	const result = useStaticQuery(query)
	// const siteData = result.site.siteMetadata
	// const headerImage = getImage(result.banner)
	// console.log(siteData, headerImage)
	// return (<></>)

	const featuredProj = result.allContentfulProject.edges
	const featuredArt = result.allContentfulArt.edges
	let featured = featuredProj
		.concat(featuredArt)
		.slice(0, 7)
		.map(el => el.node)
	featured.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
	console.log(featured)

	// const testImage = getImage(featured[0].thumbnail)
	const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

	const clickOnProject = url => {
		console.log(`CLICK ${url}`)
		onCursor()
		navigate(url)
	}

	return (
		<PageContent id="first-content">
			<SectionTitle title="Featured" subtitle="My latest works" />

			<FeaturedProjects>
				{featured.map((artwork, i) => {
					const destUrl = artwork.slug != null ? '/' + artwork.slug : '/art'
					const description =
						artwork.slug != null ? artwork.subtitle : '3D Render'
					const dateString = new Date(artwork.date).toLocaleString(
						'en-US',
						dateOptions
					)

					return (
						<LeftProjectWrap key={artwork.id} invert={i % 2}>
							<LeftProjectImage
								invert={i % 2}
								onClick={() => clickOnProject(destUrl)}
								onMouseEnter={() => onCursor('plus')}
								onMouseLeave={onCursor}
							>
								<GatsbyImage
									// image={testImage}
									image={artwork.thumbnail.gatsbyImageData}
									alt=""
									layout="constrained"
									objectFit="cover"
									objectPosition="50% 50%"
									style={{
										width: '100%',
										height: '0',
										paddingBottom: '56.25%',
										// width: '700px',
										// height: '700px',
										// maxWidth: '700px',
										// maxHeight: '700px',
									}}
									draggable={false}
								/>
							</LeftProjectImage>
							<LeftProjectInfo invert={i % 2}>
								<h3>{dateString}</h3>
								<h1>{artwork.title}</h1>
								<LeftLineContainer invert={i % 2}>
									<div></div>
									<h4>{'0' + (i + 1)}</h4>
								</LeftLineContainer>
								<h2>{description}</h2>
							</LeftProjectInfo>
						</LeftProjectWrap>
					)
				})}
			</FeaturedProjects>
		</PageContent>
	)
}

export default HomeFeatured
