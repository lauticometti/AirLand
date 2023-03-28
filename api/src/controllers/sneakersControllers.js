const { db } = require('../firebase')

const getAllSneakers = async () => {
	try {
		const querySnap = await db.collection('ZAPATILLAS').get()
		const sneakers = querySnap.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}))
		return sneakers
	} catch (error) {
		throw Error(error.message)
	}
}

const getSizes = async (req, res) => {
	try {
		const sneakers = await db.collection('ZAPATILLAS').get()
		const sizes = [
			...new Set(
				sneakers.docs
					.map(doc => doc.data())
					.map(sneaker => sneaker.SIZE)
					.map(sizeObj => Object.keys(sizeObj))
					.reduce((acc, cur) => acc.concat(cur), [])
			)
		]
			.sort((a, b) => a - b)
			.map(size => Number(size))
		res.status(200).json(sizes)
	} catch (error) {
		res.status(400).json(error.message)
	}
}

const postSneakers = async (req, res) => {
	try {
		await db.collection('ZAPATILLAS').add(req.body)
		res.status(201).json('Succesfully created!')
	} catch (error) {
		res.status(400).json(error.message)
	}
}
const getSneakersById = async (req, res) => {
	try {
		const sneaker = (
			await db.collection('ZAPATILLAS').doc(req.params.id).get()
		).data()
		res.status(200).json(sneaker)
	} catch (error) {
		res.status(400).json(error.message)
	}
}
const deleteSneakers = async (req, res) => {
	const { STATUS } = req.body
	try {
		await db.collection('ZAPATILLAS').doc(req.params.id).update({ STATUS })
		res.status(200).json('Succesfully deleted!')
	} catch (error) {
		res.status(400).json(error.message)
	}
}
const patchSneakers = async (req, res) => {
	try {
		await db.collection('ZAPATILLAS').doc(req.params.id).update(req.body)
		res.status(200).json('Succesfully updated!')
	} catch (error) {
		res.status(400).json(error.message)
	}
}

module.exports = {
	getAllSneakers,
	getSizes,
	postSneakers,
	getSneakersById,
	patchSneakers,
	deleteSneakers
}
