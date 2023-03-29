import { useSelector } from 'react-redux'
import { Card, Loader, NotFound } from '../../components'
import { useGetShoesQuery } from '../../redux/services/filteredShoes'

import styles from './Cards.module.css'

export function Cards() {
	const filterState = useSelector(state => state.filter)
	const { data, isLoading, error } = useGetShoesQuery(filterState)
	const { page, pageSize } = useSelector(state => state.pagination)

	const slicedData = data.slice((page - 1) * pageSize, page * pageSize)

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
		<div
			className={
				slicedData.length ? styles.cardsContainer : styles.cardsContainerNotFound
			}
		>
			{slicedData.length ? (
				slicedData.map(shoe => <Card key={shoe.id} shoe={shoe} />)
			) : (
				<NotFound />
			)}
		</div>
	)
}
