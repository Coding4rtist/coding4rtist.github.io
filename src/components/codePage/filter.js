import React from 'react'

import { FilterButton } from '@styles/codeStyles'

const Filter = ({ filters, activeFilter, setActiveFilter }) => {
	filters = [
		{
			title: 'All',
			slug: '',
			order: 0,
		},
	].concat(filters)

	return (
		<div>
			{/* <FilterButton
      key = ''
      active={activeFilter === ''}
      onClick={() => setActiveFilter('')}
      >All</FilterButton> */}
			{filters.map(filter => {
				return (
					<FilterButton
						key={filter.slug}
						active={activeFilter === filter.slug}
						onClick={() => setActiveFilter(filter.slug)}
					>
						{filter.title}
					</FilterButton>
				)
			})}

			{/* <FilterButton onClick={() => setActiveFilter('completed')}>
				Completed
			</FilterButton>
			<FilterButton onClick={() => setActiveFilter('coming-soon')}>
				Coming Soon
			</FilterButton>
			<FilterButton onClick={() => setActiveFilter('in-development')}>
				In Development
			</FilterButton>
			<FilterButton onClick={() => setActiveFilter('suspended')}>
				Suspended
			</FilterButton> */}
		</div>
	)
}

export default Filter
