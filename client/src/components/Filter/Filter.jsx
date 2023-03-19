import { useEffect, useState } from 'react'
import icon from '../../assets/order-icon.svg'
import { Dropdown, Modal } from '../'

import styles from './Filter.module.css'
import { useGetSizesQuery } from '../../redux/services/services'
import { setFilters } from '../../redux/slices/filters/filterSlice'

import { useDispatch } from 'react-redux'

export function Filter() {
	// TRAER LOS TIPOS Y LOS TALLES
	const {
		data: sizes,
		isLoading: sizesLoading,
		error: sizesError
	} = useGetSizesQuery()
	const [show, setShow] = useState(false)
	const [currentSizes, setCurrentSizes] = useState([])

	// ejecutar la funcion de filtrado correspondiente a medida
	// que cambien los estados

	console.log(currentSizes)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			setFilters({
				filterType: '',
				filterValues: ''
			})
		)
	}, [])

	return (
		<div>
			<button
				onClick={() => {
					setShow(true)
				}}
				className={styles.filterBox}
			>
				<img src={icon} alt='' className={styles.icon} />
				<span className={styles.span}>Filter</span>
			</button>
			<Modal onClose={() => setShow(false)} show={show}>
				<Dropdown
					title='Sizes'
					items={sizes}
					isLoading={sizesLoading}
					error={sizesError}
					type='checkbox'
					setFilteredState={setCurrentSizes}
					filteredState={currentSizes}
				/>
				{/* <Dropdown
					title='Types'
					items={[1, 2, 3, 4, 5]}
					type='checkbox'
					setFilteredState={setCurrentSizes}
					filteredState={currentSizes}
				/> */}
			</Modal>
		</div>
	)
}
