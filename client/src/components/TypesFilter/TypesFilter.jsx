import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './TypesFilter.module.css'
import { filterSlice } from '../../redux/slices/filters/filterSlice'

export function TypesFilter() {
	const [checked, setChecked] = useState([])
	const dispatch = useDispatch()

	const filterState = useSelector(state => state.filter)

	useEffect(() => {
		dispatch(
			filterSlice.actions.setFilters({ filterType: 'types', data: checked })
		)
	}, [checked])

	const handleCheckbox = event => {
		const type = event.target.id
		if (checked.includes(type))
			setChecked([...checked].filter(el => el !== type))
		else setChecked([...checked, type])
	}

	return (
		<ul className={styles.list}>
			<li className={styles.listItem}>
				<label htmlFor='Low' className={styles.label}>
					Low
					<input
						type='checkbox'
						id='Low'
						className={styles.input}
						onChange={handleCheckbox}
					/>
				</label>
			</li>
			<li className={styles.listItem}>
				<label htmlFor='Mid' className={styles.label}>
					Mid
					<input
						type='checkbox'
						id='Mid'
						className={styles.input}
						onChange={handleCheckbox}
					/>
				</label>
			</li>
			<li className={styles.listItem}>
				<label htmlFor='High' className={styles.label}>
					High
					<input
						type='checkbox'
						id='High'
						className={styles.input}
						onChange={handleCheckbox}
					/>
				</label>
			</li>
		</ul>
	)
}
