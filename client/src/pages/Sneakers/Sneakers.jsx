import styles from './Sneakers.module.css'
import { Navbar, Cards, Filter, Order } from '../../components'

export function Sneakers() {
	return (
		<div>
			<Navbar />
			<div className={styles.sneakersMainContainer}>
				<div>
					<Filter />
					<Order />
				</div>
				<Cards />
			</div>
            <h2>footer placeholder</h2>
		</div>
	)
}
