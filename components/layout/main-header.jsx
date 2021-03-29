import { useState } from 'react'
import Link from 'next/link'

function MainHeader() {
	const [toggle, setToggle] = useState(false)
	return (
		<nav className='px-16 py-8 flex justify-between items-center bg-gray-50 relative select-none'>
			<div className='flex items-center'>
				<img
					className='h-8'
					src='https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/logos/IKEA_logo.svg'
					alt='logo'
				/>
				<ul className='ml-8 flex text-white'>
					<li className='menu-nav flex items-center ml-4'>
						<p onClick={() => setToggle((cur) => !cur)}>Product</p>
						{!toggle ? (
							<svg
								onClick={() => setToggle((cur) => !cur)}
								className='h-4'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						) : (
							<svg
								onClick={() => setToggle((cur) => !cur)}
								className='h-4'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5 15l7-7 7 7'
								/>
							</svg>
						)}
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
				<input
					className='search focus:shadow-md'
					type='text'
					placeholder='Search here ...'
				/>
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
			{toggle && (
				<ul className='px-16 py-4 h-60 items-baseline flex flex-col flex-wrap absolute bottom-0 left-0 right z-50 bg-gray-50 border-t w-screen transform translate-y-full'>
					<li className='h-1/5 '>
						<Link href='/link'>Nama Saya</Link>
					</li>
					<li className='h-1/5 '>
						<Link href='/link'>Nama Saya</Link>
					</li>
					<li className='h-1/5 '>
						<Link href='/link'>Nama Saya</Link>
					</li>
					<li className='h-1/5 '>
						<Link href='/link'>Nama Saya</Link>
					</li>
					<li className='h-1/5 '>
						<Link href='/link'>Nama Saya</Link>
					</li>
					<li className='h-1/5 '>
						<Link href='/link'>Nama Saya</Link>
					</li>
				</ul>
			)}
		</nav>
	)
}

export default MainHeader
