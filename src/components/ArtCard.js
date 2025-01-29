import * as React from 'react';
import Card from '@components/Card';
import EmblaCarousel from './Carousel/EmblaCarousel';

const OPTIONS = { loop: true };

function Art({ items }) {
	return (
		<Card
			colSpan="md:col-span-1"
			rowSpan="md:row-span-5"
			title="Latest Artworks"
		>
			<EmblaCarousel slides={items} options={OPTIONS} />
		</Card>
	);
}

export default Art;
