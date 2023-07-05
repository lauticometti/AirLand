const filterMaster = (shoes, { sizes, types, minPrice, name }) => {
	if (sizes) {
		shoes = shoes.filter(el => el.SIZE[sizes] && el.SIZE[sizes] > 0)
	}

	if (types) {
		types = types.split('_')
		types = types.map(type => type.toLowerCase())
		shoes = shoes.filter(el => {
			if (!el.TYPE) return true
			return types.includes(el.TYPE.toLowerCase())
		})
	}

	if (minPrice) {
		shoes = shoes.filter(el => Number(el.PRICE) > Number(minPrice))
	}

	if (name) {
		const cleanName = name.trim().replace(/\s+/g, ' ').toLowerCase()

		const separatedWords = cleanName.split(' ')

		shoes = shoes.filter(shoe =>
			separatedWords.every(word => shoe.NAME.toLowerCase().includes(word))
		)
	}

	return shoes
}

module.exports = filterMaster
