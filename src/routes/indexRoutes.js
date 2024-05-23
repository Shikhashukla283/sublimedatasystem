require('dotenv').config()
const express = require('express')
const app = express()

module.exports = app => {
    // Mount the permission routes
    app.use('/api/customer', require('./customerRoutes'))
}
