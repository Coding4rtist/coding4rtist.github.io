import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import useCustomScrollbar from '@hooks/useCustomScrollbar'

import { ScrollbarContainer } from '@styles/globalStyles'

const CustomScrollbar = forwardRef(
	({ scrollDisabled, children, ...props }, ref) => {
		console.log(children, ref)
		const [wrapperProps, scrollerProps, trackProps] = useCustomScrollbar(
			children,
			ref,
			{ disabled: scrollDisabled }
		)

		return (
			<ScrollbarContainer {...props}>
				<div className="wrapper" {...wrapperProps}>
					<div className="inner" {...scrollerProps}>
						{children}
					</div>
				</div>
				<div className="track" {...trackProps} />
			</ScrollbarContainer>
		)
	}
)

CustomScrollbar.propTypes = {
	scrollDisabled: PropTypes.bool,
	innerClassName: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
}

CustomScrollbar.displayName = 'CustomScrollbar'

export default CustomScrollbar
