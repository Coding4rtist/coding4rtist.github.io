import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'

import { Bold, Header1, Text } from '@components/projectPage/markdown'
// import useContentfulImage from '@hooks/useContentfulImage'

const options = {
	renderMark: {
		[MARKS.BOLD]: text => <Bold>{text}</Bold>,
	},
	renderNode: {
		[BLOCKS.HEADING_1]: (node, children) => <Header1>{children}</Header1>,
		[BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
		[BLOCKS.EMBEDDED_ASSET]: node => {
			console.log('EMBEDDED_ASSET', node)
			// const asset = useContentfulImage(node.data.target.sys.id)
			// if (asset) {
			// 	return (
			// 		<GatsbyImage
			// 			image={asset.node}
			// 			alt=""
			// 			style={{ maxWidth: '500px', margin: '5% auto' }}
			// 		/>
			// 	)
			// }
		},
		[INLINES.HYPERLINK]: node => {
			// console.log(node)
			// TODO cambiare title
			if (node.data.uri.indexOf('youtube.com') !== -1) {
				return (
					<span className="yt-video">
						<iframe
							title={node.data.uri}
							width="640"
							height="360"
							src={node.data.uri}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</span>
				)
			}
		},
	},
}
// const options = {}

const ProjectBody = ({ content }) => {
	// console.log('CONTENT', content)
	return <div>{renderRichText(content, options)}</div>
}

export default ProjectBody
