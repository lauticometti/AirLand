const { Router } = require('express')
const { getShoppingCart, addSneakersToShoppingCart, removeSneakersFromShoppingCart, updateQuantityFromShoppingCart } = require('../controllers/shoppingCartControllers')

const router = Router()

router.get('/:userId', async (req, res) => {
  // devolver todos las zapatillas que el usuario tiene en su shopping cart
  // necesito solo el uid del usuario para devolverle todas sus zapatillas
  const { userId } = req.params
  try {
    const cart = await getShoppingCart(userId)
    res.status(200).json(cart)
  } catch (error) {
    console.log(error)
  }
})

router.post('/add/:userId/:sneakerId/:size', async (req, res) => {
  // agregar una zapatilla al shopping cart del usuario
  // necesito el uid de la zapatilla de la collection 'zapatillas'
  // necesito el uid del usuario para agregarle la zapatilla a su shopping cart'
  const { sneakerId, userId, size } = req.params
  try {
    await addSneakersToShoppingCart(userId, sneakerId, size)
    res.status(200).json('Successfully added!')
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.delete('/delete/:userId/:sneakerId', async (req, res) => {
  // eliminar una zapatilla del shopping cart del usuario
  // necesito el uid de la zapatilla que voy a eliminar en la collection '/userId/shopping-cart/zapatillas'
  // necesito el uid del usuario del que voy a eliminar la zapatilla
  const { sneakerId, userId } = req.params
  try {
    await removeSneakersFromShoppingCart(userId, sneakerId)
    res.status(200).json('Successfully deleted!')
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.patch('/update/:userId/:sneakerId/:quantity', async (req, res) => {
  const { userId, sneakerId, quantity } = req.params
  try {
    await updateQuantityFromShoppingCart(userId, sneakerId, quantity)
    res.status(200).json('Successfully updated!')
  } catch (error) {
    res.status(400).json(error.message)
  }
})

module.exports = router