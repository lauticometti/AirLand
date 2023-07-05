const { db } = require('../firebase')
const { FieldValue } = require('firebase-admin/firestore')

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
		const sneaker = (await db.collection('ZAPATILLAS').doc(id).get()).data()
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

const addReviewSneaker = async (sneakerID, userID, name, stars, comment) => {
	try {
		const sneaker = await (await db.collection('ZAPATILLAS').doc(sneakerID).get()).data()
		db.collection('ZAPATILLAS')
			.doc(sneakerID)
			.update({
				"REVIEW": {
					...sneaker.REVIEW,
					[userID]: {
						"name": name,
						"stars": stars,
						"comment": comment
					}
				}
			})
		return 'Review added successfully!'
	} catch (error) {
		throw Error(error.message)
	}
}

const deleteReviewSneaker = async (sneakerID, userID) => {
	try {
		db.collection('ZAPATILLAS')
			.doc(sneakerID)
			.set({
				"REVIEW": {
					[userID]: FieldValue.delete()
				}
			}, { merge: true })
		return 'Review deleted successfully!'
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
	deleteSneakers,
	addReviewSneaker,
	deleteReviewSneaker
}
