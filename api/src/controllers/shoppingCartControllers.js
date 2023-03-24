const { db } = require('../firebase')

const getShoppingCart = async (userId) => {
  try {
    const response = await db.collection(`${userId}/shopping-cart/zapatillas`).get()
    const sneakers = response.docs.map(doc => ({
      id: doc.id,
      image: doc.data().IMAGE,
      name: doc.data().NAME,
      price: doc.data().PRICE * Number(doc.data().CANTIDAD),
      quantity: doc.data().CANTIDAD,
      size: doc.data().SIZE
    }))
    return sneakers
  } catch (error) {
    throw new Error(error.message)
  }
}

const addSneakersToShoppingCart = async (userId, sneakerId, size) => {
  try {
    const sneaker = await (await db.collection(`/ZAPATILLAS`).doc(sneakerId).get()).data()
    const sneakerRef = await db.collection(`${userId}/shopping-cart/zapatillas`)
    if ((await sneakerRef.doc(sneakerId).get()).data()) {
      sneakerRef.doc(sneakerId).set({
        ...sneaker,
        SIZE: size,
        CANTIDAD: (await sneakerRef.doc(sneakerId).get()).data().CANTIDAD + 1
      })
    } else {
      sneakerRef.doc(sneakerId).set({
        ...sneaker,
        SIZE: size,
        CANTIDAD: 1
      })
    }
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

const updateQuantityFromShoppingCart = async (userId, sneakerId, quantity) => {

  console.log({ userId, sneakerId, quantity })

  try {
    db.collection(`${userId}/shopping-cart/zapatillas`)
      .doc(sneakerId)
      .update({ CANTIDAD: Number(quantity) })
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = { getShoppingCart, addSneakersToShoppingCart, removeSneakersFromShoppingCart, updateQuantityFromShoppingCart }