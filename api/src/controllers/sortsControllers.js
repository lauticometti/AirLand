const sortByName = (arrSneakers, order) => {
  let orderedSneakers
  switch (order) {
    case 'A-Z':
      orderedSneakers = arrSneakers.sort((a, b) => {
        if (a.NAME.toLowerCase() > b.NAME.toLowerCase()) return 1
        if (a.NAME.toLowerCase() < b.NAME.toLowerCase()) return -1
        return 0
      })
      return orderedSneakers
    case 'Z-A':
      orderedSneakers = arrSneakers.sort((a, b) => {
        if (a.NAME.toLowerCase() < b.NAME.toLowerCase()) return 1
        if (a.NAME.toLowerCase() > b.NAME.toLowerCase()) return -1
        return 0
      })
      return orderedSneakers
    default:
      arrSneakers
  }
}

const sortByPrice = (arrSneakers, order) => {
  let orderedSneakers
  switch (order) {
    case 'asc':
      orderedSneakers = arrSneakers.sort((a, b) => a.PRICE - b.PRICE)
      return orderedSneakers
    case 'desc':
      orderedSneakers = arrSneakers.sort((a, b) => b.PRICE - a.PRICE)
      return orderedSneakers
    default:
      arrSneakers
  }
}

module.exports = {
  sortByName,
  sortByPrice
}