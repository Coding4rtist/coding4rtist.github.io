import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import Layout from '@layouts/Layout';
import Seo from '@components/Seo';
import Card from '@components/Card';
import AboutMe from '@components/AboutMe';
import ArtCard from '@components/Art';
import GamesCard from '@components/Games';
import Now from '@components/Now';
import Globe from '@components/Globe';
import TimelineCard from '@components/Timeline';

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
		},
	},
};

const IndexPage = () => {
	const query = graphql`
		query {
			allContentfulProject(
				limit: 5
				sort: { fields: [date], order: DESC }
				filter: { featured: { eq: true } }
			) {
				edges {
					node {
						id
						title
						subtitle
						date
						thumbnail {
							gatsbyImageData(
								width: 1000
								layout: CONSTRAINED
								placeholder: DOMINANT_COLOR
								formats: [AUTO, WEBP]
							)
						}
						buttons {
							id
							title
							url
						}
					}
				}
			}
			allContentfulArt(
				limit: 5
				sort: { fields: [date], order: DESC }
				filter: { featured: { eq: true } }
			) {
				edges {
					node {
						id
						title
						subtitle
						date
						thumbnail {
							gatsbyImageData(
								height: 1000
								layout: CONSTRAINED
								placeholder: DOMINANT_COLOR
								formats: [AUTO, WEBP]
							)
						}
						buttons {
							id
							title
							url
						}
					}
				}
			}
		}
	`;

	const result = useStaticQuery(query);
	const projects = result.allContentfulProject.edges.map(el => el.node);
	const artworks = result.allContentfulArt.edges.map(el => el.node);
	// console.log(projects, artworks);

	return (
		<Layout
			title="Coding4rtist"
			description="I'm a Game Developer and 3D Artist based in Italy."
			className=""
		>
			<motion.main
				className="text-white m-auto p-2 grid gap-2 max-w-[115rem] overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:h-screen md:gap-3 md:p-6 xl:h-screen xl:grid-rows-8 xl:grid-cols-4 xl:gap-4 xl:max-h-[90%]"
				variants={containerVariants}
				initial="hidden"
				animate="show"
			>
				<AboutMe />
				<Now />
				<GamesCard items={projects} />
				<ArtCard items={artworks} />
				<TimelineCard />
				<Card
					colSpan="md:col-span-1"
					rowSpan="md:row-span-3"
					title="Countries I visited"
				>
					<div className="h-full w-full absolute inset-0">
						<Globe />
					</div>
				</Card>
				<Card
					colSpan="md:col-span-1"
					rowSpan="md:row-span-1"
					justify="justify-center"
				>
					<p className="text-2xl text-center underline underline-offset-8 decoration-3 decoration-primary-500">
						Always learning. Always improving.
					</p>
				</Card>
				<Card
					colSpan="md:col-span-1"
					rowSpan="md:row-span-1"
					justify="justify-center"
				>
					<p className="text-xl text-center">
						© 2025 · Crafted with 💛 by Coding4rtist.
					</p>
				</Card>
			</motion.main>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <Seo />;
