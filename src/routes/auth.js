const express = require('express')
const router = express.Router()

/**
 * Authenticate against google
 * @route POST /auth/google
 * @group Auth - Google authentication
 * @returns {object} 200 - success
 */
router.get('/auth/google', (req, res) => {
  res.status(200)
  res.json({ status: 'success' })
})

module.exports = router
