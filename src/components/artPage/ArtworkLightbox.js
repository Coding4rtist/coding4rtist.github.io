import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import useOuterClick from '@hooks/useOuterClick'
import {
	LightboxContainer,
	LightboxImage,
	LightboxBackground,
	LightboxCenter,
	LightboxBottomBar,
} from '@styles/artStyles'

const artworkVariant = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			delay: 0.2,
		},
	},
}

const bottomBarVariant = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			delayChildren: 0.5,
			delay: 0.3,
		},
	},
}

const ArtworkLightbox = ({ toggleLightbox, artwork, windowSize, onCursor }) => {
	// const size =
	// 	artwork.ratio > 1
	// 		? { width: 1500, height: 1500 / artwork.ratio }
	// 		: { width: 1400 * artwork.ratio, height: 1400 }
	const size =
		artwork.ratio > 1
			? {
					width: artwork.ratio * windowSize.height * 0.7,
					height: windowSize.height * 0.7,
			  }
			: {
					width: artwork.ratio * windowSize.height * 0.9,
					height: windowSize.height * 0.9,
			  }
	// const size =
	// 	artwork.ratio > 1
	// 		? { width: 'auto', height: '40vh' }
	// 		: { width: '40vw', height: 'auto' }
	const imageUrl = `${artwork.image}?w=1500&q=50&fm=webp`
	const thumbUrl = `${artwork.thumbnail}?w=650&q=70&fm=webp`
	// const height = colWidth / artwork.ratio
	const subHtml = `<h4>${artwork.title}</h4><p>${artwork.subtitle}</p>`

	const innerRef = useOuterClick(toggleLightbox)

	return (
		<LightboxContainer>
			{/* <LightboxTopBar></LightboxTopBar> */}
			<LightboxBackground
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ delay: 0.1 }}
			/>
			<LightboxCenter>
				<LightboxImage
					onMouseEnter={onCursor}
					onMouseLeave={() => onCursor('minus')}
					style={{
						// position: 'relative',
						// top: '0',
						width: size.width,
						height: size.height,
					}}
				>
					{artwork.isVideo ? (
						<motion.img
							ref={innerRef}
							// className="img-responsive"
							draggable={false}
							src={thumbUrl}
							alt={artwork.title}
							variants={artworkVariant}
							initial="hidden"
							animate="show"
							exit="hidden"
							// layoutId={artwork.id}
							// style={{position: 'relative', top: '0', minWidth: artwork.width, height: artwork.height}}
						/>
					) : (
						<motion.img
							ref={innerRef}
							// className="img-responsive"
							draggable={false}
							src={imageUrl}
							alt={artwork.title}
							layoutId={artwork.id}
							variants={artworkVariant}
							initial="hidden"
							animate="show"
							exit="hidden"
							// style={{position: 'relative', top: '0', minWidth: artwork.width, height: artwork.height}}
						/>
					)}
				</LightboxImage>
				<LightboxBottomBar
					variants={bottomBarVariant}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					<h4>{artwork.title}</h4>
					<h5>{artwork.subtitle}</h5>
				</LightboxBottomBar>
			</LightboxCenter>
		</LightboxContainer>
	)
}

export default ArtworkLightbox
