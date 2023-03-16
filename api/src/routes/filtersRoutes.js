const { Router } = require('express')
const { filterByName, filterByType, filterBySize } = require('../controllers/filtersControllers')

const router = Router()

// Name
router.get('/', async (req, res) => {
  const { name, type, size } = req.query
  // Name
  if (name) {
    try {
      const filteredSneakers = await filterByName(name)
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
})

module.exports = router