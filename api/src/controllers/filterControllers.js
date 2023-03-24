const { db } = require('../firebase')
const NodeCache = require('node-cache')
const filterMaster = require('../../helpers/filterMaster')
const sortMaster = require('../../helpers/sortMaster')

// cache create
const shoesCache = new NodeCache({ stdTTL: 200 })

const getShoes = async queries => {
	let currentShoes
	if (shoesCache.has('shoes')) {
		currentShoes = shoesCache.get('shoes')
	} else {
		try {
			const querySnap = await db.collection('ZAPATILLAS').get()
			currentShoes = querySnap.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}))
			shoesCache.set('shoes', currentShoes)
		} catch (error) {
			throw Error('Database error')
		}
	}
	// filterMaster return an array with filtered shoes, and sortMaster take that array like parameter.
	// then, sortMaster return the shoes sorted and the getShoes return it

	return sortMaster(filterMaster(currentShoes, queries), queries.sort)
}

module.exports = { getShoes }
