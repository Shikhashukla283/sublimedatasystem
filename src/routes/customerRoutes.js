const customerRouter = require('express').Router()
const customerController = require('../controllers/customerController')
const customerSchema = require('../schema/customerSchema')
const validationMiddleware = require('../middlewares/validateRequest')

customerRouter.get('/unique', customerController.uniqueCities)
customerRouter.get('/', customerController.list)
customerRouter.post('/', validationMiddleware.validate(customerSchema.customer, 'body'), customerController.create)
customerRouter.get('/:id', customerController.detail)

module.exports = customerRouter
