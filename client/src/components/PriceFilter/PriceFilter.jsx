import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterSlice } from '../../redux'
import styles from './PriceFilter.module.css'

export function PriceFilter() {
	const [minPrice, setMinPrice] = useState(0)

	const dispatch = useDispatch()

	const handleDispatch = event => {
		dispatch(
			filterSlice.actions.setFilters({ filterType: 'minPrice', data: minPrice })
		)
	}

	const handleMinPriceChange = event => {
		event.preventDefault()
		const target = event.target

		setMinPrice(+target.value)

		const min = target.min
		const max = target.max
		const val = target.value

		target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%'
	}

	return (
		<label htmlFor='minPrice' className={styles.rangeLabel}>
			<span className={styles.rangeSpan}>Min Price</span>
			<output
				onInput={handleMinPriceChange}
				id='rangeValue'
				className={styles.rangeNumber}
			>
				{minPrice}
			</output>

			<span className={styles.rangeMin}>1</span>
			<input
				onInput={handleMinPriceChange}
				onMouseUp={handleDispatch}
				type='range'
				id='minPrice'
				min='0'
				max='300'
				value={minPrice}
				className={styles.inputRange}
			/>
			<span className={styles.rangeMax}>300</span>
		</label>
	)
}
