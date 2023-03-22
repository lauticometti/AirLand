const sortMaster = (shoes, sort) => {
	if (sort) {
		const [type, order] = sort.split('_')

		if (type.toLowerCase() === 'price') {
			if (order === 'up') {
				shoes = shoes.sort((a, b) => a.PRICE - b.PRICE)
			}
			if (order === 'down') {
				shoes = shoes.sort((a, b) => b.PRICE - a.PRICE)
			}
		}
	}

	return shoes
}

module.exports = sortMaster
