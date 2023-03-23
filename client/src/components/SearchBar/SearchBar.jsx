import styles from './SearchBar.module.css'
import { ImSearch } from 'react-icons/im'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterSlice } from '../../redux/slices/filters/filterSlice'

export function SearchBar() {
	const dispatch = useDispatch()
	const [searchString, setSearchString] = useState('')
	const handleChange = event => {
		setSearchString(event.target.value)
	}

	useEffect(() => {
		if (searchString.length > 2) {
			dispatch(
				filterSlice.actions.setFilters({
					filterType: 'name',
					data: searchString
				})
			)
		}
	}, [searchString])
	return (
		<div className={styles.searchBarContainer}>
			<input
				type='text'
				value={searchString}
				className={styles.searchBarInput}
				onChange={handleChange}
			/>
			<span className={styles.searchBarIcon}>
				<ImSearch />
			</span>
		</div>
	)
}
