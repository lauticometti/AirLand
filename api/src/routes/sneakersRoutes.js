const { Router } = require('express')
const {
	getSnickers,
	postSnickers,
	getSnickersById,
	deleteSnickers,
	patchSnickers
} = require('../controllers/sneakersControllers')

const router = Router()

router.get('/', getSnickers)

router.post('/', postSnickers)

router.get('/:id', getSnickersById)

router.delete('/:id', deleteSnickers)

router.patch('/:id', patchSnickers)

module.exports = router
