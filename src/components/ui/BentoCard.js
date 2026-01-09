import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@lib/utils';

export function BentoCard({
	children,
	className,
	colSpan,
	rowSpan,
	delay = 0,
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: delay,
				type: 'spring',
				stiffness: 100,
				damping: 20,
			}}
			className={cn(
				'group relative flex flex-col overflow-hidden rounded-3xl bg-[#0f0f0f]',
				// Thin, dark base edge, bright yellow hover edge
				'border border-white/5 transition-colors duration-300 hover:border-primary-500/80',
				// Soft yellow shadow on hover
				'hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.15)]',
				colSpan,
				rowSpan,
				className
			)}
		>
			{/* Background noise texture */}
			<div
				className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			<div className="relative z-10 w-full h-full flex flex-col justify-center">
				{children}
			</div>
		</motion.div>
	);
}
