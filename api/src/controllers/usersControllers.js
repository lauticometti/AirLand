const { db } = require('../firebase')
const axios = require('axios')

const postUsers = async (req, res) => {
	const { user } = req.body
	try {
		const userRef = await db.collection(`users`)
		if ((await userRef.doc(`${user.uid}/userInfo/personalInfo`).get()).data()) {
			const userRef = await db.collection(`users/${user.uid}/userInfo`).get()
			const userDB = userRef.docs.map(doc => ({ ...doc.data() }))
			return res.status(200).json(...userDB)
		} else {
			await userRef.doc(`${user.uid}/userInfo/personalInfo`).set(user)
			const { data } = await axios.post(
				`${process.env.LOCALHOST_BACK_URL}/email/new-user`,
				{
					email: user.email,
					displayName: user.displayName
				}
			)
			console.log(data)
			return res.status(201).json(user)
		}
	} catch (error) {
		res.status(400).json(error.message)
	}
}

const getUsersById = async (req, res) => {
	const { id } = req.params
	try {
		const userRef = await db.collection(`users`)
		const userDB = (
			await userRef.doc(`${id}/userInfo/personalInfo`).get()
		).data()
		res.status(200).json({ ...userDB })
	} catch (error) {
		res.status(400).json(error.message)
	}
}

const getAddressById = async (req, res) => {
	const { id } = req.params
	try {
		const addressRef = await db.collection(`users/${id}/addressInfo`).get()
		const addressDB = addressRef.docs.map(doc => ({ id: doc.id, ...doc.data() }))
		res.status(200).json([...addressDB])
	} catch (error) {
		res.status(400).json(error.message)
	}
}

const addUserInfo = async (req, res) => {
	const { id } = req.params
	const { userInfo } = req.body
	try {
		db.collection(`users`).doc(`${id}/userInfo/personalInfo`).update(userInfo)
		res.status(200).json(userInfo)
	} catch (error) {
		res.status(400).json(error.message)
	}
}

const addUserAddress = async (req, res) => {
	const { id } = req.params
	const { userAddress } = req.body
	try {
		db.collection(`users/${id}/addressInfo`).add({ ...userAddress })
		res.status(200).json([userAddress])
	} catch (error) {
		res.status(400).json(error.message)
	}
}

const deleteUserAdress = async (req, res) => {
	const { index, userId } = req.body
	try {
		const addressRef = await db.collection(`users/${userId}/addressInfo`).get()
		const addressDB = addressRef.docs.map(doc => ({ id: doc.id, ...doc.data() }))
		const addressToDelete = addressDB[index].id
		db.collection(`users`)
			.doc(`${userId}/addressInfo/${addressToDelete}`)
			.delete()
		res.status(200).json('Address deleted!')
	} catch (error) {
		res.status(400).json(error.message)
	}
}

module.exports = {
	postUsers,
	getUsersById,
	getAddressById,
	addUserInfo,
	addUserAddress,
	deleteUserAdress
}
