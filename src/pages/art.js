import React, { useRef, useCallback } from 'react'
// import Layout from '@components/Layout'
import SEO from '@components/seo'
// import SectionTitle from '@components/SectionTitle'

import { Link, useStaticQuery, graphql } from 'gatsby'
// import * as styles from './code.module.scss'
// import VideoPlayer from '@components/VideoPlayer'
// import { ArtItem } from '@components/Gallery/ArtItem'
// import { CodeGallery } from '@components/Gallery'
import { getImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

import { ArtGallery } from '@styles/artStyles'

import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from '@context/globalContext'

import useWindowSize from '@hooks/useWindowSize'
import { useBreakpoint } from '@components/breakpoint.js'

import { PageContent } from '@styles/globalStyles'
import SectionTitle from '@components/sectionTitle'
import ArworksGallery from '@components/artPage/ArworksGallery'
import ArtworkLightbox from '@components/artPage/ArtworkLightbox'

const galleryVariant = {
	visible: {
		transition: {
			// delayChildren: 0.3,
			staggerChildren: 0.1,
			staggerDirection: 1,
		},
	},
}

const elementVariant = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.25,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
}

const query = graphql`
	query {
		allContentfulArt(sort: { fields: [date], order: DESC }) {
			edges {
				node {
					id
					title
					subtitle
					date
					thumbnail {
						# gatsbyImageData(
						#   layout: FULL_WIDTH
						#   placeholder: BLURRED
						#   formats: [AUTO, WEBP]
						# )
						file {
							url
							details {
								image {
									width
									height
								}
							}
						}
					}
					image {
						gatsbyImageData(
							layout: FIXED
							placeholder: BLURRED
							formats: [AUTO, WEBP]
						)
						file {
							contentType
							url
						}
					}
				}
			}
		}
	}
`

const ArtPage = props => {
	// const result = useStaticQuery(query);
	// const projects = result.allContentfulProject.edges;
	// console.log(projects)

	// console.log(projects)

	// TODO filtrare projects in base allo status = href (?)
	const result = useStaticQuery(query)
	const artworks = result.allContentfulArt.edges.map(element => {
		// let thumbnail = getImage(element.node.thumbnail);
		let thumbnail = element.node.thumbnail.file
		let image = element.node.image.file
		let isVideo = image.contentType.indexOf('video') !== -1
		// let newHeight = Math.floor(colWidth * thumbnail.height / thumbnail.width);
		return {
			...element.node,
			thumbnail: thumbnail.url,
			image: image.url,
			isVideo: isVideo,
			// ratio: isVideo ? 1 : element.node.image.fluid.aspectRatio,
			// width: element.node.thumbnail.file.details.image.width,
			// height: element.node.thumbnail.file.details.image.height
			// width: colWidth,
			// height: newHeight
			ratio: thumbnail.details.image.width / thumbnail.details.image.height,
		}
	})
	console.log(artworks)

	// const lightGallery = useRef(null)
	// const onInit = useCallback(detail => {
	// 	if (detail) {
	// 		lightGallery.current = detail.instance
	// 		console.log(lightGallery)
	// 	}
	// }, [])

	const dispatch = useGlobalDispatchContext()
	const { cursorStyles } = useGlobalStateContext()
	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
		dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
	}

	// console.log(projects)
	// console.log("LOCATION", window.location.href);

	return (
		// <Layout location={props.location}>
		<>
			<SEO title="Art" />
			<PageContent>
				<SectionTitle
					title="My Artworks"
					subtitle="Where the world of fantasy meets reality"
				/>
				<ArworksGallery artworks={artworks} onCursor={onCursor} />
			</PageContent>
		</>
	)
}

export default ArtPage
