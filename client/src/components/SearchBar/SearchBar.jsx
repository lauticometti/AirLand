import styles from './SearchBar.module.css'
import { ImSearch } from 'react-icons/im'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterSlice } from '../../redux/slices/filters/filterSlice'

export function SearchBar() {
	const dispatch = useDispatch()
	const [oldSearch, setOldSearch] = useState('')
	const [searchString, setSearchString] = useState('')

	const handleChange = event => {
		const old = searchString
		setSearchString(event.target.value)
		setOldSearch(old)
	}

	console.log('actual: ', searchString)
	console.log('old: ', oldSearch)

	useEffect(() => {
		if (
			searchString.length > 2 ||
			(oldSearch.length === 1 && searchString.length === 0)
		) {
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
