import * as React from 'react';
import Card from '@components/Card';
import Carousel from '@components/Carousel';

function Contacts() {
	return (
		<Card colSpan="md:col-span-2" rowSpan="md:row-span-1" title="My Stack">
			<p className="text-sm font-light">
				Here's a snapshot of the primary tools and technologies I work with:
			</p>
			<ul className="text-sm font-light pl-5 list-disc">
				<li>
					<strong>Solidjs</strong>
				</li>
				<li>
					<strong>JavaScript</strong>
				</li>
				<li>
					<strong>Node.js</strong>
				</li>
				<li>
					<strong>React.js</strong>
				</li>
			</ul>
		</Card>
	);
}

export default Contacts;
