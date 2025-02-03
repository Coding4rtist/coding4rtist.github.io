import * as React from 'react';
import Card from '@components/Card';
import EmblaCarousel from './Carousel/EmblaCarousel';

const OPTIONS = { loop: true };

function Games({ items }) {
	return (
		<Card colSpan="xl:col-span-2" rowSpan="md:row-span-4" title="Latest Games">
			<EmblaCarousel slides={items} options={OPTIONS} />
		</Card>
	);
}

export default Games;
