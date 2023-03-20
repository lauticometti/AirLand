const { Router } = require('express')
const {
	filterByName,
	filterByType,
	filterBySizes,
	noFilters
} = require('../controllers/filtersControllers')
const { sortByName, sortByPrice } = require('../controllers/sortsControllers')
const router = Router()

// Name
router.get('/', async (req, res) => {
	const { name, type, sizes, sort, order } = req.query
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
					filterAndOrderedSneakers
				})
			}
			res.status(200).json(filteredSneakers)
		} catch (error) {
			res.status(400).json(error.message)
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
					filterAndOrderedSneakers
				})
			}
			res.status(200).json(filteredSneakers)
		} catch (error) {
			res.status(400).json(error.message)
		}
	}
	// Size
	if (sizes) {
		try {
			const filteredSneakers = await filterBySizes(sizes)
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
				return res.status(200).json(filterAndOrderedSneakers)
			}
			res.status(200).json(filteredSneakers)
		} catch (error) {
			res.status(400).json(error.message)
		}
	}

	if (!name && !type && !sizes) {
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
				return res.status(200).json(orderedSneakers)
			}
			res.status(200).json(sneakersArr)
		} catch (error) {
			res.status(400).json(error.message)
		}
	}
})

module.exports = router
