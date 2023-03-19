const { db } = require('../firebase')
const bcrypt = require('bcrypt')

const getUsers = async (req, res) => {
	try {
		const querySnap = await db.collection('USUARIOS').get()
		const usuarios = querySnap.docs.map(user => ({
			id: user.id,
			...user.data()
		}))
		res.status(200).json(usuarios)
	} catch (error) {
		res.status(400).json(error.message)
	}
}

const postUsers = async (req, res) => {
	const { NAME, EMAIL, PASSWORD, IMG, STATE, ROL, FAVORITES } = req.body
	const user = req.body

	// Encriptar la constraseña

	try {
		await db.collection('USUARIOS').add({
			NAME,
			EMAIL,
			PASSWORD,
			IMG,
			STATE,
			ROL,
			FAVORITES: FAVORITES.map(sneakerId => sneakerId)
		})
		const salt = bcrypt.genSaltSync()
		user.PASSWORD = bcrypt.hashSync(PASSWORD, salt)

		res.status(201).json({
			message: 'Succesfully created!',
			user
		})
	} catch (error) {
		res.status(400).json(error.message)
	}
}
const getUsersById = async (req, res) => {
	// para mostrar una zapatilla por id
	try {
		const user = await (
			await db.collection('USUARIOS').doc(req.params.id).get()
		).data()
		res.status(200).json(user)
	} catch (error) {
		res.status(400).json(error.message)
	}
}
const deleteUsers = async (req, res) => {
	// para mostrar una zapatilla por id

	try {
		await db.collection('USUARIOS').doc(req.params.id).update({ STATE: false })
		res.status(200).json('Succesfully created!')
	} catch (error) {
		res.status(400).json(error.message)
	}
}
const patchUsers = async (req, res) => {
	try {
		await db.collection('USUARIOS').doc(req.params.id).update(req.body)
		res.status(200).json('Succesfully updated!')
	} catch (error) {
		res.status(400).json(error.message)
	}
}

module.exports = {
	getUsers,
	postUsers,
	getUsersById,
	patchUsers,
	deleteUsers
}
