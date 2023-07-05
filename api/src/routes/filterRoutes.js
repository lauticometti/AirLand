const { Router } = require('express')
const { getShoes } = require('../controllers/filterControllers')

const router = Router()

router.get('/', async (req, res) => {
	try {
		const shoes = await getShoes(req.query)
		res.status(200).json(shoes)
	} catch (error) {
		res.status(404).json(error.message)
	}
})

module.exports = router
