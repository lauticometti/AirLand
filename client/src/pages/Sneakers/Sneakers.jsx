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
import { setPage } from '../../redux/slices/pagination/paginationSlice'
import { useDispatch, useSelector } from 'react-redux'

export function Sneakers() {
	const dispatch = useDispatch()
	const { page, pageSize, totalEntries } = useSelector(
		state => state.pagination
	)
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
					total={totalEntries}
					onChange={onChangeHandler}
				/>
			</div>
			<WhatsAppButton />
			<Footer />
		</div>
	)
}
