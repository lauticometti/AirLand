const { db } = require("../firebase")
const { removeSneakersFromShoppingCart, getShoppingCart } = require("./shoppingCartControllers")

const getAllOrdersById = async (userId) => {
  try {
    const ordersById = await (await db.collection(`users/${userId}/orders`).get()).docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return ordersById
  } catch (error) {
    throw new Error(error.message)
  }
}

const addOrders = async (userId, paymentId, dateCreated) => {
  try {
    const cart = await getShoppingCart(userId)
    await db.collection(`users/${userId}/orders`).add({ cart: cart, status: 'approved', paymentId, dateCreated })
    await (await db.collection(`users/${userId}/cart`).get()).docs.map(sneaker => removeSneakersFromShoppingCart(userId, sneaker.id))
    cart.forEach(sneaker => deleteStock(sneaker))
  } catch (error) {
    throw new Error(error.message)
  }
}

const deleteStock = async (sneakerObj) => {
  const { selectedSize } = sneakerObj
  try {
    const sneaker = await (await db.collection('ZAPATILLAS').doc(sneakerObj.id).get()).data()
    await db.collection('ZAPATILLAS').doc(sneakerObj.id).update({
      "SIZE": {
        ...sneaker.SIZE,
        [selectedSize]: (sneaker.SIZE[selectedSize] - sneakerObj.quantity).toString()
      }
    })
    console.log(sneaker.SIZE)

  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getAllOrdersById,
  addOrders
}