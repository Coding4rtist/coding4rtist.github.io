import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Transition = ({ children, location }) => {
	const duration = 0.3

	const variants = {
		initial: {
			// y: '100vh',
			opacity: 0,
		},
		enter: {
			// zIndex: 1,
			// y: 0,
			opacity: 1,
			transition: {
				duration: duration,
				delay: duration,
				when: 'beforeChildren',
			},
		},
		exit: {
			// zIndex: 0,
			// y: '-100vh',
			opacity: 0,
			transition: { duration: duration },
		},
	}

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				key={location.pathname}
				variants={variants}
				initial="initial"
				animate="enter"
				exit="exit"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export default Transition
