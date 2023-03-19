const { Router } = require('express')
const {
<<<<<<< HEAD
	getSnickers,
	postSnickers,
	getSnickersById,
	deleteSnickers,
	patchSnickers
=======
	getSneakers,
	getSizes,

	postSneakers,
	getSneakersById,
	deleteSneakers,
	patchSneakers
>>>>>>> develop
} = require('../controllers/sneakersControllers')

const router = Router()

router.get('/', getSneakers)

<<<<<<< HEAD
router.get('/sizes', getSizes)
=======
router.post('/', postSneakers)
>>>>>>> develop

router.get('/:id', getSneakersById)

<<<<<<< HEAD
router.post('/', postSnickers)

router.delete('/:id', deleteSnickers)
=======
router.delete('/:id', deleteSneakers)
>>>>>>> develop

router.patch('/:id', patchSneakers)

module.exports = router
