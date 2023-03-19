const { Router } = require('express')
const {
	getSnickers,
	getSizes,
	postSnickers,
	getSnickersById,
	deleteSnickers,
	patchSnickers
} = require('../controllers/sneakersControllers')

const router = Router()

router.get('/', getSnickers)

router.get('/sizes', getSizes)

router.get('/:id', getSnickersById)

router.post('/', postSnickers)

router.delete('/:id', deleteSnickers)

router.patch('/:id', patchSnickers)

module.exports = router
