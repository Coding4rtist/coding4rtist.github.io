import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import Button from '@components/Button';

const TWEEN_FACTOR_BASE = 0.2;

const EmblaCarousel = ({ slides, options, objectFit }) => {
	const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({ playOnInit: true, delay: 5000 }),
	]);
	const tweenFactor = useRef(0);
	const tweenNodes = useRef([]);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const setTweenNodes = useCallback(emblaApi => {
		tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
			return slideNode.querySelector('.embla__parallax__layer');
		});
	}, []);

	const setTweenFactor = useCallback(emblaApi => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);

	const tweenParallax = useCallback((emblaApi, eventName) => {
		const engine = emblaApi.internalEngine();
		const scrollProgress = emblaApi.scrollProgress();
		const slidesInView = emblaApi.slidesInView();
		const isScrollEvent = eventName === 'scroll';

		emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
			let diffToTarget = scrollSnap - scrollProgress;
			const slidesInSnap = engine.slideRegistry[snapIndex];

			slidesInSnap.forEach(slideIndex => {
				if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

				if (engine.options.loop) {
					engine.slideLooper.loopPoints.forEach(loopItem => {
						const target = loopItem.target();

						if (slideIndex === loopItem.index && target !== 0) {
							const sign = Math.sign(target);

							if (sign === -1) {
								diffToTarget = scrollSnap - (1 + scrollProgress);
							}
							if (sign === 1) {
								diffToTarget = scrollSnap + (1 - scrollProgress);
							}
						}
					});
				}

				const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
				const tweenNode = tweenNodes.current[slideIndex];
				tweenNode.style.transform = `translateX(${translate}%)`;
			});
		});
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenNodes(emblaApi);
		setTweenFactor(emblaApi);
		tweenParallax(emblaApi);

		emblaApi
			.on('reInit', setTweenNodes)
			.on('reInit', setTweenFactor)
			.on('reInit', tweenParallax)
			.on('scroll', tweenParallax)
			.on('slideFocus', tweenParallax);
	}, [emblaApi, tweenParallax, setTweenNodes, setTweenFactor]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map(slide => {
						const image = getImage(slide.thumbnail);
						// const description =
						// 	slide.slug != null ? slide.subtitle : '3D Render';
						const dateString = new Date(slide.date).toLocaleString(
							'en-US',
							dateOptions
						);
						const buttons = slide.buttons || [];

						return (
							<div className="embla__slide" key={slide.id}>
								<div className="embla__parallax">
									<div className="embla__parallax__layer">
										<GatsbyImage
											image={image}
											alt={slide.title}
											objectFit={objectFit}
											class="embla__slide__img embla__parallax__img"
										/>
										<div className="absolute w-full h-full flex flex-col bg-[radial-gradient(_rgba(0,0,0,0.2)_60%,rgba(0,0,0,0.7)_130%_)] text-white transition-opacity duration-200 ease-[ease] p-4 select-none">
											<h2 className="text-gray-100 text-4xl font-bold drop-shadow-lg">
												{slide.title}
											</h2>
											<h3 className="text-gray-100 text-xl drop-shadow-lg">
												{dateString}
											</h3>
											<div className="flex gap-4 justify-center self-end mt-auto pb-2 pr-2">
												{buttons.map(button => (
													<a
														key={button.id}
														href={button.url}
														aria-label={button.title}
														target="_blank"
														rel="noreferrer"
													>
														<Button>{button.title}</Button>
													</a>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="embla__controls">
				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'embla__dot'.concat(
								index === selectedIndex ? ' embla__dot--selected' : ''
							)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;
