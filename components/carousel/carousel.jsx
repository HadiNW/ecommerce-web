import { useState } from 'react'

const images = [
	'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1614767184__1.jpeg',
	'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1615978170__1.jpeg',
	'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1613094799__1.jpeg',
]
function Carousel() {
	const [image, setImage] = useState(0)

	const prev = () => {
		setImage((cur) => {
			if (cur === 0) {
				return images.length - 1
			} else {
				return cur - 1
			}
		})
	}

	const next = () => {
		setImage((cur) => {
			console.log(cur)
			if (cur === images.length - 1) {
				return 0
			} else {
				return cur + 1
			}
		})
	}
	return (
		<div className='relative select-none'>
			<img
				className=''
				src={images[image]}
				alt='carousel'
			/>

			<svg
				onClick={prev}
				className='w-12 absolute left-16 top-1/2 cursor-pointer bg-white p-2 rounded-full text-gray-400 transition-all ease-in duration-500 delay-500 hover:bg-red-700'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M15 19l-7-7 7-7'
				/>
			</svg>

			<svg
				onClick={next}
				className='w-12 absolute right-16 top-1/2 cursor-pointer bg-white p-2 rounded-full text-gray-400'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M9 5l7 7-7 7'
				/>
			</svg>
		</div>
	)
}

export default Carousel
