import * as React from 'react'

// Context
import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from '@context/globalContext'

// Components
import Seo from '@components/seo'
import HomeBanner from '@components/homePage/HomeBanner'
import HomeFeatured from '@components/homePage/HomeFeatured'
import Footer from '@components/footer'

const IndexPage = props => {
	console.log('PROPS', props)

	const globalStateContext = useGlobalStateContext()
	const dispatch = useGlobalDispatchContext()

	const { cursorStyles } = globalStateContext
	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
		dispatch({ type: 'CURSOR_TYPE', cursorType })
	}

	return (
		<div>
			<Seo
				title="Developer - 3DArtist"
				keywords={[
					`artist`,
					`developer`,
					`engineer`,
					`3dartist`,
					`coding4rtist`,
				]}
			/>
			<HomeBanner onCursor={onCursor} />
			<HomeFeatured onCursor={onCursor} />
			<Footer onCursor={onCursor} />
			{/* <div></div>
			{[...Array(100)].map((e, i) => (
				<h1 key={i}>Test</h1>
			))} */}
		</div>
	)
}

export default IndexPage
