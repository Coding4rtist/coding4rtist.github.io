import * as React from 'react';
import Card from '@components/Card';
// import { LINKS } from '@lib/constants';

function Contacts() {
	return (
		<Card
			colSpan="md:col-span-1"
			rowSpan="md:row-span-5"
			title="Latest Artworks"
		>
			<div className="h-full">
				<header className="flex items-center">
					<h1 className="text-white text-xl font-bold">
						Let's start working together!
					</h1>
				</header>
				<address className="flex flex-col mt-4">
					<h2 className="text-gray-500">Contact Details</h2>
					<p>cavallogianmarco@gmail.com</p>
					<p>Italy</p>
				</address>
				<div className="flex flex-col mt-4 w-fit">
					<h2 className="text-gray-500">Socials</h2>
					{/* <ul>
						<li>
							<a href={LINKS.linkedin} target="_blank">
								Linkedin
							</a>
						</li>
						<li>
							<a href={LINKS.github} target="_blank">
								Github
							</a>
						</li>
						<li>
							<a href={LINKS.medium} target="_blank">
								Medium
							</a>
						</li>
						<li>
							<a href={LINKS.discord} target="_blank">
								Discord
							</a>
						</li>
					</ul> */}
				</div>
			</div>
		</Card>
	);
}

export default Contacts;
