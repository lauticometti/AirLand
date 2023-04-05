const axios = require('axios')
const Router = require('express')
const { createPreference } = require('../controllers/paymentControllers')

const router = Router()

const BASE_URL = process.env.BACK_URL || 'http://localhost:3001/api'

router.post('/create-preference', async (req, res) => {
  const { userId, form, totalPrice } = req.body

  try {
    const preference = await createPreference(userId, form, totalPrice)
    if (preference.isApproved) {
      await axios.post(
        `${BASE_URL}/order/`,
        {
          userId,
          paymentId: preference.paymentId,
          dateCreated: preference.dateCreated,
          totalAmount: totalPrice,
          shipments: preference.shipments,
          orderCode: preference.orderCode
        }
      )
    }
    res.status(200).json(preference)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

module.exports = router