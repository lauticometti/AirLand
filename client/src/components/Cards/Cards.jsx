import { useSelector } from 'react-redux'
import { Card, Loader, NotFound } from '../../components'
import { useGetShoesQuery } from '../../redux/services/filteredShoes'

import styles from './Cards.module.css'

export function Cards() {
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
		<div className={styles.cardsContainer}>
			{data.map(shoe => (
				<Card key={shoe.id} shoe={shoe} />
			))}
		</div>
	)
}
