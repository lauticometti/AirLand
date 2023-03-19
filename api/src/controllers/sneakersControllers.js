const { db } = require('../firebase')

const getSnickers = async (req, res) => {
	try {
		const querySnap = await db.collection('ZAPATILLAS').get()
		const sneakers = querySnap.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}))
		res.status(200).json(sneakers)
	} catch (error) {
		res.status(400).json(error.message)
	}

	// trae los campos q quiero
	// elnombredelcampo: doc.data().elnombredelcampo

	// trae solo el primer objeto de la coleccion
	// console.log(querySnap.docs[0].data())
}

const postSnickers = async (req, res) => {
	const {
		ACTION,
		CODE,
		RATING,
		REVIEW,
		IMAGE,
		NAME,
		PRICE,
		SIZE,
		STATUS,
		STOCK,
		DESCRIPTION,
	} = req.body
	try {
		await db.collection('ZAPATILLAS').add({
			ACTION,
			CODE,
			RATING,
			REVIEW,
			IMAGE,
			NAME,
			PRICE,
			SIZE,
			STATUS,
			STOCK,
			DESCRIPTION
		})
		res.status(201).json('Succesfully created!')
	} catch (error) {
		res.status(400).json(error.message)
	}
}
const getSnickersById = async (req, res) => {
	// para mostrar una zapatilla por id
	try {
		const sneaker = await (
			await db.collection('ZAPATILLAS').doc(req.params.id).get()
		).data()
		res.status(200).json(sneaker)
	} catch (error) {
		res.status(400).json(error.message)
	}
}
const deleteSnickers = async (req, res) => {
	// para mostrar una zapatilla por id
	const { STATUS } = req.body
	try {
		await db.collection('ZAPATILLAS').doc(req.params.id).update({ STATUS })
		res.status(200).json('Succesfully deleted!')
	} catch (error) {
		res.status(400).json(error.message)
	}
}
const patchSnickers = async (req, res) => {
	try {
		await db.collection('ZAPATILLAS').doc(req.params.id).update(req.body)
		res.status(200).json('Succesfully updated!')
	} catch (error) {
		res.status(400).json(error.message)
	}
}

module.exports = {
	getSnickers,
	postSnickers,
	getSnickersById,
	patchSnickers,
	deleteSnickers
}
