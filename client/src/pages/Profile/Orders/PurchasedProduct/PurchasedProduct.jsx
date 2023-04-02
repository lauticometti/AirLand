import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../../redux'
import styles from './PurchasedProduct.module.css'

export default function PurchasedProduct({ product }) {
	const cleanName = product.name.replace(/-/g, ' ')

	const { uid } = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleBuyAgain = () => {
		dispatch(addItem(product.id, uid, product.selectedSize))

		setTimeout(() => {
			navigate('/store')
		}, 2500)
	}

	return (
		<div className={styles.orderBottomProduct}>
			<div className={styles.imageContainer}>
				<img
					src={product.image.THUMBNAIL}
					alt={cleanName}
					className={styles.image}
				/>
			</div>

			<div className={styles.orderDetails}>
				<Link to={`/detail/${product.id}`} className={styles.orderName}>
					{cleanName}
				</Link>
				<span className={styles.orderQuantity}>
					{product.quantity} unit{product.quantity > 1 ? 's' : null} $
					{Number(product.price) * Number(product.quantity)}
				</span>
			</div>
			<div className={styles.buttons}>
				<button onClick={handleBuyAgain} className={styles.buyAgainButton}>
					Buy again
				</button>
				<a
					href='https://api.whatsapp.com/send?phone=5491164602560&text=Hi!+I+need+return+a+product...'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.returnButton}
				>
					Return
				</a>
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
