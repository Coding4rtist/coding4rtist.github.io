import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaChevronLeft, FaChevronRight, FaGamepad } from 'react-icons/fa';
import Button from '@components/ui/Button';

export default function ProjectCarousel({ items, isArt = false, title }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 25 }, [
		Autoplay({ delay: 6000, stopOnInteraction: false }),
	]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on('select', onSelect);
	}, [emblaApi, onSelect]);

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi]
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi]
	);

	const formatDate = dateString => {
		if (!dateString) return '';
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('en-US', {
			month: 'short',
			year: 'numeric',
		}).format(date);
	};

	if (!items?.length) return null;

	return (
		<div className="relative w-full h-full group select-none">
			<div className="overflow-hidden w-full h-full" ref={emblaRef}>
				<div className="flex w-full h-full touch-pan-y">
					{items.map(item => {
						// const image = getImage(item.thumbnail);
						const isGif = item.thumbnail?.file?.contentType === 'image/gif';
						const image = !isGif
							? getImage(item.thumbnail?.gatsbyImageData)
							: null;

						return (
							<div
								className="relative flex-[0_0_100%] min-w-0 w-full h-full"
								key={item.id}
							>
								{/* 1. Full Cover Image */}
								<div className="absolute inset-0 w-full h-full pointer-events-none">
									{isGif ? (
										<img
											src={item.thumbnail.file.url}
											alt={item.title || 'Project GIF'}
											className="w-full h-full object-cover"
											loading="lazy"
										/>
									) : image ? (
										<GatsbyImage
											image={image}
											alt={item.title || 'Project Image'}
											className="w-full h-full"
											imgStyle={{ objectFit: 'cover' }}
										/>
									) : (
										<div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
											<FaGamepad size={64} className="opacity-10" />
										</div>
									)}
								</div>

								{/* 2. Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent opacity-95" />

								{/* 3. Text Content */}
								<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-start z-10">
									{/* Date Badge */}
									<div className="mb-3 flex items-center gap-2">
										<span className="text-[10px] font-bold text-black bg-primary-500 px-2 py-0.5 rounded uppercase tracking-wider">
											{isArt ? 'Art' : 'Game'}
										</span>
										<span className="text-xs font-mono text-gray-400">
											{formatDate(item.date)}
										</span>
									</div>

									<h3 className="text-3xl lg:text-4xl font-bold text-white leading-none mb-4 drop-shadow-lg">
										{item.title}
									</h3>

									{/* Buttons List */}
									<div className="flex flex-wrap gap-3 mt-2">
										{item.buttons &&
											item.buttons.map(btn => (
												<Button
													key={btn.id}
													href={btn.url}
													variant={'hybrid'}
													icon={!isArt && FaGamepad}
												>
													{btn.title}
												</Button>
											))}
										{(!item.buttons || item.buttons.length === 0) && (
											<span className="text-xs text-gray-500 italic">
												No links available
											</span>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Title Overlay (Top Left) */}
			<div className="absolute top-6 left-6 z-20 pointer-events-none">
				<h4 className="text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
					{title}
				</h4>
			</div>

			{/* Navigation Controls */}
			<div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-30 duration-300">
				<button
					onClick={scrollPrev}
					className="bg-black/40 hover:bg-white hover:text-black border border-white/10 text-white p-3 rounded-full backdrop-blur-md transition-all"
				>
					<FaChevronLeft size={14} />
				</button>
				<button
					onClick={scrollNext}
					className="bg-black/40 hover:bg-white hover:text-black border border-white/10 text-white p-3 rounded-full backdrop-blur-md transition-all"
				>
					<FaChevronRight size={14} />
				</button>
			</div>

			{/* Dots */}
			<div className="absolute bottom-8 right-8 flex gap-1.5 z-20">
				{items.map((_, i) => (
					<div
						key={i}
						className={`h-1.5 rounded-full transition-all duration-500 ${
							i === selectedIndex ? 'w-6 bg-primary-500' : 'w-1.5 bg-white/20'
						}`}
					/>
				))}
			</div>
		</div>
	);
}
