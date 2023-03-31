const axios = require('axios')
const Router = require('express')
const { createPreference } = require('../controllers/paymentControllers')

const router = Router()

router.post('/create-preference', async (req, res) => {
  const { userId } = req.body

  try {
    const preference = await createPreference(userId)
    if (preference.isApproved) {
      await axios.post(
        `http://localhost:3001/api/order/`,
        {
          userId,
          paymentId: preference.paymentId,
          dateCreated: preference.dateCreated
        }
      )
    }
    res.status(200).json(preference)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

module.exports = router