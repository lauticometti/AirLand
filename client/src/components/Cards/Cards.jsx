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

	let slicedData = []
	if (data) {
		const filteredData = data.filter(
			shoe => shoe.STATUS === 'true' || (shoe.STATUS !== 'false' && shoe.STATUS)
		)
		if ((page - 1) * pageSize > filteredData.length) dispatch(setPage(1))
		dispatch(setTotalEntries(filteredData.length))
		slicedData = filteredData.slice((page - 1) * pageSize, page * pageSize)
	}

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
