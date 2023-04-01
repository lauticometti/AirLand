import PropTypes from 'prop-types'
import styles from '../Card/Card.module.css'
import { Link } from 'react-router-dom'

export function AdminCard({ shoe }) {
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
                <Link to={`/detail/admin/${shoe.id}`} className={styles.link}>
                    <h2 className={styles.name}>
                        {shoe.NAME.length < 48 ? shoe.NAME : shoe.NAME.slice(0, 48) + '...'}
                    </h2>
                </Link>
                <span className={styles.price}>${shoe.PRICE}</span>
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
