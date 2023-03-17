const { Router } = require('express')
const {
	filterByName,
	filterByType,
	filterBySize,
	noFilters
} = require('../controllers/filtersControllers')
const { sortByName, sortByPrice } = require('../controllers/sortsControllers')
const router = Router()

// Name
router.get('/', async (req, res) => {
	const { name, type, size, sort, order } = req.query
	// Name
	if (name) {
		try {
			const filteredSneakers = await filterByName(name)
			if (sort) {
				let filterAndOrderedSneakers
				switch (sort) {
					case 'name':
						filterAndOrderedSneakers = sortByName(filteredSneakers, order)
						break
					case 'price':
						filterAndOrderedSneakers = sortByPrice(filteredSneakers, order)
						break
					default:
						filterAndOrderedSneakers = [...filteredSneakers]
				}
				return res.status(200).json({
					ok: true,
					filterAndOrderedSneakers
				})
			}
			res.status(200).json({
				ok: true,
				filteredSneakers
			})
		} catch (error) {
			res.status(400).json({
				ok: false,
				message: error.message
			})
		}
	}
	// Type
	if (type) {
		try {
			const filteredSneakers = await filterByType(type.toLowerCase())
			if (sort) {
				let filterAndOrderedSneakers
				switch (sort) {
					case 'name':
						filterAndOrderedSneakers = sortByName(filteredSneakers, order)
						break
					case 'price':
						filterAndOrderedSneakers = sortByPrice(filteredSneakers, order)
						break
					default:
						filterAndOrderedSneakers = [...filteredSneakers]
				}
				return res.status(200).json({
					ok: true,
					filterAndOrderedSneakers
				})
			}
			res.status(200).json({
				ok: true,
				filteredSneakers
			})
		} catch (error) {
			res.status(400).json({
				ok: false,
				message: error.message
			})
		}
	}
	// Size
	if (size) {
		try {
			const filteredSneakers = await filterBySize(size)
			if (sort) {
				let filterAndOrderedSneakers
				switch (sort) {
					case 'name':
						filterAndOrderedSneakers = sortByName(filteredSneakers, order)
						break
					case 'price':
						filterAndOrderedSneakers = sortByPrice(filteredSneakers, order)
						break
					default:
						filterAndOrderedSneakers = [...filteredSneakers]
				}
				return res.status(200).json({
					ok: true,
					filterAndOrderedSneakers
				})
			}
			res.status(200).json({
				ok: true,
				filteredSneakers
			})
		} catch (error) {
			res.status(400).json({
				ok: false,
				message: error.message
			})
		}
	}

	if (!name && !type && !size) {
		try {
			const sneakersArr = await noFilters()
			if (sort) {
				let orderedSneakers
				switch (sort) {
					case 'name':
						orderedSneakers = sortByName(sneakersArr, order)
						break
					case 'price':
						orderedSneakers = sortByPrice(sneakersArr, order)
						break
					default:
						orderedSneakers = [...sneakersArr]
				}
				return res.status(200).json({
					ok: true,
					orderedSneakers
				})
			}
			res.status(200).json({
				ok: true,
				sneakersArr
			})
		} catch (error) {
			res.status(400).json({
				ok: false,
				message: error.message
			})
		}
	}
})

module.exports = router
