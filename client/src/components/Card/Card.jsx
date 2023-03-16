import PropTypes from 'prop-types'
import styles from './Card.module.css'

export function Card({ id, PRECIO, NOMBRE, DETALLE }) {
	return (
		<div className={styles.cardContainer}>
			<h1 className={styles.cardTitle}>
				<p>Zapatilla {NOMBRE}</p>
			</h1>
			<img src={`https://i.pravatar.cc/200?u=${id}`} alt='shoe card' />
			<div className={styles.cardWrapper}>
				<p>PRECIO: {PRECIO}</p>
				<p>DETALLE: {DETALLE}</p>
			</div>
		</div>
	)
}

Card.propTypes = {
	id: PropTypes.string.isRequired,
	PRECIO: PropTypes.string.isRequired,
	NOMBRE: PropTypes.string.isRequired,
	DETALLE: PropTypes.string.isRequired
}
