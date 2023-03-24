import { Loader } from '..'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { filterSlice } from '../../redux/slices/filters/filterSlice'
import { useGetSizesQuery } from '../../redux/services/services'

import styles from './SizesFilter.module.css'

export function SizesFilter() {
	const { data: sizes } = useGetSizesQuery()
	const dispatch = useDispatch()

	const [currentSize, setCurrentSize] = useState('')

	const handleCheckbox = event => {
		const size = event.target.id

		if (currentSize === size) setCurrentSize('')
		else setCurrentSize(size)
	}

	useEffect(() => {
		dispatch(
			filterSlice.actions.setFilters({
				filterType: 'sizes',
				data: currentSize
			})
		)
	}, [currentSize])

	return (
		<ul className={styles.list}>
			{sizes ? (
				sizes.map((el, i) => {
					return (
						<li
							key={el + i}
							onClick={handleCheckbox}
							id={el}
							className={
								el === +currentSize ? styles.listItemActive : styles.listItem
							}
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
