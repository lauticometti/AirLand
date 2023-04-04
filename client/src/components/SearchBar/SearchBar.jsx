import styles from './SearchBar.module.css'
import { ImSearch } from 'react-icons/im'
import { IconContext } from 'react-icons'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterSlice } from '../../redux/slices/filters/filterSlice'
import { useLocation, useNavigate } from 'react-router'

export function SearchBar() {
	const dispatch = useDispatch()
	const [oldSearch, setOldSearch] = useState('')
	const [searchString, setSearchString] = useState(localStorage.getItem('search') || '')

	const { pathname } = useLocation()
	const navigate = useNavigate()

	const handleChange = event => {
		const old = searchString
		setSearchString(event.target.value)
		localStorage.setItem('search', event.target.value)
		setOldSearch(old)
	}

	useEffect(() => {
		if (
			searchString.length > 2 ||
			(oldSearch.length && searchString.length <= 1)
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
				placeholder='Search...'
				onChange={handleChange}
			/>
			<span className={styles.searchBarIcon}>
				<IconContext.Provider value={{ size: '18px' }}>
					<ImSearch />
				</IconContext.Provider>
			</span>
		</div>
	)
}
