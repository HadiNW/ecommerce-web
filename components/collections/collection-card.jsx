import React from 'react'

const CollectionCard = () => {
	return (
		<div style={{padding: '0 .500em'}} className='flex flex-col w-1/3'>
			<img
				className='w-full'
				src='https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1614784257__0.jpeg'
				alt='image'
			/>
			<div className='bg-yellow-600 px-8 py-4'>
				<h3 className='font-bold text-white'>LJUVARE</h3>
				<p className='mt-5 text-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
					molestiae beatae doloremque consequatur? Velit quia similique facere
					ipsa ad corporis sapiente architecto. Consequuntur iure laborum magnam
					nulla praesentium animi ab?
				</p>
				<svg
					className='h-8 p-2 bg-gray-100 rounded-full mt-5'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M14 5l7 7m0 0l-7 7m7-7H3'
					/>
				</svg>
			</div>
		</div>
	)
}

export default CollectionCard
