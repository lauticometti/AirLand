import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Snkrs } from '../../../components'
import { getAllOrders } from '../../../redux'
import PurchasedProduct from './PurchasedProduct/PurchasedProduct'
import styles from './Orders.module.css'

export default function Orders() {
	const { orders } = useSelector(state => state.shopping)
	const { uid } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllOrders(uid))
	}, [])

	return (
		<div className={styles.main}>
			<h3 className={styles.title}>Orders</h3>

			{orders && orders.lenght ? (
				<div className={styles.orders}>
					{orders.map((order, i) => (
						<div key={i} className={styles.orderContainer}>
							<div className={styles.orderTop}>
								<div className={styles.orderDate}>
									<div className={styles.orderDateTitle}>Order date</div>
									<div className={styles.orderDateText}>
										{order.dateCreated}
									</div>
								</div>
								<div className={styles.totalPrice}>
									<div className={styles.totalPriceTitle}>Total price</div>
									<div className={styles.totalPriceText}>
										${order.totalAmount}
									</div>
								</div>
								<div className={styles.extra}>
									<div className={styles.extraOrderId}>#{order.id}</div>
									<div className={styles.extraOrderStatus}>{order.status}</div>
								</div>
							</div>
							<div className={styles.orderBottom}>
								{order.cart?.map((cartItem, i) => (
									<PurchasedProduct key={i} product={cartItem} />
								))}
							</div>
						</div>
					))}
				</div>
			) : (
				<div className={styles.emptyOrdersContainer}>
					<p className={styles.emptyOrders}>
						You haven&apos;t made your first purchase yet. Everyone has a first
						time, yours could be just around the corner.
						<span>
							<Link to='/snkrs' className={styles.emptyOrdersLink}>
								Check out these shoes
							</Link>
						</span>
					</p>
				</div>
			)}

			<div className={styles.recommended}>
				<h4>Recommended</h4>
				<Snkrs />
			</div>
		</div>
	)
}
