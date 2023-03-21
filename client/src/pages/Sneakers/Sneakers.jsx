import styles from './Sneakers.module.css'
import { Navbar, Cards, Order, Footer, FilterButton, WhatsAppButton } from '../../components'
import { useSelector } from 'react-redux'
import { useGetShoesBySizesQuery } from '../../redux/services/filteredShoes'
import { useGetShoesQuery } from '../../redux/services/services'

export function Sneakers() {
	const { activeFilter, filterValues } = useSelector(state => state.filter)

	const query =
		activeFilter === 'Sizes'
			? () => useGetShoesBySizesQuery(filterValues)
			: useGetShoesQuery

	return (
		<div>
			<Navbar />
			<div className={styles.shoesContainer}>
				<div className={styles.filters}>
					<FilterButton />
					<Order />
				</div>
				<Cards query={query} />
			</div>
			<WhatsAppButton/>
			<Footer />
		</div>
	)
}
