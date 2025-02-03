import * as React from 'react';
import Card from '@components/Card';
import Pulse from '@components/Pulse';

function NowCard() {
	return (
		<Card colSpan="md:col-span-1" rowSpan="md:row-span-2">
			<div className="flex justify-between w-full items-center mb-2">
				<h2 className="text-3xl font-bold">Now</h2>
				<div className="flex flex-col">
					{/* <span className="text-xs text-gray-500 cursor-pointer">what's that ?</span> */}
				</div>
				<Pulse />
			</div>
			<p className="text-md">
				I'm working at AppIdeas on <i>MiniMonsters: Card Collector</i>.
			</p>
			<br />
			<p className="text-md">
				In my free time I'm working on an update for{' '}
				<i>Who wants to be a murderer?</i>&nbsp; and on a brand new psycological
				horror game!
			</p>
		</Card>
	);
}

export default NowCard;
