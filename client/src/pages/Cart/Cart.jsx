import { useSelector } from 'react-redux'
import { CartItem, Navbar } from '../../components'
import styles from './Cart.module.css'

export function Cart() {

  const { cart } = useSelector(state => state.cart)
  const totalPrice = cart.reduce((acum, sneaker) => acum + sneaker.price, 0)

  return (
    <>
      <Navbar />
      <div className={styles.cartContainer}>
        {
          cart.map(sneaker => (
            <CartItem item={sneaker} key={sneaker.id} />
          ))
        }
        <div className={styles.totalPriceContainer}>
          <h3>Total price: ${totalPrice}</h3>
        </div>
        <div className={styles.buyButtonContainer}>
          <button>Finalizar compra</button>
        </div>
      </div>
    </>
  )
}