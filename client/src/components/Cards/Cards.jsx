import { Card, Loader, NotFound } from '../../components'
import PropTypes from 'prop-types'
import styles from './Cards.module.css'

export function Cards({ query }) {
	const { data, isLoading, error } = query()

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

Cards.propTypes = {
	query: PropTypes.func
}
