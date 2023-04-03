const { Router } = require('express')
const router = Router()
const {
	welcomeEmail,
	successPurchase
} = require('../controllers/emailControllers')

router.post('/new-user', async (req, res) => {
	const { email, displayName } = req.body

	try {
		let info = await welcomeEmail(email, displayName)
		res.status(200).json(info)
	} catch (error) {
		res.status(400).json(error.message)
	}
})

router.post('/success-purchase', async (req, res) => {
	const { email, displayName } = req.body

	try {
		let info = await successPurchase(email, displayName)
		res.status(200).json(info)
	} catch (error) {
		res.status(400).json(error.message)
	}
})

module.exports = router
