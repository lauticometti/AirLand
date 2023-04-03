import { useGetShoesQuery } from '../../../../redux/services/filteredShoes'
import { AdminCard, Loader, NotFound } from '../../../../components'
import { useSelector } from 'react-redux'
import styles from './AllSneakers.module.css'

export function AllSneakers() {
	const filterState = useSelector(state => state.filter)
	const { data, isLoading, error } = useGetShoesQuery(filterState)

	if (isLoading)
		return (
			<div className={styles.mt50vh}>
				<Loader />
			</div>
		)

	if (error)
		return (
			<div className={styles.mt50vh}>
				<NotFound />
			</div>
		)
	return (
		<div className={styles.adminCardsContainer}>
			{data?.map(shoe => (
				<AdminCard key={shoe.id} shoe={shoe} />
			))}
		</div>
	)
}
