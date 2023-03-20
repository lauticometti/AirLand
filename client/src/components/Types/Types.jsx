import styles from './Types.module.css'
import PropTypes from 'prop-types'

export function Types({ items, handler, marked }) {
	return (
		<ul className={styles.list}>
			{items &&
				items.map((item, i) => {
					return (
						<li key={item + i} onClick={handler} className={styles.listItem}>
							{item}
						</li>
					)
				})}
		</ul>
	)
}

Types.propTypes = {
	items: PropTypes.string.isRequired,
	handler: PropTypes.func,
	marked: PropTypes.bool
}
