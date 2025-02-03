import * as React from 'react';
import Content from './Content';
import { motion } from 'framer-motion';

const cardVariants = {
	hidden: { y: '40%', opacity: 0 },
	show: {
		y: '0%',
		opacity: 1,
		transition: {
			type: 'spring',
			velocity: 100,
			stiffness: 50,
			damping: 10,
		},
	},
};

function Card({
	title,
	body,
	children,
	colSpan,
	rowSpan,
	href,
	colorText,
	height,
	justify,
}) {
	return (
		<motion.div
			className={`card flex flex-col h-max sm:h-auto group overflow-hidden transform-y-[-40%] bg-darkslate-500 shadow-lg rounded-3xl p-6 border border-darkslate-100 hover:border-primary-500 align-start flex-none ${
				height || 'h-full'
			}  relative transform perspective-1200 w-full transition duration-75 ease-in-out col-span-1 ${
				colSpan || 'md:col-span-2'
			} ${rowSpan || ''} ${justify || 'justify-start'}`}
			variants={cardVariants}
		>
			{href ? (
				<a href={href} className={`h-full w-full ${colorText || ' '}`}>
					{/* <Icon
						name="ri:arrow-right-up-line"
						className="h-6 float-right group-hover:text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out duration-100 z-20"
					/> */}
					<Content title={title} body={body}>
						{children}
					</Content>
				</a>
			) : (
				<Content title={title} body={body} colorText={colorText}>
					{children}
				</Content>
			)}
		</motion.div>
	);
}

export default Card;
