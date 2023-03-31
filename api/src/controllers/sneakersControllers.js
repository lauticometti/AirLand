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

const getSizes = async () => {
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
		return sizes
	} catch (error) {
		throw Error(error.message)
	}
}

const postSneakers = async (sneaker) => {
	try {
		await db.collection('ZAPATILLAS').add(sneaker)
		return 'Succesfully created!'
	} catch (error) {
		throw Error(error.message)
	}
}

const getSneakersById = async (id) => {
	try {
		const sneaker = (
			await db.collection('ZAPATILLAS').doc(id).get()
		).data()
		console.log(sneaker)
		return sneaker
	} catch (error) {
		throw Error(error.message)
	}
}

const deleteSneakers = async (id) => {
	try {
		await db.collection('ZAPATILLAS').doc(id).update({ "STATUS": false })
		return 'Succesfully deleted!'
	} catch (error) {
		throw Error(error.message)
	}
}

const patchSneakers = async (id, updateObj) => {
	try {
		await db.collection('ZAPATILLAS').doc(id).update(updateObj)
		return 'Succesfully updated!'
	} catch (error) {
		throw Error(error.message)
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
