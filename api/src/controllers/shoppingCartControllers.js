const { db } = require('../firebase')

const getShoppingCart = async (userId) => {
  try {
    const response = await db.collection(`${userId}/shopping-cart/zapatillas`).get()
    const sneakers = response.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return sneakers
  } catch (error) {
    throw new Error(error.message)
  }
}

const addSneakersToShoppingCart = async (userId, sneakerId) => {
  try {
    const sneaker = await (await db.collection(`/ZAPATILLAS`).doc(sneakerId).get()).data()
    db.collection(`${userId}/shopping-cart/zapatillas`)
      .doc(sneakerId)
      .set(sneaker)
  } catch (error) {
    throw new Error(error.message)
  }
}

const removeSneakersFromShoppingCart = async (userId, sneakerId) => {
  try {
    db.collection(`${userId}/shopping-cart/zapatillas`)
      .doc(sneakerId)
      .delete()
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = { getShoppingCart, addSneakersToShoppingCart, removeSneakersFromShoppingCart }