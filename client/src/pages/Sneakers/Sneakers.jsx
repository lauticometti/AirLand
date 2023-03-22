import styles from './Sneakers.module.css'
import { Navbar, Cards, Order, Footer, FilterButton } from '../../components'

export function Sneakers() {
	return (
		<div>
			<Navbar />
			<div className={styles.shoesContainer}>
				<div className={styles.filters}>
					<FilterButton />
					<Order />
				</div>
				<Cards />
			</div>
			<Footer />
		</div>
	)
}
