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

router.post('/sneakers', postSnickers)

router.get('/sneakers/:id', getSnickersById)

router.delete('/sneakers/:id', deleteSnickers)

router.patch('/sneakers/:id', patchSnickers)

module.exports = router
