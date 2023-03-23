import styles from './Sneakers.module.css'
import {
	Navbar,
	Cards,
	Order,
	Footer,
	FilterButton,
	WhatsAppButton,
	SearchBar
} from '../../components'

export function Sneakers() {
	return (
		<div>
			<Navbar />
			<div className={styles.shoesContainer}>
				<div className={styles.filters}>
					<FilterButton />
					<SearchBar />
					<Order />
				</div>
				<Cards />
			</div>
			<WhatsAppButton />
			<Footer />
		</div>
	)
}
