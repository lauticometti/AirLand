import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrdersGlobal } from '../../../../redux'

export function Orders() {
	const { allOrders } = useSelector(state => state.shopping)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllOrdersGlobal())
	}, [])
	return (
		<div>
			{allOrders
				? allOrders.map(purchase => (
						<div key={purchase.id}>
							<h2>Purchase N#{purchase.id}</h2>
							{purchase.cart.map(product => (
								<div key={product.id}>
									<label>{product.name}</label>
									<img src={product.image.FULL} height='128px' alt='' />
								</div>
							))}
						</div>
				  ))
				: <p>loading...</p>}
		</div>
	)
}
