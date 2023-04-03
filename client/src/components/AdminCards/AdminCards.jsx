import PropTypes from 'prop-types'
import styles from '../Card/Card.module.css'
import { Link } from 'react-router-dom'

export function AdminCard({ shoe }) {
	const handler = async event => {
		var miCheckbox = document.getElementById('miCheckbox')
		var estadoActual = miCheckbox.checked
		miCheckbox.checked = !estadoActual
		console.log(miCheckbox.checked)
		/*await setDoc(doc(db, 'ZAPATILLAS-PRUEBA', shoeId), {
			STATUS: true
		})*/
	}

	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img
					src={shoe.IMAGE.THUMBNAIL}
					alt={shoe.NAME}
					className={styles.image}
				/>
			</div>

			<div className={styles.textContainer}>
				<h2 className={styles.name}>
					{shoe.NAME.length < 48 ? shoe.NAME : shoe.NAME.slice(0, 48) + '...'}
				</h2>

				<span className={styles.price}>${shoe.PRICE}</span>
			</div>
			<div>
				borrado logico
				<label class={styles.micheckbox}>
					<input type='checkbox' id='miCheckbox' onClick={handler} />
				</label>
			</div>

			<Link to={`/detail/admin/${shoe.id}`} className={styles.link}>
				<button className={styles.buyButton}>Change items</button>
			</Link>
		</div>
	)
}

AdminCard.propTypes = {
	shoe: PropTypes.object.isRequired
}
