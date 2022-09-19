import React from 'react'
import PropTypes from 'prop-types'
import { SectionTitle } from '@styles/globalStyles'

const SectionTitleComp = ({ title, subtitle }) => (
	<SectionTitle>
		<h3>{subtitle}</h3>
		<h1>
			{title}
			<span></span>
		</h1>
		<div></div>
	</SectionTitle>
)

SectionTitleComp.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
}

export default SectionTitleComp
