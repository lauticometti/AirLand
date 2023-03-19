const { Router } = require('express')
const {
	getSneakers,
	postSneakers,
	getSneakersById,
	deleteSneakers,
	patchSneakers
} = require('../controllers/sneakersControllers')

const router = Router()

router.get('/', getSneakers)

router.post('/', postSneakers)

router.get('/:id', getSneakersById)

router.delete('/:id', deleteSneakers)

router.patch('/:id', patchSneakers)

module.exports = router
