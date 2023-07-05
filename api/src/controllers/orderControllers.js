const { db, admin } = require("../firebase")
const { removeSneakersFromShoppingCart, getShoppingCart } = require("./shoppingCartControllers")

const getAllOrders = async () => {
	try {
		const listUsersResult = await admin.auth().listUsers()
		const userIds = listUsersResult.users.map(user => user.uid)
		const ordersPromises = userIds.map(async userId => {
			const ordersById = await (
				await db.collection(`users/${userId}/orders`).get()
			).docs.map(doc => ({ id: doc.id, ...doc.data() }))
			return ordersById
		})
		const ordersByUser = await Promise.all(ordersPromises)
		const arrFlat = [].concat(...ordersByUser)
		return arrFlat
	} catch (error) {
		throw Error(error.message)
	}
}

const getAllOrdersById = async (userId) => {
  try {
    const ordersById = await (await db.collection(`users/${userId}/orders`).get()).docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return ordersById
  } catch (error) {
    throw new Error(error.message)
  }
}

const addOrders = async (userId, paymentId, dateCreated, totalAmount, shipments, orderCode) => {
  try {
    const cart = await getShoppingCart(userId)
    await db.collection(`users/${userId}/orders`).add({ cart: cart, status: 'approved', paymentId, dateCreated, totalAmount, shipments, orderCode })
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
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getAllOrders,
  getAllOrdersById,
  addOrders
}