import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { motion } from 'framer-motion'

import {
	Banner,
	BannerImage,
	BannerContainer,
	BannerHeadline,
	BannerTitle,
	Headline,
	DownArrowContainer,
} from '@styles/homeStyles'
import { Container, Flex } from '@styles/globalStyles'

import DownArrow from '@components/icons/down-arrow'

const parentVariant = {
	// initial: { y: 300 },
	animate: {
		// y: 0,
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

const HomeBanner = ({ onCursor }) => {
	const query = graphql`
		query {
			site {
				siteMetadata {
					title
					bannerTitle
					bannerSubtitle
				}
			}
			banner: file(relativePath: { eq: "39_Out_of_the_Blue_Wallpaper.jpg" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						placeholder: TRACED_SVG
						formats: [AUTO, WEBP]
					)
				}
			}
		}
	`

	const result = useStaticQuery(query)
	const siteData = result.site.siteMetadata
	const headerImage = getImage(result.banner)
	// console.log(siteData, headerImage)
	// return (<></>)

	const executeScroll = () => {
		scrollTo('#first-content')
	}

	return (
		<Banner>
			<BannerImage>
				<GatsbyImage
					image={headerImage}
					alt=""
					layout="fullWidth"
					objectFit="cover"
					objectPosition="50% 50%"
					style={{ width: '100%', height: '100%' }}
					draggable={false}
				/>
			</BannerImage>

			{/* <Container flexEnd> */}
			<BannerHeadline
				// direction="column"
				// alignStart
				// style={{ width: '100%' }}
				variants={parentVariant}
				initial="initial"
				animate="animate"
			>
				<motion.h1 variants={childVariant}>CodingArtist</motion.h1>
				<motion.h2 variants={childVariant}>3D Artist | Developer</motion.h2>
				{/* <Headline ></Headline>
						<Headline variants={childVariant} className="subtitle">
							3D Artist | Developer
						</Headline> */}
			</BannerHeadline>
			{/* </Container> */}
			<DownArrowContainer
				onClick={executeScroll}
				onMouseEnter={() => onCursor('hovered')}
				onMouseLeave={onCursor}
			>
				<DownArrow />
			</DownArrowContainer>

			{/* <BannerContainer>
				<div className="title-container">
					<BannerTitle
						variants={parentVariant}
						initial="initial"
						animate="animate"
					>
						<Headline variants={childVariant}>CodingArtist</Headline>
						<Headline variants={childVariant} className="subtitle">
							3D Artist | Developer
						</Headline>
					</BannerTitle>
				</div>
			</BannerContainer> */}

			{/* <DownArrowContainer
				onClick={executeScroll}
				onMouseEnter={() => onCursor('hovered')}
				onMouseLeave={onCursor}
			>
				<DownArrow />
			</DownArrowContainer> */}
		</Banner>
	)
}

export default HomeBanner
