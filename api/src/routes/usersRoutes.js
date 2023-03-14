const { Router } = require('express')
const {
	getUsers,
	postUsers,
	getUsersById,
	deleteUsers,
	patchUsers
} = require('../controllers/usersControllers')

const router = Router()

router.get('/users', getUsers)

router.post('/users', postUsers)

router.get('/users/:id', getUsersById)

router.delete('/users/:id', deleteUsers)

router.patch('/users/:id', patchUsers)

module.exports = router
