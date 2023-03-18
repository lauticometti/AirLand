const { db } = require('../firebase')

const filterByName = async name => {
	try {
		const sneakers = await db.collection('ZAPATILLAS').get()
		const sneakersArr = sneakers.docs.map(sneaker => ({
			...sneaker.data()
		}))
		if (!name) return sneakersArr
		const filteredSneakers = sneakersArr.filter(sneaker =>
			sneaker.NAME.toLowerCase().includes(name.toLowerCase())
		)
		return filteredSneakers
	} catch (error) {
		throw new Error('Error en la DB')
	}
}

const filterBySize = async size => {
	try {
		const sneakers = await db.collection('ZAPATILLAS').get()
		const sneakersArr = sneakers.docs.map(sneaker => ({
			...sneaker.data()
		}))
		const filteredSneakers = sneakersArr.filter(
			sneaker => sneaker.SIZE[size] > 0
		)
		return filteredSneakers
	} catch (error) {
		throw new Error('Error en la DB')
	}
}

const filterByType = async type => {
	try {
		const sneakers = await db.collection('ZAPATILLAS').get()
		const sneakersArr = sneakers.docs.map(sneaker => ({
			...sneaker.data()
		}))
		if (!type) return sneakersArr
		const filteredSneakers = sneakersArr.filter(
			sneaker => sneaker.TYPE.toLowerCase() === type
		)
		return filteredSneakers
	} catch (error) {
		throw new Error('Error en la DB')
	}
}

const noFilters = async () => {
	try {
		const sneakers = await db.collection('ZAPATILLAS').get()
		const sneakersArr = sneakers.docs.map(sneaker => ({
			...sneaker.data()
		}))
		return sneakersArr
	} catch (error) {
		throw new Error('Error en la DB')
	}
}

module.exports = { filterByName, filterBySize, filterByType, noFilters }
