const { Router } = require('express')
const {
	getAllSneakers,
	getSizes,
	postSneakers,
	getSneakersById,
	deleteSneakers,
	patchSneakers
} = require('../controllers/sneakersControllers')

const router = Router()

router.get('/', async (req, res) => {
	const { id } = req.query
	if (id) {
		try {
			const sneaker = await getSneakersById(id)
			res.status(200).json(sneaker)
		} catch (error) {
			res.status(400).json(error.message)
		}
	} else {
		try {
			const sneakers = await getAllSneakers()
			res.status(200).json(sneakers)
		} catch (error) {
			res.status(400).json(error.message)
		}
	}
})

router.get('/sizes', async (req, res) => {
	try {
		const sizes = await getSizes()
		res.status(200).json(sizes)
	} catch (error) {
		res.status(400).json(error.message)
	}
})

router.post('/', async (req, res) => {
	try {
		const message = await postSneakers(req.body)
		res.status(200).json(message)
	} catch (error) {
		res.status(400).json(error.message)
	}
})

router.delete('/:id', async (req, res) => {
	const { id } = req.params
	const { status } = req.body
	try {
		const message = await deleteSneakers(id, status)
		res.status(200).json(message)
	} catch (error) {
		res.status(400).json(error.message)
	}
})

router.patch('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const message = await patchSneakers(id, req.body)
		res.status(200).json(message)
	} catch (error) {
		res.status(400).json(error.message)
	}
})

module.exports = router
