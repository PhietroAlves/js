const express = require('express')
const router = express.Router()

const express = require('express')

const logger = (req, res, next) => {
    const data = new Date()
    console.log(`[${data.toISOString}] - ${req.method} - ${req.url}`)
    next()
}

module.exports = router