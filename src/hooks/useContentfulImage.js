import { graphql, useStaticQuery } from 'gatsby'

const useContentfulImage = assetUrl => {
	const { assets } = useStaticQuery(
		graphql`
			query CONTENTFUL_IMAGE_QUERY {
				asset: allContentfulAsset {
					edges {
						node {
							contentful_id
							gatsbyImageData(
								layout: FULL_WIDTH
								placeholder: BLURRED
								formats: [AUTO, WEBP]
								width: 1050
								quality: 85
							)
						}
					}
				}
			}
		`
	)

	// TODO vedere se funziona spostando il filter nella query
	const asset = assets.edges.find(({ node }) => node.contentful_id === assetUrl)
	return asset
}

export default useContentfulImage
