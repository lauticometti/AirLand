const { db } = require('../firebase')

const getShoppingCart = async (userId) => {
  try {
    const response = await db.collection(`users/${userId}/cart`).get()
    const sneakers = response.docs.map(doc => ({
      id: doc.id,
      image: doc.data().IMAGE,
      name: doc.data().NAME,
      price: doc.data().PRICE * Number(doc.data().QUANTITY),
      unityPrice: Number(doc.data().PRICE),
      quantity: doc.data().QUANTITY,
      selectedSize: doc.data().SELECTED_SIZE,
      sizes: doc.data().SIZE
    }))
    return sneakers
  } catch (error) {
    throw new Error(error.message)
  }
}

const addSneakersToShoppingCart = async (userId, sneakerId, size) => {
  try {
    const sneaker = await (await db.collection(`/ZAPATILLAS`).doc(sneakerId).get()).data()
    const sneakerRef = await db.collection('users')
    if ((await sneakerRef.doc(`${userId}/cart/${sneakerId}`).get()).data()) {
      sneakerRef.doc(`${userId}/cart/${sneakerId}`).set({
        ...sneaker,
        SELECTED_SIZE: size,
        QUANTITY: (await sneakerRef.doc(`${userId}/cart/${sneakerId}`).get()).data().QUANTITY + 1
      })
    } else {
      sneakerRef.doc(`${userId}/cart/${sneakerId}`).set({
        ...sneaker,
        SELECTED_SIZE: size,
        QUANTITY: 1
      })
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

const removeSneakersFromShoppingCart = async (userId, sneakerId) => {
  try {
    db.collection(`users`)
      .doc(`${userId}/cart/${sneakerId}`)
      .delete()
  } catch (error) {
    throw new Error(error.message)
  }
}

const updateQuantityFromShoppingCart = async (userId, sneakerId, quantity) => {
  try {
    db.collection(`users`)
      .doc(`${userId}/cart/${sneakerId}`)
      .update({ QUANTITY: Number(quantity) })
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = { getShoppingCart, addSneakersToShoppingCart, removeSneakersFromShoppingCart, updateQuantityFromShoppingCart }