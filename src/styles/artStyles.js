import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const ArtGallery = styled.div`
	position: relative;
	padding: 0;
	list-style-type: none;
	width: 85vw;
	margin-bottom: 30px;
	// max-width: 1712px;
	max-width: 1250px;
	overflow: hidden;

	// display: grid;
	// grid-gap: 10px;
	// grid-template-columns: repeat(auto-fill, minmax(500px,1fr));
	// grid-auto-rows: 1px;
	// column-count: 2;
	display: grid;
	grid-template-columns: repeat(2, minmax(100px, 1fr));
	grid-gap: 10px;
	grid-auto-rows: 0;

	// display: flex;
	// flex-flow: column wrap;

	// a:nth-child(3n+1) { order: 1; }
	// a:nth-child(3n+2) { order: 2; }
	// a:nth-child(3n)   { order: 3; }

	div {
		display: flex;
		flex-direction: column;

		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 5px;
		overflow: hidden;
	}

	a {
		display: block;
		text-align: center;
		list-style-type: none;
		float: left;
		margin-bottom: 0px;
		// padding: 6px;
		padding: 2px;

		-webkit-column-break-inside: avoid;
		break-inside: avoid;
		page-break-inside: avoid;

		img {
			// position: absolute;
			// top: 0;
			// left: 0;
			width: 100%;
			height: 100%;
			margin: 0;
			// object-fit: cover;
		}
	}
`
export const ImageGrid = styled(motion.div)`
	/* width: 100%;
	display: grid;
	padding: 20px;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px; */

	/* position: relative;
	width: 100%;
	height: 0;
	padding-top: 66.66%;
	cursor: zoom-in;
	margin: 50px 0; */

	position: relative;
	padding: 0;
	list-style-type: none;
	width: 85vw;
	margin-bottom: 30px;
	max-width: 1250px;
	overflow: hidden;
	display: grid;
	grid-template-columns: repeat(2, minmax(100px, 1fr));
	grid-gap: 10px;
	grid-auto-rows: 0;
`

export const ImageCard = styled(motion.div)`
	-webkit-column-break-inside: avoid;
	break-inside: avoid;
	display: block;
	float: left;
	list-style-type: none;
	margin-bottom: 0;
	padding: 2px;
	page-break-inside: avoid;
	text-align: center;

	display: block;

	img {
		width: 100%;
		height: 100%;
		margin: 0;
		box-shadow: none;
		border: none;
	}
`

export const ImageLightbox = styled.div``

export const LightboxContainer = styled.div`
	display: block;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 200;
`

export const LightboxBackground = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: 100%;
	background: #000;
`

export const LightboxCenter = styled.div`
	top: 50px;
	bottom: 70px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	width: 100%;
`
export const LightboxBottomBar = styled(motion.div)`
	text-align: center;
	padding-top: 30px;

	h4 {
		color: #fff;
		margin: 0;
		font-size: 15px;
		font-weight: bold;
	}

	h5 {
		color: #eeeeee;
		font-size: 14px;
		margin: 5px 0 0;
		font-weight: 400;
	}
`

export const LightboxImage = styled.div`
	margin: 0 auto;

	img {
		width: 100%;
		height: 100%;
		box-shadow: none;
		border: none;
	}
`
