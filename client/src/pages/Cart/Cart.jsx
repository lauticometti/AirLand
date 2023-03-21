import { useSelector } from 'react-redux'

export function Cart() {

  const { cart } = useSelector(state => state.cart)

  return (
    <div>
      {
        cart.map(a => (
          <div>
            <div>
              <img src={a.image} alt="" />
            </div>
            <div>
              <p>{a.name}</p>
            </div>
            <div>
              <p>{a.price}</p>
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input type="text" id="quantity" name="quantity" value={a.quantity} />
            </div>
            <div>
              <p>{a.size}</p>
            </div>
          </div>
        ))
      }
      <div>
        <p>Total price: {cart[0].price}</p>
      </div>
    </div>
  )
}