import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { removeItem, updateItem } from '../../redux'
import styles from './CartItem.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function CartItem({ item }) {
	const [quantity, setQuantity] = useState(item.quantity)
	const { uid } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const handleQuantityAddition = event => {
		event.preventDefault()
		if (quantity + 1 > Number(item.sizes[item.selectedSize])) {
			return swal({
				title: 'Limite de stock',
				message: `El stock limite es de: ${item.sizes[item.selectedSize]}`,
				icon: 'warning',
				timer: 2000
			})
		}
		setQuantity(quantity + 1)
	}

	const handleQuantitySubstraction = event => {
		event.preventDefault()
		if (quantity - 1 === 0) return
		setQuantity(quantity - 1)
	}

	const handleRemove = event => {
		event.preventDefault()
		dispatch(removeItem(item.id, uid))
	}

	const handleInputChange = event => {
		const updatedQuantity = event.target.value
	}

	useEffect(() => {
		dispatch(updateItem(item.id, uid, quantity))
	}, [quantity])

	return (
		<div className={styles.cartItemContainer}>
			<article className={styles.articleCart}>
				<div className={styles.imgContainer}>
					<img src={item?.image.THUMBNAIL} alt='' />
				</div>
				<div className={styles.itemCartInfo}>
					<div className={styles.titleContainer}>
						<Link to={`/detail/${item.id}`} className={styles.titleLink}>
							<h3 className={styles.title}>{item?.name}</h3>
						</Link>
						<span className={styles.size}>Size: {item?.selectedSize}</span>
					</div>
					<span onClick={handleRemove} className={styles.remove}>
						Delete
					</span>
				</div>
			</article>

			<div className={styles.quantityContainer}>
				<form className={styles.quantityForm}>
					<button
						onClick={handleQuantitySubstraction}
						className={styles.quantityButton}
					>
						-
					</button>
					<input
						type='text'
						id='quantity'
						name='quantity'
						value={quantity}
						onChange={handleInputChange}
						className={styles.quantityInput}
					/>
					<button
						onClick={handleQuantityAddition}
						className={styles.quantityButton}
					>
						+
					</button>
				</form>
			</div>

			<div className={styles.itemPriceContainer}>
				<span>${item?.price}</span>
			</div>
		</div>
	)
}

CartItem.propTypes = {
	item: PropTypes.object
}
