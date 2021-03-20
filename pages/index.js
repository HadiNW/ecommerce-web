import Head from 'next/head'
import Carousel from '../components/carousel/carousel'
import FeaturedProduct from '../components/featured-products/featured-products'
import Layout from '../components/layout/layout'

export default function Home() {
  return (
   <Layout class='font-font-roboto'>
	   <Carousel />
	   <FeaturedProduct />
   </Layout>
  )
}
