import React from 'react';

export default function Button({
	children,
	href,
	icon: Icon,
	className,
	variant = 'hybrid',
}) {
	const baseStyles =
		'relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 select-none cursor-pointer overflow-hidden group';

	const variants = {
		// Yellow
		primary:
			'bg-primary-500 text-black hover:bg-primary-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] border border-primary-500',

		// Ghost
		secondary:
			'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md',

		// Ghost -> Primary on Hover
		hybrid:
			'bg-white/5 border border-white/10 text-gray-200 backdrop-blur-md hover:bg-primary-500 hover:text-black hover:border-primary-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]',

		outline:
			'bg-transparent text-primary-500 border border-primary-500/50 hover:bg-primary-500/10 hover:border-primary-500',
	};

	const Component = href ? 'a' : 'button';
	const props = href ? { href, target: '_blank', rel: 'noreferrer' } : {};

	return (
		<Component
			className={`${baseStyles} ${variants[variant]} ${className || ''}`}
			{...props}
		>
			{Icon && (
				<Icon
					className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
					size={16}
				/>
			)}
			<span className="relative z-10">{children}</span>{' '}
		</Component>
	);
}
