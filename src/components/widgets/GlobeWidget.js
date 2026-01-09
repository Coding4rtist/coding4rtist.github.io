import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import worldData from '@lib/world.json';

const visitedCountries = [
	'Italy',
	'Vatican City',
	'Hungary',
	'Monaco',
	'Spain',
	'Czech Republic',
	'Turkey',
	'France',
	'Austria',
	'Romania',
	'Germany',
	'United Arab Emirates',
	'Japan',
	'Greece',
	'Poland',
	'Denmark',
	'Netherlands',
];

const GlobeWidget = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current || !worldData) return;

		const container = containerRef.current;

		const draw = () => {
			// Clear
			d3.select(container).selectAll('*').remove();

			const width = container.clientWidth;
			const height = container.clientHeight;

			// Calculate radius to fill well (about 80% of the smallest dimension)
			const minDim = Math.min(width, height);
			const scale = minDim / 2.2;

			const projection = d3
				.geoOrthographic()
				.scale(scale)
				.center([0, 0])
				.rotate([0, -30])
				.translate([width / 2, height / 2]);

			const pathGenerator = d3.geoPath().projection(projection);

			const svg = d3
				.select(container)
				.append('svg')
				.attr('width', width)
				.attr('height', height)
				.style('display', 'block'); // Remove spaces below svg

			// Globe (ocean) background
			svg
				.append('circle')
				.attr('fill', '#0a0a0a')
				.attr('stroke', '#333')
				.attr('stroke-width', 1)
				.attr('cx', width / 2)
				.attr('cy', height / 2)
				.attr('r', scale);

			const map = svg.append('g');

			// Countries
			map
				.selectAll('path')
				.data(worldData.features)
				.enter()
				.append('path')
				.attr('d', pathGenerator)
				.attr('fill', d =>
					visitedCountries.includes(d.properties.name) ? '#eab308' : '#262626'
				)
				.attr('stroke', '#0a0a0a')
				.attr('stroke-width', 0.5);

			// Auto-rotation
			const rotate = d3.timer(elapsed => {
				const rotate = projection.rotate();
				projection.rotate([rotate[0] + 0.15, rotate[1]]);
				svg.selectAll('path').attr('d', pathGenerator);
			});

			return () => rotate.stop();
		};

		// Render
		const cleanup = draw();

		// Handle Resize
		const resizeObserver = new ResizeObserver(() => {
			draw();
		});
		resizeObserver.observe(container);

		return () => {
			if (cleanup) cleanup();
			resizeObserver.disconnect();
		};
	}, []);

	return <div ref={containerRef} className="w-full h-full min-h-[200px]" />;
};

export default GlobeWidget;
