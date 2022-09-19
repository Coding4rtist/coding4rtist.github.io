import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Layout from '@components/Layout'
import SEO from '@components/seo'
// import SectionTitle from '@components/SectionTitle'
import { AnimatePresence, LayoutGroup } from 'framer-motion'

import { Link } from 'gatsby'
// import * as styles from './code.module.scss'
// import VideoPlayer from '@components/VideoPlayer'
// import { ArtItem } from '@components/Gallery/ArtItem'
// import { CodeGallery } from '@components/Gallery'
import { getImage } from 'gatsby-plugin-image'

import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from '@context/globalContext'

import { PageContent } from '@styles/globalStyles'
import { Projects } from '@styles/codeStyles'

import SectionTitle from '@components/sectionTitle'
import Project from '@components/codePage/project'
import Filter from '@components/codePage/filter'
import Footer from '@components/footer'

const query = graphql`
	query {
		allContentfulStatus(sort: { fields: order }) {
			nodes {
				slug
				title
				order
			}
		}
		allContentfulProject(sort: { fields: [date], order: DESC }) {
			edges {
				node {
					id
					slug
					title
					subtitle
					date
					thumbnail {
						gatsbyImageData(
							width: 1000
							layout: CONSTRAINED
							placeholder: TRACED_SVG
							formats: [AUTO, WEBP]
						)
					}
					status {
						slug
						title
					}
				}
			}
		}
		file(relativePath: { eq: "banner3.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`

const CodePage = props => {
	// const result = useStaticQuery(query);
	// const projects = result.allContentfulProject.edges;
	// console.log(projects)
	const href = typeof window !== `undefined` ? window.location.href : ''
	const result = useStaticQuery(query)
	const filters = result.allContentfulStatus.nodes

	const [projects, setProjects] = useState([])
	const [filtered, setFiltered] = useState([])
	const [activeFilter, setActiveFilter] = useState('')

	useEffect(() => {
		FetchProjects()
	}, [])

	const FetchProjects = () => {
		const allProjects = result.allContentfulProject.edges.map(element => {
			// let isVideo = element.node.image.file.contentType.indexOf('video') !== -1;
			// console.log(element)
			let image = getImage(element.node.thumbnail)
			return {
				...element.node,
				thumbnail: image,
				ratio: image.width / image.height,
			}
		})
		console.log(allProjects)

		setProjects(allProjects)
		setFiltered(allProjects)
	}

	useEffect(() => {
		if (activeFilter === '') {
			console.log('VUOTO')
			setFiltered(projects)
			return
		}
		const filtered = projects.filter(proj => proj.status.slug === activeFilter)
		setFiltered(filtered)
	}, [projects, activeFilter])

	// TODO filtrare projects in base allo status = href (?)

	const dispatch = useGlobalDispatchContext()
	const { cursorStyles } = useGlobalStateContext()
	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
		dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
	}

	// console.log(projects)
	// console.log("LOCATION", window.location.href);

	return (
		// <Layout location={props.location}>
		<>
			<SEO title="Code" />

			<PageContent>
				<SectionTitle title="My Projects" subtitle="Where ideas come to life" />
				{/* {[...Array(30)].map((e, i) => (
					<h1 key={i}>Code</h1>
				))} */}

				<Filter
					filters={filters}
					activeFilter={activeFilter}
					setActiveFilter={setActiveFilter}
				/>
				<Projects>
					<LayoutGroup>
						<AnimatePresence>
							{filtered.map(project => {
								return (
									<Project
										key={project.id}
										project={project}
										onCursor={onCursor}
									/>
								)
							})}
						</AnimatePresence>
					</LayoutGroup>
				</Projects>

				{/* <SectionTitle title="My Projects" subtitle="Where ideas come to life" id="main-content"/> */}
				{/* {projects.map((project, index) => {
        console.log(project, index)
        return <Link key={"project-" + index} to={"/" + project.node.slug}>{project.node.title}</Link>
        })
      } */}

				{/* <ArtItem src={result.file.childImageSharp.fluid}/> */}

				{/* <VideoPlayer src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"/> */}

				{/* <div className={styles.statusNav}>
        <Link to="/code" className={href.indexOf('/code') > 0 && styles.selected}>All</Link>
        <Link to='/code/completed' className={href.indexOf('code/completed') > 0 && styles.selected}>Completed</Link>
        <Link to='/code/coming-soon' className={href.indexOf('code/coming-soon') > 0 && styles.selected}>Coming Soon</Link>
        <Link to='/code/in-development' className={href.indexOf('code/in-development') > 0 && styles.selected}>In Development</Link>
        <Link to='/code/suspended' className={href.indexOf('code/suspended') > 0 && styles.selected}>Suspended</Link>
      </div>

      <CodeGallery artworks={projects} onCursor={onCursor}> */}
				{/* <Img fluid={file.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{position: 'relative', top: '0', width: '300px', height:'300px'}}  draggable={false}/> */}
				{/* </CodeGallery> */}

				<Footer onCursor={onCursor} />
			</PageContent>
		</>
	)
}

export default CodePage
