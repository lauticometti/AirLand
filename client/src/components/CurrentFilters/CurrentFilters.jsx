import { useSelector } from 'react-redux'
import styles from './CurrentFilters.module.css'

export function CurrentFilters() {
	const { filters, sort } = useSelector(state => state.filter)

	console.log(filters)
	console.log(sort)
	return <div className={styles.container}></div>
}

// filters: {
//   sizes: '',
//   types: [],
//   minPrice: 0,
//   name: ''
// },
// sort: {
//   type: '',
//   order: 'up'
// }
