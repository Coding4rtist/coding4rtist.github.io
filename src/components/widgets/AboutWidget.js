import React from 'react';
import {
	FaInstagram,
	FaYoutube,
	FaXTwitter,
	FaEnvelope,
	FaLinkedin,
	FaDiscord,
} from 'react-icons/fa6';
import {
	SiUnity,
	SiAdobephotoshop,
	SiBlender,
	SiReact,
	SiGit,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import avatarVideo from '@images/avatar_small.mp4';
import Button from '@components/ui/Button';
import { LINKS } from '@lib/constants';

const TechIcon = ({ icon: Icon, name }) => (
	<div className="group/tech flex flex-col items-center justify-center gap-1 p-2 rounded-lg hover:bg-white/5 transition-colors">
		<Icon
			size={18}
			className="text-gray-500 group-hover/tech:text-primary-400 transition-colors"
		/>
		<span className="text-[9px] text-gray-600 group-hover/tech:text-gray-300 uppercase tracking-wider opacity-0 group-hover/tech:opacity-100 transition-opacity absolute -top-4 bg-black/80 px-2 py-0.5 rounded">
			{name}
		</span>
	</div>
);

const SocialLink = ({ href, icon: Icon }) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-110 transition-all duration-300"
	>
		<Icon size={18} />
	</a>
);

export default function AboutWidget() {
	return (
		<div className="flex flex-col items-center h-full w-full text-center py-8 px-6 lg:py-10 relative">
			{/* 1. HERO SECTION: Avatar & Titles */}
			<div className="flex flex-col items-center justify-center flex-grow-[2]">
				{/* Avatar Container */}
				<div className="relative group mb-6">
					{/* Rotating Rings Effect */}
					<div className="absolute -inset-4 border border-dashed border-white/10 rounded-full w-[calc(100%+2rem)] h-[calc(100%+2rem)] animate-[spin_10s_linear_infinite] opacity-30 group-hover:opacity-50"></div>
					<div className="absolute -inset-1 bg-gradient-to-tr from-primary-600 to-transparent rounded-full blur-md opacity-20 group-hover:opacity-60 transition duration-700"></div>

					{/* <h1 className="m-0 font font-bold text-4xl text-primary-500 uppercase text-center">
						Coding4rtist
					</h1> */}

					{/* Video */}
					<div className="relative w-52 h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-[3px] border-[#1a1a1a] bg-black shadow-2xl z-10">
						<video
							src={avatarVideo}
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
						/>
					</div>
				</div>

				{/* Text Info */}
				<div className="space-y-3 max-w-sm">
					<h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
						Hi, I'm{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-200">
							Carlo
						</span>
						.
					</h1>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
						<span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
						<h2 className="text-xs font-mono text-gray-300 uppercase tracking-widest">
							Game Developer & 3D Artist
						</h2>
					</div>
					<p className="text-gray-400 text-sm leading-relaxed pt-2">
						The nickname "Coding4rtist" (pronunced Coding Artist) reflects my
						passion for game development and art, showcasing my dual nature as
						both a logical thinker and a creative spirit. Additionally, "C.A."
						represents my initials, tying everything together.
					</p>
				</div>
			</div>

			{/* 2. ACTIONS: Buttons & Socials */}
			<div className="w-full flex flex-col gap-6 flex-grow-[1] justify-center max-w-xs m-4">
				{/* Buttons */}
				<div className="flex flex-col gap-3 w-full">
					<Button
						href={LINKS.email}
						aria-label="email"
						icon={FaEnvelope}
						variant="hybrid"
						className="w-full"
					>
						Get in Touch
					</Button>
					<Button
						href={LINKS.discord}
						aria-label="discord"
						icon={FaDiscord}
						variant="hybrid"
						className="w-full"
					>
						Join us on Discord
					</Button>
				</div>

				{/* Social Icons Row */}
				<div className="flex justify-center gap-4">
					<SocialLink
						href={LINKS.instagram}
						aria-label="instagram"
						icon={FaInstagram}
					/>
					<SocialLink
						href={LINKS.twitter}
						aria-label="twitter"
						icon={FaXTwitter}
					/>
					<SocialLink
						href={LINKS.youtube}
						aria-label="linkedin"
						icon={FaYoutube}
					/>
					<SocialLink
						href={LINKS.linkedin}
						aria-label="twitter"
						icon={FaLinkedin}
					/>
				</div>
			</div>

			{/* 3. FOOTER: Tech Arsenal */}
			<div className="mt-auto pt-8 w-full border-t border-white/5">
				<p className="text-[10px] text-gray-600 uppercase tracking-widest mb-3 font-bold">
					Main Arsenal
				</p>
				<div className="flex justify-center gap-2 flex-wrap px-2">
					<TechIcon icon={SiUnity} name="Unity" />
					<TechIcon icon={TbBrandCSharp} name="C#" />
					<TechIcon icon={SiBlender} name="Blender" />
					<TechIcon icon={SiReact} name="React" />
					<TechIcon icon={SiAdobephotoshop} name="Photoshop" />
					<TechIcon icon={SiGit} name="Git" />
				</div>
			</div>
		</div>
	);
}
