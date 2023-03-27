import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { removeItem, updateItem } from '../../redux'
import styles from './CartItem.module.css'
import PropTypes from 'prop-types'

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
			<div className={styles.imgContainer}>
				<img src={item?.image.THUMBNAIL} alt='' />
			</div>
			<div className={styles.sneakerNameContainer}>
				<span>
					<b>Nombre:</b>
				</span>
				<span>{item?.name}</span>
			</div>
			<div className={styles.sneakerPriceContainer}>
				<span>
					<b>Precio:</b>
				</span>
				<span>${item?.price}</span>
			</div>
			<div className={styles.quantityContainer}>
				<div className={styles.quantityInputContainer}>
					<label htmlFor='quantity'>
						<b>Cantidad:</b>
					</label>
					<input
						type='text'
						id='quantity'
						name='quantity'
						value={quantity}
						onChange={handleInputChange}
					/>
				</div>
				<div className={styles.quantityHandlersContainer}>
					<button onClick={handleQuantityAddition}>+</button>
					<button onClick={handleQuantitySubstraction}>-</button>
				</div>
			</div>
			<div className={styles.sneakerSizeContainer}>
				<span>
					<b>Talle:</b>
				</span>
				<span>{item?.selectedSize}</span>
			</div>
			<div className={styles.removeHandlerContainer}>
				<button onClick={handleRemove}>X</button>
			</div>
		</div>
	)
}

CartItem.propTypes = {
	item: PropTypes.object
}
