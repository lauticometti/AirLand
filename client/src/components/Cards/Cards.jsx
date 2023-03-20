import { useGetShoesQuery } from '../../redux/services/services'
import { Card, Loader, NotFound } from '../../components'
import styles from './Cards.module.css'

export function Cards() {
	const { data, isLoading, error } = useGetShoesQuery()

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
