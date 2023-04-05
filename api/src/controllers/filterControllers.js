const { db } = require('../firebase')
const filterMaster = require('../../helpers/filterMaster')
const sortMaster = require('../../helpers/sortMaster')

const getShoes = async queries => {
	let currentShoes

	try {
		const querySnap = await db.collection('ZAPATILLAS').get()
		currentShoes = querySnap.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}))
		// shoesCache.set('shoes', shoes)
	} catch (error) {
		throw Error('Database error')
	}

	// filterMaster return an array with filtered shoes, and sortMaster take that array like parameter.
	// then, sortMaster return the shoes sorted and the getShoes return it

	return sortMaster(filterMaster(currentShoes, queries), queries.sort)
}

module.exports = { getShoes }
