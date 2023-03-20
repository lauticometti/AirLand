import { Loader } from '../'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { filterSlice } from '../../redux/slices/filters/filterSlice'
import { useGetSizesQuery } from '../../redux/services/services'

import styles from './Sizes.module.css'

export function Sizes() {
	const { data: sizes } = useGetSizesQuery()
	const dispatch = useDispatch()
	const { activeFilter, filterValues } = useSelector(state => state.filter)

	const [marked, setMarked] = useState(sizes ? sizes.map(el => false) : [])
	const [currentSizes, setCurrentSizes] = useState([])

	const handleCheckbox = event => {
		const size = Number(event.target.id)
		const currentIndex = sizes.indexOf(size)
		const newMarked = [...marked]

		if (currentSizes.includes(size)) {
			setCurrentSizes(currentSizes.filter(el => el !== size))
			newMarked[currentIndex] = false
			setMarked(newMarked)
		} else {
			setCurrentSizes([...currentSizes, size])
			newMarked[currentIndex] = true
			setMarked(newMarked)
		}
	}

	useEffect(() => {
		dispatch(
			filterSlice.actions.setFilters({
				filterType: 'Sizes',
				filterValues: [...currentSizes]
			})
		)
	}, [currentSizes])

	return (
		<ul className={styles.list}>
			{sizes ? (
				sizes.map((el, i) => {
					return (
						<li
							key={el + i}
							onClick={handleCheckbox}
							id={el}
							className={marked[i] ? styles.listItemActive : styles.listItem}
						>
							{el}
						</li>
					)
				})
			) : (
				<Loader />
			)}
		</ul>
	)
}
