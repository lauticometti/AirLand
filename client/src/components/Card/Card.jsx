import PropTypes from 'prop-types'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export function Card({ shoe }) {
	return (
		<div className={styles.container}>
			<Link to={`/detail/${shoe.id}`}>
				<div className={styles.imageContainer}>
					<img src={shoe.IMAGE[0]} alt={shoe.NAME} className={styles.image} />
				</div>
			</Link>
			<div className={styles.textContainer}>
				<Link to={`/detail/${shoe.id}`} className={styles.link}>
					<h2 className={styles.name}>
						{shoe.NAME.length < 48 ? shoe.NAME : shoe.NAME.slice(0, 48) + '...'}
					</h2>
				</Link>
				<span className={styles.price}>${shoe.PRICE}</span>
			</div>
			<Link to={`/detail/${shoe.id}`} className={styles.link}>
				<button className={styles.buyButton}>BUY NOW!</button>
			</Link>
		</div>
	)
}

Card.propTypes = {
	shoe: PropTypes.object.isRequired
}
