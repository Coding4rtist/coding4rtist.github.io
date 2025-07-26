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

const GlobeComponent = () => {
	const mapContainer = useRef(null);

	useEffect(() => {
		if (!mapContainer.current) return;

		const width = mapContainer.current.clientWidth;
		const height = 500;
		const sensitivity = 75;

		const projection = d3
			.geoOrthographic()
			.scale(330)
			.center([0, 0])
			.rotate([0, -30])
			.translate([width / 2, height / 2]);

		const initialScale = projection.scale();
		const pathGenerator = d3.geoPath().projection(projection);

		const svg = d3
			.select(mapContainer.current)
			.append('svg')
			.attr('width', width)
			.attr('height', height);

		svg
			.style('width', '100%')
			.style('height', '100%')
			.append('circle')
			.attr('fill', '#171717')
			.attr('stroke', '#323232')
			.attr('stroke-width', '0.2')
			.attr('cx', width / 2)
			.attr('cy', height / 2)
			.attr('r', initialScale);

		const map = svg.append('g');

		map
			.append('g')
			.attr('class', 'countries')
			.selectAll('path')
			.data(worldData.features)
			.enter()
			.append('path')
			.attr('d', d => pathGenerator(d))
			.attr('fill', ({ properties: { name } }) =>
				visitedCountries.includes(name) ? '#eab308' : '#333230'
			)
			.style('stroke', 'black')
			.style('stroke-width', 0.3)
			.style('opacity', 0.8);

		const rotateMap = () => {
			const rotate = projection.rotate();
			const k = sensitivity / projection.scale();
			projection.rotate([rotate[0] - 1 * k, rotate[1]]);
			svg.selectAll('path').attr('d', pathGenerator);
		};

		const timer = d3.timer(rotateMap, 200);

		// Cleanup on unmount
		return () => {
			timer.stop();
			svg.remove();
		};
	}, []);

	return (
		<div
			className="flex flex-col text-white justify-center items-center w-full h-full"
			ref={mapContainer}
		></div>
	);
};

export default GlobeComponent;
