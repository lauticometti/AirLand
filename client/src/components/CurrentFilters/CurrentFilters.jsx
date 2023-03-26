import { useSelector } from 'react-redux'

import ArrayPill from './Pills/ArrayPill'
import NumberPill from './Pills/NumberPill'
import StringPill from './Pills/StringPill'

import styles from './CurrentFilters.module.css'
export function CurrentFilters() {
	const { filters } = useSelector(state => state.filter)

	return (
		<div className={styles.pillsContainer}>
			{Object.keys(filters).map((key, i) => {
				if (key === 'name') return null
				if (typeof filters[key] === 'string')
					return <StringPill key={i} pill={filters[key]} type={key} />
				if (typeof filters[key] === 'number')
					return <NumberPill key={i} pill={filters[key]} type={key} />
				else return <ArrayPill key={i} pill={filters[key]} type={key} />
			})}
		</div>
	)
}

// filters = {
//   sizes: '',
//   types: [],
//   minPrice: 0,
//   name: ''
// }

// sort = {
//   type: '',
//   order: 'up'
// }

// if (key === 'name') return null

// 					if (
// 						typeof filters[key] === 'string' ||
// 						typeof filters[key] === 'number'
// 					) {
// 						if (filters[key]) {
// 							return (
// 								<div key={i} className={styles.filter}>
// 									<h2 className={styles.h2}>
// 										{key === 'minPrice' ? '$' : null}
// 										{filters[key]}
// 									</h2>
// 									<span className={styles.closeIcon}>
// 										<IconContext.Provider value={{ color: 'white' }}>
// 											<RiCloseFill />
// 										</IconContext.Provider>
// 									</span>
// 								</div>
// 							)
// 						} else return null
// 					} else if (Array.isArray(filters[key])) {
// 						filters[key].map((el, i) => {
// 							return (
// 								<div key={i} className={styles.filter}>
// 									<h2>{el}</h2>
// 									<span>close</span>
// 								</div>
// 							)
// 						})
// 					} else return null
