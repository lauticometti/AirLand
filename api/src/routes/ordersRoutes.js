const Router = require('express')
const { getAllOrdersById, addOrders } = require('../controllers/orderControllers')

const router = Router()

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const orders = await getAllOrdersById(id)
    res.json(orders)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.post('/', async (req, res) => {
  const { userId, paymentId, dateCreated, totalAmount, shipments, orderCode } = req.body
  try {
    await addOrders(userId, paymentId, dateCreated, totalAmount, shipments, orderCode)
    res.status(200).json({ ok: true })
  } catch (error) {
    res.status(400).json(error.message)
  }
})

module.exports = router