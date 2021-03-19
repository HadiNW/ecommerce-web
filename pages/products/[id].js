import {useRouter} from 'next/router'

function ProductDetailPage() {

	const router = useRouter()

	return (
		<div>
			PD page {router.query.id}
		</div>
	)
}

export default ProductDetailPage
