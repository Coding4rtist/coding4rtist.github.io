import * as React from 'react';
import Card from '@components/Card';

function TimelineCard() {
	return (
		<Card
			colSpan="md:col-span-1"
			rowSpan="md:row-span-4 flex gap-4"
			title="Timeline"
		>
			<div className="mt-2 space-y-6">
				<div>
					<h4 className="text-2xl font-medium">
						<span className="w-4 h-4 mr-2 inline-block rounded-full bg-primary-500" />
						Game Developer
					</h4>
					<p className="text-md text-primary-600">App Ideas Games</p>
					<p className="text-sm text-gray-500">Mar 2022 - Now</p>
				</div>
				<div>
					<h4 className="text-2xl font-medium">
						<span className="w-4 h-4 mr-2 inline-block rounded-full bg-primary-500" />
						Game Developer & 3D Artist
					</h4>
					<p className="text-md text-primary-600">
						Coding4rtist (Self Employed)
					</p>
					<p className="text-sm text-gray-500">2018 - Now</p>
				</div>
				<div>
					<h4 className="text-2xl font-medium">
						<span className="w-4 h-4 mr-2 inline-block rounded-full bg-primary-500" />
						Bachelor's Degree in Computer Engineering
					</h4>
					<p className="text-md text-primary-600">
						University of Naples Federico II
					</p>
					<p className="text-sm text-gray-500">Jan 2022</p>
				</div>
			</div>
		</Card>
	);
}

export default TimelineCard;
