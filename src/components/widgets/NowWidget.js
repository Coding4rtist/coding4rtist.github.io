import React from 'react';
import { FaBolt } from 'react-icons/fa6';

export default function TimelineWidget() {
	return (
		<div className="flex flex-col justify-between h-full p-5">
			<div className="flex items-center justify-between mb-2">
				<h3 className="text-white font-bold text-lg drop-shadow-md flex items-center gap-2">
					<FaBolt className="text-primary-500 text-sm" /> Now
				</h3>
				<span className="relative flex h-2.5 w-2.5">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
				</span>
			</div>
			<div>
				{/* <p className="text-md">
					I'm working at AppIdeas on <i>MiniMonsters: Card Collector</i>.
				</p> */}
				<p className="text-md">
					In my free time I'm working on an update for{' '}
					<i>Who wants to be a murderer?</i>&nbsp; and on a brand new
					psycological horror game!
				</p>
			</div>
		</div>
	);
}
