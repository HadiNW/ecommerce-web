import React, { Fragment } from 'react'
import ProductCard from '../product-card/product-card'

function FeaturedProduct() {
	return (
		<Fragment>
			<h3 className='text-center mt-20 text-3xl font-bold'>Featured Products</h3>
			<div className='flex justify-between px-16 mt-14'>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</Fragment>
	)
}

export default FeaturedProduct
