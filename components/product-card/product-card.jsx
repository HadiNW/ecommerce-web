import React from 'react'

function ProductCard() {
	return (
		<div className='p-8'>
			<div className='relative image-container'>
				<img
					className='product-image h-52 mx-auto'
					src='https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/291/0629159_PE694140_S3.jpg'
					alt='product'
				/>
				<button className='btn-quick-view'>Quick View</button>
			</div>
			<p className='uppercase font-bold text-lg mt-5'>hemnes</p>
			<p className='text-sm mt-2'>
				Mirror both on the outside and the inside. Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Aperiam, odit.
			</p>
			<p className='text-xl font-semibold mt-5'>$ 250</p>
		</div>
	)
}

export default ProductCard
