import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrdersGlobal } from '../../../../redux'
import styles from './Orders.module.css'

export function Orders() {
	const { allOrders } = useSelector(state => state.shopping)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllOrdersGlobal())
	}, [])
	return (
		<div className={styles.ordersMainContainer}>
			{allOrders ? (
				allOrders.map(purchase => (
					<div key={purchase.id} className={styles.orderWrapper}>
						<div className={styles.purchaseTitleWrapper}>
							<h2 className={styles.purchaseTitle}>
								Purchase ID: {purchase.id}
							</h2>
							<span className={styles.purchaseDate}>
								{purchase.dateCreated}
							</span>
						</div>
						{purchase.cart.map(product => (
							<div key={product.id} className={styles.productContainer}>
								<img src={product.image.FULL} height='96px' alt='' />
								<div className={styles.nameIdFieldWrapper}>
									<span className={styles.nameLabel}>{product.name}</span>
									<span className={styles.idLabel}>
										Product ID: {product.id}
									</span>
								</div>
								<div className={styles.infoContainer}>
									<ul className={styles.infoFieldsContainer}>
										<li className={styles.infoField}>
											<span>Total Price: </span>
											<span className={styles.priceLabel}>
												${product.price}
											</span>
										</li>
										<li className={styles.infoField}>
											<span>Quantity:</span>
											<span>{product.quantity}</span>
										</li>
										<li className={styles.infoField}>
											<span>Size: </span>
											<span>{product.selectedSize}</span>
										</li>
									</ul>
									<div className={styles.infoStatusContainer}>
										<span>Payment Status: </span>
										<span className={styles.infoStatus}>{purchase.status}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				))
			) : (
				<p>loading...</p>
			)}
		</div>
	)
}
