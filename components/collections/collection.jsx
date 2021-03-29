import React, {Fragment} from 'react'
import ProductCard from '../product-card/product-card'
import CollectionCard from './collection-card'

const Collections = () => {
	return (
		<Fragment>
			<h3 className='text-center mt-20 text-3xl font-bold'>
				Explore Our Collections
			</h3>
			<div style={{margin: '3.5rem -.500em 0 -.500em'}} className='flex px-16 flex-wrap mt-14'>
				<CollectionCard />
				<CollectionCard />
				<CollectionCard />
				<CollectionCard />
				<CollectionCard />
			</div>
		</Fragment>
	)
}

export default Collections
