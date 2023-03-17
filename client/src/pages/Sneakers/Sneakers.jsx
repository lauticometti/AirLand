import styles from './Sneakers.module.css'
import { Navbar, Cards, Filter, Order, Footer } from '../../components'

export function Sneakers() {
	return (
		<div>
			<Navbar />
			<div className={styles.shoesContainer}>
				<div className={styles.filters}>
					<Filter />
					<Order />
				</div>
				<Cards />
			</div>
			<Footer />
		</div>
	)
}
