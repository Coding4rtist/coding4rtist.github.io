import React, { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ImageGrid, ImageCard, ImageLightbox } from '@styles/artStyles'
import ArtworkLightbox from './ArtworkLightbox'

import useWindowSize from '@hooks/useWindowSize'
import { useBreakpoint } from '@components/breakpoint.js'

const transition = {
	type: 'spring',
	damping: 25,
	stiffness: 120,
}

const galleryVariant = {
	visible: {
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.2,
			staggerDirection: 1,
			delay: 0.5,
		},
	},
}

const elementVariant = {
	hidden: {
		y: 150,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: [0.6, 0.05, -0.01, 0.9],
		},
	},
}

const ArworksGallery = ({ artworks, onCursor }) => {
	const [popup, setPopup] = useState(false)
	const [selectedArtwork, setSelectedArtwork] = useState(null)
	const toggleLightbox = selected => {
		if (popup === false) {
			setSelectedArtwork(selected)
			setPopup(!popup)
			onCursor()
		} else {
			setPopup(!popup)
			setSelectedArtwork(null)
			onCursor()
		}
	}

	const windowSize = useWindowSize()
	const breakpoints = useBreakpoint()
	const columns = breakpoints.sm ? 1 : 2
	// const itemsPerRow = breakpoints.sm ? 1 : 2;
	let colWidth = Math.floor(Math.min(windowSize.width * 0.85, 1712) / columns)
	colWidth = Math.min(625, colWidth)
	console.log('COLWIDTH', colWidth, columns)

	return (
		<LayoutGroup>
			{/* <AnimatePresence> */}
			<ImageGrid initial="hidden" animate="visible" variants={galleryVariant}>
				{artworks.map(artwork => {
					const thumbUrl = `${artwork.thumbnail}?w=650&q=70&fm=webp`
					const height = colWidth / artwork.ratio

					return (
						<ImageCard
							key={artwork.id}
							variants={elementVariant}
							onClick={() => toggleLightbox(artwork)}
							onMouseEnter={() => onCursor('plus')}
							onMouseLeave={onCursor}
							style={{
								gridRowEnd: `span ${Math.ceil((height + 10) / 10)}`,
							}}
						>
							<motion.img
								className="img-responsive"
								draggable={false}
								src={thumbUrl}
								alt={artwork.title}
								transition={transition}
								// layoutId={artwork.id}
								// layout

								// style={{position: 'relative', top: '0', minWidth: artwork.width, height: artwork.height}}
							/>
						</ImageCard>
					)
				})}
			</ImageGrid>
			<ImageLightbox>
				<AnimatePresence>
					{popup && (
						<ArtworkLightbox
							toggleLightbox={toggleLightbox}
							artwork={selectedArtwork}
							windowSize={windowSize}
							onCursor={onCursor}
						/>
					)}
				</AnimatePresence>
			</ImageLightbox>
			{/* </AnimatePresence> */}
		</LayoutGroup>
	)
}

export default ArworksGallery
