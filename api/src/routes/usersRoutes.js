const { Router } = require('express')
const {
	postUsers,
	getUsersById,
	addUserInfo,
	addUserAddress,
	getAddressById,
	deleteUserAdress
} = require('../controllers/usersControllers')

const router = Router()

router.post('/', postUsers)

router.patch('/user-info/:id', addUserInfo)

router.post('/user-address/:id', addUserAddress)

router.get('/:id', getUsersById)

router.get('/user-address/:id', getAddressById)

router.delete('user-address/:id/:addressID', deleteUserAdress)


module.exports = router
