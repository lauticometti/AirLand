const filterMaster = (shoes, { sizes, types, minPrice, name }) => {
	if (sizes) {
		console.log(sizes)
		shoes = shoes.filter(el => el.SIZE[sizes] && el.SIZE[sizes] > 0)
	}

	// if (types) {
	// 	types.forEach(type => type.toLowerCase())
	// 	shoes = shoes.filter(el => {
	// 		if (!el.TYPE) return true
	// 		return types.includes(el.TYPE.toLowerCase())
	// 	})
	// }

	if (minPrice) {
		shoes = shoes.filter(el => Number(el.PRICE) > Number(minPrice))
	}

	if (name) {
		const cleanName = name.trim().replace(/\s+/g, ' ').toLowerCase()

		shoes = shoes.filter(el => el.NAME.toLowerCase().includes(cleanName))
	}

	return shoes
}

module.exports = filterMaster