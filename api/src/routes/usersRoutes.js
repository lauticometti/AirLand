const { Router } = require('express')
const {
	postUsers,
	getUsersById,
	addUserInfo,
	addUserAddress,
	getAddressById
} = require('../controllers/usersControllers')

const router = Router()

router.post('/', postUsers)

router.patch('/user-info/:id', addUserInfo)

router.post('/user-address/:id', addUserAddress)

router.get('/:id', getUsersById)

router.get('/user-address/:id', getAddressById)


module.exports = router
