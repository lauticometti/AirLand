import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './PurchasedProduct.module.css'

export default function PurchasedProduct({ product }) {
	const cleanName = product.name.replace(/-/g, ' ')
	return (
		<div className={styles.orderBottomProduct}>
			<div className={styles.imageContainer}>
				<img src={product.imageURL} alt={cleanName} className={styles.image} />
			</div>

			<div className={styles.orderDetails}>
				<Link to={`/detail/${product.id}`} className={styles.orderName}>
					{cleanName}
				</Link>
				<span className={styles.orderQuantity}>
					{product.cartQuantity} unit{product.cartQuantity > 1 ? 's' : null} $
					{Number(product.price) * Number(product.cartQuantity)}
				</span>
			</div>
			<div className={styles.buttons}>
				<button className={styles.seePurchaseButton}>See purchase</button>
				<button className={styles.buyAgainButton}>Buy again</button>
			</div>
		</div>
	)
}
PurchasedProduct.propTypes = {
	product: PropTypes.object.isRequired
}

// {
//   brand: 'Air Force',
//   cartQuantity: 1,
//   desc: "Errolson Hugh's signature Acronym signature focuses on innovation and the creation of functional clothing. Hugh approaches his jobs with an innovative attitude that allows him to find new ways to improve functionality and also bring evolution to the everyday. Introduced in 2015, the ACRONYM x Lunar Force 1 design made the iconic AF-1 more functional and practical than ever. The 2015 sneakers return with classic styling finished with the timelessly iconic white-on-white color scheme.",
//   id: '6qSrn7Fa3wFcCaC3Z9K5',
//   imageURL:
//     'https://firebasestorage.googleapis.com/v0/b/airland-9c55f.appspot.com/o/Zapatillas(images)%2FLUNAR-FORCE-1-ACRONYM-(full).webp?alt=media&token=be956aed-3b46-4885-b1df-d20a42bf9b69',
//   name: 'LUNAR-FORCE-1-ACRONYM',
//   price: 50,
//   type: 'Mid'
// },
