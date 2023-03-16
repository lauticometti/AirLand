const { db } = require('../firebase')

const filterByName = async (name) => {
  try {
    const sneakers = await db.collection('ZAPATILLAS').get()
    const sneakersArr = sneakers.docs.map(sneaker => ({
      ...sneaker.data()
    }))
    if (!name) return sneakersArr
    const filteredSneakers = sneakersArr.filter(sneaker => {
      if (sneaker.NAME.toLowerCase().includes(name.toLowerCase())) return sneaker
    })
    return filteredSneakers
  } catch (error) {
    throw new Error('Error en la DB')
  }
}

const filterBySize = async (size) => {

}

const filterByType = async (type) => {
  try {
    const sneakers = await db.collection('ZAPATILLAS').get()
    const sneakersArr = sneakers.docs.map(sneaker => ({
      ...sneaker.data()
    }))
    if (!type) return sneakersArr
    const filteredSneakers = sneakersArr.filter(sneaker => {
      if (sneaker.TYPE.toLowerCase() === type) return sneaker
    })
    return filteredSneakers
  } catch (error) {
    throw new Error('Error en la DB')
  }
}

module.exports = { filterByName, filterBySize, filterByType }