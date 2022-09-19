import React from 'react'
// import Layout from '@components/Layout'
import SEO from '@components/seo'
// import SectionTitle from '@components/SectionTitle'
// import { GatsbyImage } from "gatsby-plugin-image"
// import * as styles from './about.module.scss'
import { graphql } from 'gatsby'

// import avatar from '@images/avatar3.webp'
import avatarVideo from '@images/avatar_small.mp4'

import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from '@context/globalContext'

import { PageContent } from '@styles/globalStyles'
import { AboutSocials } from '@data/social-links'
import SectionTitle from '@components/sectionTitle'
import Footer from '@components/footer'

import {
	PersonalInfo,
	VideoContainer,
	TextContainer,
} from '@styles/aboutStyles'
import { SocialContainer } from '../styles/aboutStyles'

// import { SocialLink } from '../data/social-links'
// import { AllSocials } from '@data/social-links'

// console.log(AllSocials)
// console.log(AllSocials.slice(0, 5))

const AboutPage = ({ data }) => {
	const dispatch = useGlobalDispatchContext()
	const { cursorStyles } = useGlobalStateContext()
	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
		dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
	}

	return (
		<>
			<SEO title="About" />
			<PageContent>
				<SectionTitle title="About" subtitle="Who am I?" />
				<PersonalInfo>
					<VideoContainer>
						<video
							draggable={false}
							src={avatarVideo}
							loop={true}
							playsInline={true}
							muted={true}
							controls={false}
							autoPlay={true}
						/>
					</VideoContainer>
					<TextContainer>
						<p>
							Hi! I'm Carlo, a developer and 3D artist from Italy, commonly
							known as CodingArtist.
						</p>
						<p>
							Since my childhood I always enjoyed creating something from my
							hands. Then I discovered computer graphics, in particular 3D
							graphics. After that driven by curiosity, I did some research and
							discovered that behind videogames and apps there are only lines of
							words!
						</p>
						<p>
							Now I'm a Computer Engineer and in my spare time, I create 3D
							renders, pc/android videogames, apps or other stuff like tools,
							mods and websites (like this).
						</p>
						<p>
							The nickname "CodingArtist" (@coding4rtist) represents what I
							usually do in my spare time (games/apps development and 3D art)
							and my personality: half logical and analytical, half creative and
							passionate. Moreover, C.A. are also my initials.
						</p>
						<p>
							I've always had found very intriguing to take something abstract
							like an idea that was in my head and turn it into something real.
						</p>
					</TextContainer>
				</PersonalInfo>

				<SocialContainer>
					<h2>Socials</h2>
					<AboutSocials onCursor={onCursor} />
				</SocialContainer>

				<Footer onCursor={onCursor} />
			</PageContent>
		</>
	)
}

export default AboutPage
