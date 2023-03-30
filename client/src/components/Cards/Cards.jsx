import { useDispatch, useSelector } from 'react-redux'
import { Card, Loader, NotFound } from '../../components'
import { useGetShoesQuery } from '../../redux/services/filteredShoes'
import {
	setPage,
	setTotalEntries
} from '../../redux/slices/pagination/paginationSlice'
import styles from './Cards.module.css'

export function Cards() {
	const dispatch = useDispatch()
	const filterState = useSelector(state => state.filter)
	const { data, isLoading, error } = useGetShoesQuery(filterState)
	const { page, pageSize } = useSelector(state => state.pagination)

	let slicedData = []
	if (data) {
		if ((page - 1) * pageSize > data.length) dispatch(setPage(1))
		dispatch(setTotalEntries(data.length))
		slicedData = data.slice((page - 1) * pageSize, page * pageSize)
	}

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
	console.log(data[1])
	return (
		<div
			className={
				slicedData.length
					? styles.cardsContainer
					: styles.cardsContainerNotFound
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
