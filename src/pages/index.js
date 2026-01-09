import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '@layouts/Layout';
import Seo from '@components/Seo';
import { BentoCard } from '@components/ui/BentoCard';
import AboutWidget from '@components/widgets/AboutWidget';
import ProjectCarousel from '@components/widgets/ProjectCarousel';
import GlobeWidget from '@components/widgets/GlobeWidget';
import TimelineWidget from '@components/widgets/TimelineWidget';
import NowWidget from '@components/widgets/NowWidget';
import { FaPlane } from 'react-icons/fa6';

const IndexPage = ({ data }) => {
	const projects = data.allContentfulProject.edges.map(el => el.node);
	const artworks = data.allContentfulArt.edges.map(el => el.node);

	return (
		<Layout>
			{/* 
        GRID SYSTEM:
        - Mobile (< 768px): Flex Column (Scrollable), altezza minima garantita per card.
        - Tablet/Laptop (768px - 1280px): Grid 2 Colonne. Layout ottimizzato per evitare "squeeze".
        - Desktop (> 1280px): Grid 4 Colonne (Dashboard fissa).
      */}
			<div className="w-full min-h-screen xl:h-screen xl:max-h-screen p-4 md:p-8 xl:p-10 flex flex-col items-center justify-center overflow-x-hidden xl:overflow-hidden">
				<div className="w-full max-w-[1920px] h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-6 gap-4 md:gap-6 auto-rows-min xl:auto-rows-fr">
					{/* 1. ABOUT WIDGET */}
					<BentoCard
						colSpan="md:col-span-1 xl:col-span-1"
						rowSpan="md:row-span-2 xl:row-span-6"
						delay={0.1}
						className="order-1 min-h-[500px] md:min-h-[auto]"
					>
						<AboutWidget />
					</BentoCard>

					{/* 2. NOW  */}
					<BentoCard
						colSpan="md:col-span-1 xl:col-span-1"
						rowSpan="md:row-span-1 xl:row-span-1"
						delay={0.2}
						className="order-2 min-h-[160px]"
					>
						<NowWidget />
					</BentoCard>

					{/* 4. ARTWORKS */}
					<BentoCard
						colSpan="md:col-span-1 xl:col-span-1"
						rowSpan="md:row-span-2 xl:row-span-4"
						delay={0.4}
						className="order-4 md:order-3 xl:order-4 p-0 min-h-[400px] md:min-h-[500px] xl:min-h-0"
					>
						<ProjectCarousel
							items={artworks}
							isArt={true}
							title="3D Artworks"
						/>
					</BentoCard>

					{/* 3. PROJECTS */}
					<BentoCard
						colSpan="md:col-span-1 xl:col-span-2"
						rowSpan="md:row-span-1 xl:row-span-3"
						delay={0.3}
						className="order-3 md:order-4 xl:order-3 p-0 min-h-[350px] md:min-h-[400px] xl:min-h-0"
					>
						<ProjectCarousel items={projects} title="Latest Games" />
					</BentoCard>

					{/* 5. TIMELINE */}
					<BentoCard
						colSpan="md:col-span-1 xl:col-span-1"
						rowSpan="md:row-span-2 xl:row-span-3"
						delay={0.5}
						className="order-5 overflow-y-auto no-scrollbar min-h-[350px] xl:min-h-0"
					>
						<TimelineWidget />
					</BentoCard>

					{/* 6. COUNTRIES VISITED */}
					<BentoCard
						colSpan="md:col-span-1 xl:col-span-1"
						rowSpan="md:row-span-2 xl:row-span-2"
						delay={0.6}
						className="order-6 p-0 min-h-[350px] xl:min-h-0"
					>
						<div className="absolute inset-0 w-full h-full ">
							<GlobeWidget />
							<div className="absolute top-5 left-5 pointer-events-none z-10">
								<h3 className="text-white font-bold text-lg drop-shadow-md flex items-center gap-2">
									<FaPlane className="text-primary-500 text-sm transform -rotate-45" />{' '}
									Visited Countries
								</h3>
							</div>
						</div>
					</BentoCard>

					{/* 7. ALWAYS LEARNING */}
					<BentoCard
						colSpan="md:col-span-1 xl:col-span-1"
						rowSpan="md:row-span-1 xl:row-span-1"
						delay={0.7}
						className="order-7 flex items-center justify-center min-h-[180px] md:min-h-[200px] xl:min-h-0"
					>
						<p className="text-2xl text-center underline underline-offset-8 decoration-3 decoration-primary-500">
							Always learning. Always improving.
						</p>
					</BentoCard>

					{/* 8. FOOTER / CRAFTED WITH */}
					<BentoCard
						colSpan="md:col-span-1 xl:col-span-1"
						rowSpan="md:row-span-1 xl:row-span-1"
						delay={0.8}
						className="order-8 flex flex-col justify-center items-center text-center group cursor-default min-h-[180px] md:min-h-[200px] xl:min-h-0"
					>
						<p className="text-xl text-center">
							© 2026 · Crafted with{' '}
							<span className="inline-block transition-transform group-hover:animate-heartbeat text-primary-500">
								💛
							</span>{' '}
							by Coding4rtist.
						</p>
					</BentoCard>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
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
					date
					thumbnail {
						gatsbyImageData(
							width: 1200
							layout: CONSTRAINED
							placeholder: BLURRED
							formats: [AUTO, WEBP]
						)
						file {
							url
							contentType
						}
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
					date
					thumbnail {
						gatsbyImageData(
							width: 800
							layout: CONSTRAINED
							placeholder: BLURRED
							formats: [AUTO, WEBP]
							aspectRatio: 0.8
						)
						file {
							url
							contentType
						}
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

export const Head = () => <Seo />;
