import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShoes } from '../../redux/slices/shoesSlice'
import { Card } from '../../components'
import styles from './Cards.module.css'

export function Cards() {
	const { shoes, status, error } = useSelector(state => state.shoes)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchShoes())
	}, [dispatch])
	console.log(shoes)
	return (
		<>
			{status === 'loading' ? (
				<span className={styles.loadingText}>Loading sneakers...</span>
			) : status === 'failed' ? (
				<span className={styles.errorMessageText}>Error: {error}</span>
			) : (
				<div className={styles.cardsContainer}>
					{shoes.sneakers.map(shoe => (
						<Card key={shoe.id} shoe={shoe} />
					))}
				</div>
			)}
		</>
	)
}
