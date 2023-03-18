const { Router } = require('express')
const { check } = require('express-validator')

const { emailExiste } = require('../../helpers/db-validators')
const {
	getUsers,
	postUsers,
	getUsersById,
	deleteUsers,
	patchUsers
} = require('../controllers/usersControllers')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

router.get('/', getUsers)

router.post(
	'/users',
	[
		check('NAME', 'El nombre es obligatorio').not().isEmpty(),
		check('PASSWORD', 'El password debe ser mas de 6 letras').isLength({
			min: 6
		}),
		check('EMAIL', 'El correo no es valido').isEmail(),
		check('EMAIL').custom(emailExiste),

		check('ROL', 'El rol no es valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),

		validarCampos
	],
	postUsers
)

router.get('/:id', getUsersById)

router.delete('/:id', deleteUsers)

router.patch('/:id', patchUsers)

module.exports = router
