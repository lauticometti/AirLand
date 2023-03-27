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

const addCartToShopping = async (userId) => {
  try {
    await getShoppingCart(userId)
    await db.collection(`users/${userId}/shopping`).add({ cart: cart, status: 'pending' })
    await (await db.collection(`users/${userId}/cart`).get()).docs.map(sneaker => removeSneakersFromShoppingCart(userId, sneaker.id))
  } catch (error) {
    throw new Error(error.message)
  }
}

const getShoppingById = async (userId, cartId) => {
  try {
    const shoppingById = await (await db.collection(`users/${userId}/shopping`).doc(`${cartId}`).get()).data()
    return shoppingById
  } catch (error) {
    throw new Error(error.message)
  }
}

const createPreference = async (userId, cartId, payerInfo) => {
  let shopping

  try {
    shopping = await getShoppingById(userId, cartId)
  } catch (error) {
    throw new Error(error.message)
  }

  let preference = {
    items: shopping.cart.map(zapatilla => ({
      title: zapatilla.name,
      unit_price: Number(zapatilla.unityPrice),
      quantity: Number(zapatilla.quantity)
    })),
    payer: {

    },
    back_urls: {
      "success": "http://localhost:5173/",
      "failure": "http://localhost:5173/",
      "pending": "http://localhost:5173/"
    },
    auto_return: "approved",
  }

  return preference
}

module.exports = { getShoppingCart, addSneakersToShoppingCart, removeSneakersFromShoppingCart, updateQuantityFromShoppingCart, addCartToShopping, createPreference }