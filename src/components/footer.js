import React, { useEffect, useState } from 'react'

// Styled Components
import { Container, Flex } from '@styles/globalStyles'
import {
	FooterContainer,
	QuoteSection,
	HorizontalLine,
	QuoteText,
	EndSection,
	EndSectionRow,
} from '@styles/footerStyles'

import Logo from './icons/coding4rtist-logo'

import { FooterSocials } from '@data/social-links'

const Footer = ({ onCursor }) => {
	return (
		<FooterContainer>
			<QuoteSection>
				<HorizontalLine />
				<QuoteText>
					Always learning. Always improving.
					<span />
				</QuoteText>
				<HorizontalLine />
			</QuoteSection>
			<EndSection>
				<EndSectionRow>
					<h4>Designed and developed by Coding4rtist</h4>
					<h5>Copyright © 2022. All Rights Reserved</h5>
				</EndSectionRow>
				<EndSectionRow>
					<h4>coding4rtist@gmail.com</h4>
					<Logo />
				</EndSectionRow>
				<EndSectionRow>
					<FooterSocials onCursor={onCursor}></FooterSocials>
				</EndSectionRow>
			</EndSection>
		</FooterContainer>
	)
}

export default Footer
