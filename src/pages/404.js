import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '@components/Seo';
import Button from '@components/Button';
import icon404 from '@images/404.png';
import noiseImage from '@images/noise.gif';

import '../styles/404.css';

const NotFoundPage = () => {
	return (
		<main className="console flex items-center w-screen h-screen">
			{/* Noise Effect */}
			<div
				className="noise"
				style={{ backgroundImage: `url(${noiseImage})` }}
			/>
			{/* Overlay */}
			<div className="overlay" />

			{/* Terminal */}
			<div className="flex flex-col items-center select-none z-20 mx-auto max-w-3xl p-8 text-white text-center">
				<img src={icon404} alt="" className="w-52 h-52 flex" />
				<h1 className="text-5xl md:text-8xl font-bold text-white  uppercase">
					Error 404
				</h1>
				<h3 className="output my-4 text-2xl md:text-4xl text-primary-400 uppercase">
					Look like you're lost
				</h3>
				<p className="my-4 text-xl text-white mb-10">
					The page you are looking for does not exist.
				</p>
				<Link to="/">
					<Button>
						<span>Go to Home</span>
					</Button>
				</Link>
			</div>
		</main>
	);
};

export default NotFoundPage;

export const Head = () => <Seo />;
