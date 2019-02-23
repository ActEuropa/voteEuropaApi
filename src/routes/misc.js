const express = require('express')
const router = express.Router()

/**
 * Returns pong
 * @route GET /ping
 * @group Misc - simple endpoint to check
 * @returns {object} 200 - pong
 */
router.get('/ping', (req, res) => {
  res.status(200)
  res.json({ 'status': 'pong' })
})

module.exports = router
