import styles from './Sneakers.module.css'
import {
	Navbar,
	Cards,
	Order,
	Footer,
	FilterButton,
	WhatsAppButton,
	CurrentFilters
} from '../../components'
import { Pagination } from 'antd'
import { useEffect } from 'react'
import {
	setPage,
	setTotalPages
} from '../../redux/slices/pagination/paginationSlice'
import { useDispatch, useSelector } from 'react-redux'
// import { useGetShoesQuery } from '../../redux/services/filteredShoes'

export function Sneakers() {
	const dispatch = useDispatch()
	// const filterState = useSelector(state => state.filter)
	const { page, pageSize, totalPages } = useSelector(state => state.pagination)

	useEffect(() => {
		dispatch(setTotalPages(21))
	}, [])
	const onChangeHandler = (page, pageSize) => {
		dispatch(setPage(page))
	}
	return (
		<div>
			<Navbar />
			<div className={styles.shoesContainer}>
				<div className={styles.filters}>
					<FilterButton />
					<Order />
				</div>
				<CurrentFilters />
				<Cards />
			</div>
			<div className={styles.paginationContainer}>
				<Pagination
					current={page}
					size={pageSize}
					total={totalPages}
					onChange={onChangeHandler}
				/>
			</div>
			<WhatsAppButton />
			<Footer />
		</div>
	)
}
