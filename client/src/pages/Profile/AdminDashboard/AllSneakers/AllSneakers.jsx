import { AdminCard, Loader } from '../../../../components'
import { useDispatch, useSelector } from 'react-redux'
import styles from './AllSneakers.module.css'
import { useEffect } from 'react'
import { fetchSneakers } from '../../../../redux/slices/sneakers'

export function AllSneakers() {
	const dispatch = useDispatch()
	const { allSneakers } = useSelector(state => state.sneakers)
	const { editCount } = useSelector(state => state.refresh)

	useEffect(() => {
		dispatch(fetchSneakers())
	}, [editCount])

	return (
		<div className={styles.adminCardsContainer}>
			{allSneakers && allSneakers.length ? (
				allSneakers.map(shoe => <AdminCard key={shoe.id} shoe={shoe} />)
			) : (
				<Loader />
			)}
		</div>
	)
}
