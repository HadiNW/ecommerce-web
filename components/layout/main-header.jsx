import { useState } from 'react'
import Link from 'next/link'

function MainHeader() {
	const [mennu, setMenu] = useState()
	return (
		<nav className='px-16 py-8 flex justify-between items-center bg-gray-50'>
			<div className='flex items-center'>
				<img
					className='h-8'
					src='https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/logos/IKEA_logo.svg'
					alt='logo'
				/>
				<ul className='ml-8 flex text-white'>
					<li className='menu-nav'>
						<Link href='/products'>Product</Link>
					</li>
					<li className='ml-6 menu-nav'>
						<Link href='/new-arrivals'>New Arrivals</Link>
					</li>
					<li className='ml-6 menu-nav'>
						<Link href='/inspirations'>Inspirations</Link>
					</li>
				</ul>
			</div>
			<div className='flex items-center'>
				<input className='search focus:shadow-md' type='text' placeholder='Search here ...' />
				<svg
					className='h-6 ml-5 cursor-pointer'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
					/>
				</svg>
			</div>
		</nav>
	)
}

export default MainHeader
