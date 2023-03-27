import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartItem, Footer, Navbar, Snkrs } from '../../components'
import styles from './Cart.module.css'

export function Cart() {
	const { cart } = useSelector(state => state.cart)
	const totalPrice = cart.reduce((acum, sneaker) => acum + sneaker.price, 0)

	return (
		<>
			<Navbar />
			<div className={styles.cartContainer}>
				{cart.map(sneaker => (
					<CartItem item={sneaker} key={sneaker.id} />
				))}

				<div className={styles.shipping}>
					<span className={styles.shippingTitle}>Shipping</span>
					<span className={styles.shippingCost}>Free</span>
				</div>

				<div className={styles.totalPriceContainer}>
					<h3 className={styles.priceTitle}>Total with shipping</h3>
					<span className={styles.price}>${totalPrice}</span>
				</div>

				<div className={styles.buyButtonContainer}>
					<Link to='/checkout'>
						<button disabled={!cart.length} className={styles.buyButton}>
							Checkout
						</button>
					</Link>
				</div>
			</div>

			<div className={styles.recommended}>
				<h3 className={styles.recommendedTitle}>Recommended for you</h3>
				<Snkrs />
			</div>
			<Footer />
		</>
	)
}
