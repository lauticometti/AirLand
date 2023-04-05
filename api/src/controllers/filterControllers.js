const { db } = require('../firebase')
const NodeCache = require('node-cache')
const filterMaster = require('../../helpers/filterMaster')
const sortMaster = require('../../helpers/sortMaster')

// cache create
const shoesCache = new NodeCache({ stdTTL: 200 })

const getShoes = async queries => {
	async function getAllShoes() {
		let shoes
		try {
			const querySnap = await db.collection('ZAPATILLAS').get()
			shoes = querySnap.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}))
			shoesCache.set('shoes', shoes)
		} catch (error) {
			throw Error('Database error')
		}
		return shoes
	}
	let currentShoes
	if (queries.refresh) {
		currentShoes = getAllShoes()
	} else if (shoesCache.has('shoes')) {
		currentShoes = shoesCache.get('shoes')
	} else {
		currentShoes = getAllShoes()
	}

	// filterMaster return an array with filtered shoes, and sortMaster take that array like parameter.
	// then, sortMaster return the shoes sorted and the getShoes return it

	return sortMaster(filterMaster(currentShoes, queries), queries.sort)
}

module.exports = { getShoes }
