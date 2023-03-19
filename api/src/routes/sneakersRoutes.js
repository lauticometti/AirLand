const { Router } = require('express')
const {
	getSneakers,
	getSizes,
	postSneakers,
	getSneakersById,
	deleteSneakers,
	patchSneakers
} = require('../controllers/sneakersControllers')

const router = Router()

router.get('/', getSneakers)

router.get('/sizes', getSizes)

router.post('/', postSneakers)

router.get('/:id', getSneakersById)

router.delete('/:id', deleteSneakers)

router.patch('/:id', patchSneakers)

module.exports = router
