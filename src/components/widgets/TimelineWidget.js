import React from 'react';
import { FaRoute } from 'react-icons/fa6';

const events = [
	{
		year: 'Mar 2022 - Now',
		title: 'Game Developer',
		company: 'App Ideas Games',
		active: true,
	},
	{
		year: 'Jan 2022',
		title: "Bachelor's Degree in Computer Engineering",
		company: 'University of Naples Federico II',
		active: false,
	},
	{
		year: 'May 2018 - Now',
		title: 'Game Developer & 3D Artist',
		company: 'Coding4rtist (Self Employed)',
		active: true,
	},
];

export default function TimelineWidget() {
	return (
		<div className="p-6 h-full flex flex-col">
			{/* Header Nuovo */}
			<div className="flex items-center gap-2 mb-6 opacity-80">
				<FaRoute className="text-primary-500" size={16} />
				<h3 className="text-white font-bold text-sm uppercase tracking-widest">
					Journey
				</h3>
			</div>

			<div className="relative flex-1">
				{/* 
            Vertical Line
            Alignment Axis: 20px from left
            Line Width: 4px -> Center is 2px.
            Left Position: 20px - 2px = 18px.
          */}
				<div className="absolute left-[18px] top-2 bottom-2 w-[4px] bg-white/10 rounded-full" />

				<div className="space-y-8">
					{events.map((e, i) => (
						<div key={i} className="relative pl-12 group">
							{/* 
                  Dot
                  Alignment Axis: 20px from left
                  Dot Width: 16px (w-4) -> Center is 8px.
                  Left Position: 20px - 8px = 12px.
                */}
							<div
								className={`absolute left-[12px] top-1 h-4 w-4 rounded-full border-[3px] border-[#0f0f0f] z-10 transition-all duration-300 ${
									e.active
										? 'bg-primary-500 shadow-[0_0_12px_rgba(234,179,8,0.6)] scale-110'
										: 'bg-gray-700 group-hover:bg-primary-400 group-hover:scale-110'
								}`}
							/>

							{/* Content */}
							<div className="flex flex-col">
								<span
									className={`text-xs font-mono font-bold mb-0.5 ${
										e.active ? 'text-primary-400' : 'text-gray-500'
									}`}
								>
									{e.year}
								</span>
								<h4 className="text-lg font-bold text-gray-100 group-hover:text-primary-500 transition-colors">
									{e.title}
								</h4>
								<p className="text-xs text-gray-400 font-medium">{e.company}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
