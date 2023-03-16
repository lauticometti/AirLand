import styles from './Sneakers.module.css'
import {
	Navbar,
	Cards,
	Dropdown,
	Filter,
	Footer,
	Modal,
	Order
} from '../../components'

export function Sneakers() {
	return (
		<div className={styles.sneakersContainer}>
			<Navbar />
			<Cards />
			<Dropdown />
			<Filter />
			<Modal />
			<Order />
			<Footer />
		</div>
	)
}
