import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Snkrs } from '../../../components'
import { getAllOrders } from '../../../redux'
import styles from './Orders.module.css'
import PurchasedProduct from './PurchasedProduct/PurchasedProduct'

export default function Orders() {
	const orders2 = [
		{
			cartItems: [
				{
					brand: 'Air Force',
					cartQuantity: 2,
					desc: "Errolson Hugh's signature Acronym signature focuses on innovation and the creation of functional clothing. Hugh approaches his jobs with an innovative attitude that allows him to find new ways to improve functionality and also bring evolution to the everyday. Introduced in 2015, the ACRONYM x Lunar Force 1 design made the iconic AF-1 more functional and practical than ever. The 2015 sneakers return with classic styling finished with the timelessly iconic white-on-white color scheme.",
					id: '6qSrn7Fa3wFcCaC3Z9K5',
					imageURL:
						'https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FLUNAR-FORCE-1-ACRONYM-(full).webp?alt=media&token=be956aed-3b46-4885-b1df-d20a42bf9b69',
					name: 'LUNAR-FORCE-1-ACRONYM',
					price: 50,
					type: 'Mid'
				},
				{
					brand: 'Air Force',
					cartQuantity: 1,

					desc: "The Air Force 1 Mid '07 is everything you know best: crisp overlays, bold accents and the perfect amount of flash to let you shine. The padded, mid-cut collar with classic hook-and-loop closure adds heritage b-ball comfort while perforations on the toe keep you cool.",
					id: 'onY17jfMepONdEDFlDAR',
					imageURL:
						"https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FAIR-FORCE-1-'07-UNO-(full).webp?alt=media&token=811f52d3-2c89-47c1-8f7c-1442da513384",
					name: "AIR-FORCE-1-'07-UNO-",
					price: 100,
					type: 'Low'
				}
			],
			orderAmount: 200,
			orderDate: '2022/11/20',
			orderStatus: 'Order placed',
			shippingAddress: {
				city: 'Los carlitos',
				country: 'AR',
				line1: 'Los trifolios 2231',
				name: 'Lautaro Cometti',
				phone: '1132321207',
				postal_code: '2567',
				state: 'Calitosta'
			},
			userEmail: 'lautic003@gmail.com',
			userId: '1275140924934',
			orderId: '2132421512512'
		},
		{
			cartItems: [
				{
					brand: 'Air Force',
					cartQuantity: 2,
					desc: "Errolson Hugh's signature Acronym signature focuses on innovation and the creation of functional clothing. Hugh approaches his jobs with an innovative attitude that allows him to find new ways to improve functionality and also bring evolution to the everyday. Introduced in 2015, the ACRONYM x Lunar Force 1 design made the iconic AF-1 more functional and practical than ever. The 2015 sneakers return with classic styling finished with the timelessly iconic white-on-white color scheme.",
					id: '6qSrn7Fa3wFcCaC3Z9K5',
					imageURL:
						'https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FLUNAR-FORCE-1-ACRONYM-(full).webp?alt=media&token=be956aed-3b46-4885-b1df-d20a42bf9b69',
					name: 'LUNAR-FORCE-1-ACRONYM',
					price: 50,
					type: 'Mid'
				},
				{
					brand: 'Air Force',
					cartQuantity: 1,

					desc: "The Air Force 1 Mid '07 is everything you know best: crisp overlays, bold accents and the perfect amount of flash to let you shine. The padded, mid-cut collar with classic hook-and-loop closure adds heritage b-ball comfort while perforations on the toe keep you cool.",
					id: 'onY17jfMepONdEDFlDAR',
					imageURL:
						"https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FAIR-FORCE-1-'07-UNO-(full).webp?alt=media&token=811f52d3-2c89-47c1-8f7c-1442da513384",
					name: "AIR-FORCE-1-'07-UNO-",
					price: 100,
					type: 'Low'
				}
			],
			orderAmount: 200,
			orderDate: '2022/11/20',
			orderStatus: 'Order placed',
			shippingAddress: {
				city: 'Los carlitos',
				country: 'AR',
				line1: 'Los trifolios 2231',
				name: 'Lautaro Cometti',
				phone: '1132321207',
				postal_code: '2567',
				state: 'Calitosta'
			},
			userEmail: 'lautic003@gmail.com',
			userId: '1275140924934',
			orderId: '2132421512512'
		}
	]

	const { orders } = useSelector(state => state.shopping)
	const { uid } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllOrders(uid))
	}, [])

	return (
		<div className={styles.main}>
			<h3 className={styles.title}>Orders</h3>

			{orders2.length ? (
				<div className={styles.orders}>
					{orders2.map((order, i) => (
						<div key={i} className={styles.orderContainer}>
							<div className={styles.orderTop}>
								<div className={styles.orderDate}>
									<div className={styles.orderDateTitle}>Order date</div>
									<div className={styles.orderDateText}>{order.orderDate}</div>
								</div>
								<div className={styles.totalPrice}>
									<div className={styles.totalPriceTitle}>Total price</div>
									<div className={styles.totalPriceText}>
										${order.orderAmount}
									</div>
								</div>
								<div className={styles.extra}>
									<div className={styles.extraOrderId}>#{order.orderId}</div>
									<div className={styles.totalOrderStatus}>
										{order.orderStatus}
									</div>
								</div>
							</div>
							<div className={styles.orderBottom}>
								{order.cartItems?.map((cartItem, i) => (
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
