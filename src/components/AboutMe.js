import * as React from 'react';
import Card from '@components/Card';
import Button from '@components/Button';
import avatarVideo from '@images/avatar_small.mp4';
import { LINKS } from '@lib/constants';

import { FaInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';

function AboutMeCard() {
	return (
		<Card colSpan="md:col-span-1" rowSpan="md:row-span-6 lg:row-span-8">
			<h1 className="m-0 font font-bold text-4xl text-primary-500 uppercase text-center">
				Coding4rtist
			</h1>
			<div className="flex flex-col items-center">
				<div className="overflow-hidden block mx-auto my-8 rounded-[50%]">
					<video
						draggable={false}
						src={avatarVideo}
						loop={true}
						playsInline={true}
						muted={true}
						controls={false}
						autoPlay={true}
					/>
				</div>
				<h1 className="m-0 font text-3xl text-slate-50">
					Hi, I'm <b className="font-bold text-primary-500">Carlo</b>
				</h1>
				<h3 className="m-0 font-light text-xl">Game Developer & 3D Artist</h3>
				<br />
				{/* <p className="text-base font-light">
					Beyond coding, I'm passionate about design, cinema, illustration and
					3D modelling and traveling.
				</p>
				<br /> */}
				<p className="text-base font-light">
					The nickname "Coding4rtist" (pronunced Coding Artist) reflects my
					passion for game development and art, showcasing my dual nature as
					both a logical thinker and a creative spirit. Additionally, "C.A."
					represents my initials, tying everything together.
				</p>
				<br />

				<div className="flex gap-4 justify-center">
					<a
						href={LINKS.instagram}
						aria-label="instagram profile"
						target="_blank"
						rel="noreferrer"
					>
						<Button aria-label="instagram profile">
							<FaInstagram className="h-6" />
							<span className="sr-only">Instagram Profile</span>
						</Button>
					</a>

					<a
						href={LINKS.twitter}
						aria-label="twitter profile"
						target="_blank"
						rel="noreferrer"
					>
						<Button aria-label="twitter profile">
							<FaXTwitter className="h-6" />
							<span className="sr-only">Linkedin Profile</span>
						</Button>
					</a>

					<a
						href={LINKS.youtube}
						aria-label="youtube profile"
						target="_blank"
						rel="noreferrer"
					>
						<Button aria-label="youtube profile">
							<FaYoutube className="h-6" />
							<span className="sr-only">YouTube Profile</span>
						</Button>
					</a>

					<a
						href={LINKS.linkedin}
						aria-label="linkedin profile"
						target="_blank"
						rel="noreferrer"
					>
						<Button aria-label="linkedin profile">
							<FaLinkedin className="h-6" />
							<span className="sr-only">LinkedIn Profile</span>
						</Button>
					</a>
				</div>
				<br />

				<div className="flex gap-4 justify-center">
					<a
						href={LINKS.email}
						aria-label="email profile"
						target="_blank"
						rel="noreferrer"
					>
						<Button aria-label="email profile">
							{/* <p className="m-0 font-light text-xl"> */}
							<FaEnvelope />
							<span>E-mail</span>
							{/* </p> */}
						</Button>
					</a>
					<a
						href={LINKS.discord}
						aria-label="discord profile"
						target="_blank"
						rel="noreferrer"
					>
						<Button aria-label="discord profile">
							{/* <p className="m-0 font-light text-xl"> */}
							<FaDiscord />
							<span>Join us on Discord</span>
							{/* </p> */}
						</Button>
					</a>
				</div>
			</div>
		</Card>
	);
}

export default AboutMeCard;
