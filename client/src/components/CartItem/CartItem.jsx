import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateItem } from '../../redux'
import styles from './CartItem.module.css'

export function CartItem({ item }) {

  const [quantity, setQuantity] = useState(item.quantity)
  const { uid } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleQuantityAddition = (event) => {
    event.preventDefault()
    setQuantity(quantity + 1)
  }

  const handleQuantitySubstraction = (event) => {
    event.preventDefault()
    if (quantity - 1 === 0) return
    setQuantity(quantity - 1)
  }

  const handleRemove = (event) => {
    event.preventDefault()
    dispatch(removeItem(item.id, uid))
  }

  useEffect(() => {
    dispatch(updateItem(item.id, uid, quantity))
  }, [quantity])

  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.imgContainer}>
        <img src={item?.image} alt="" />
      </div>
      <div className={styles.sneakerNameContainer}>
        <span><b>Nombre:</b></span>
        <span>{item?.name}</span>
      </div>
      <div className={styles.sneakerPriceContainer}>
        <span><b>Precio:</b></span>
        <span>${item?.price}</span>
      </div>
      <div className={styles.quantityContainer}>
        <div className={styles.quantityInputContainer}>
          <label htmlFor="quantity"><b>Cantidad:</b></label>
          <input type="text" id="quantity" name="quantity" value={quantity} />
        </div>
        <div className={styles.quantityHandlersContainer}>
          <button onClick={handleQuantityAddition}>+</button>
          <button onClick={handleQuantitySubstraction}>-</button>
        </div>
      </div>
      <div className={styles.sneakerSizeContainer}>
        <span><b>Talle:</b></span>
        <span>{item?.size}</span>
      </div>
      <div className={styles.removeHandlerContainer}>
        <button onClick={handleRemove}>X</button>
      </div>
    </div>
  )
}