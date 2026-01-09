import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '@layouts/Layout';
import Seo from '@components/Seo';
import noiseImage from '@images/noise.gif';
import '../styles/404.css';

const NotFoundPage = () => {
	return (
		<Layout>
			<div className="console flex items-center w-screen h-screen">
				{/* Noise Effect */}
				<div
					className="noise"
					style={{ backgroundImage: `url(${noiseImage})` }}
				/>
				{/* Overlay */}
				<div className="overlay" />

				<div className="flex h-screen w-screen flex-col items-center justify-center p-6 font-mono text-yellow-400 text-lg">
					<div className="w-full max-w-xl rounded-lg border border-yellow-700 bg-yellow-950/10 p-8 shadow-[0_0_25px_rgba(234,179,8,0.25)]">
						<div className="mb-4 flex gap-2 border-b border-yellow-700 pb-2">
							<div className="h-3 w-3 rounded-full bg-red-500" />
							<div className="h-3 w-3 rounded-full bg-yellow-400" />
							<div className="h-3 w-3 rounded-full bg-green-500" />
						</div>

						<div className="space-y-4">
							<p>
								coding4rtist@portfolio:~${' '}
								<span className="text-white">access page</span>
							</p>

							<p className="text-red-400">
								Error 404: Location not found in current dimension.
							</p>

							<p>
								coding4rtist@portfolio:~${' '}
								<span className="text-white">trace route</span>
							</p>

							<p>
								Analyzing... <br />
								&gt; Sector 7G... Empty <br />
								&gt; Void... Infinite <br />
								&gt; Suggestion: Return to base
							</p>

							<p>
								coding4rtist@portfolio:~${' '}
								{/* <span className="text-white">trace route</span> */}
								<span className="caret ml-1 scale-x-[70%]">▮</span>
							</p>

							{/* Pac-Man & Ghost Easter Egg */}
							<div className="relative mt-8 h-12 w-full overflow-hidden border-b border-primary-500/20">
								{/* I Pallini (Sfondo statico) */}
								<div className="absolute inset-0 top-1/2 -translate-y-1/2 h-2 w-full bg-[radial-gradient(circle,_#333_2px,_transparent_2.5px)] bg-[length:20px_20px]"></div>

								{/* Gruppo che si muove: Fantasma + Pacman */}
								<div className="pac-chase-wrapper">
									{/* Pac-Man */}
									<div className="pacman-body">
										<div className="pacman-mouth"></div>
									</div>

									{/* Ghost (Blinky) */}
									<div className="ghost-body">
										<div className="ghost-eyes">
											<div className="eye left"></div>
											<div className="eye right"></div>
										</div>
										<div className="ghost-skirt"></div>
									</div>
								</div>
							</div>

							{/* Button */}
							<div className="mt-8">
								<Link
									to="/"
									className="group relative inline-flex items-center gap-2 overflow-hidden bg-primary-500 px-7 py-3 text-black font-bold hover:bg-primary-400 transition-all rounded shadow-[0_0_15px_rgba(234,179,8,0.4)]"
								>
									<span>./return_home.sh</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
export const Head = () => <Seo title="404: Not Found" />;
