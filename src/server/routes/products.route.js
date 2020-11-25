// Express
const Router = require('express').Router()

// Controller
const productsController = require('@controllers/products.controller')

Router.get('/', productsController.retriveAllProducts)
